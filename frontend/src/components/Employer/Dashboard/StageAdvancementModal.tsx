import React, { useState } from "react";
import { X, CheckCircle, AlertCircle } from "lucide-react";
import { Application, ApplicationStage } from "@/types/job.types";

interface StageAdvancementModalProps {
  application: Application;
  stages: ApplicationStage[];
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (newStage: ApplicationStage, notes?: string) => void;
}

const StageAdvancementModal: React.FC<StageAdvancementModalProps> = ({
  application,
  stages,
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [selectedStage, setSelectedStage] = useState<ApplicationStage | null>(null);
  const [notes, setNotes] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  React.useEffect(() => {
    if (isOpen) {
      // Find next stage
      const currentIndex = stages.indexOf(application.stage);
      if (currentIndex >= 0 && currentIndex < stages.length - 1) {
        setSelectedStage(stages[currentIndex + 1]);
      }
    } else {
      setSelectedStage(null);
      setNotes("");
    }
  }, [isOpen, application.stage, stages]);

  const handleSubmit = async () => {
    if (!selectedStage) return;
    
    setIsSubmitting(true);
    try {
      await onConfirm(selectedStage, notes);
      onClose();
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  const currentIndex = stages.indexOf(application.stage);
  const availableStages = stages.slice(currentIndex + 1);

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-2xl max-w-2xl w-full">
          {/* Header */}
          <div className="border-b border-gray-200 px-6 py-4 flex items-center justify-between">
            <div>
              <h2 className="text-xl font-bold text-gray-900">Advance Application</h2>
              <p className="text-sm text-gray-600 mt-1">
                Move {application.applicantName} to the next stage
              </p>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Current Stage */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <div className="flex items-center gap-2 text-blue-900 mb-1">
                <AlertCircle className="w-4 h-4" />
                <p className="font-semibold text-sm">Current Stage</p>
              </div>
              <p className="text-blue-700 font-medium">{application.stage}</p>
            </div>

            {/* Select Next Stage */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-3">
                Select Next Stage <span className="text-red-500">*</span>
              </label>
              <div className="space-y-2">
                {availableStages.length > 0 ? (
                  availableStages.map((stage) => (
                    <button
                      key={stage}
                      onClick={() => setSelectedStage(stage)}
                      className={`w-full text-left px-4 py-3 rounded-lg border-2 transition-all ${
                        selectedStage === stage
                          ? "border-green-500 bg-green-50"
                          : "border-gray-200 hover:border-green-300 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          {selectedStage === stage && (
                            <CheckCircle className="w-5 h-5 text-green-600" />
                          )}
                          <span
                            className={`font-medium ${
                              selectedStage === stage ? "text-green-900" : "text-gray-900"
                            }`}
                          >
                            {stage}
                          </span>
                        </div>
                        {selectedStage === stage && (
                          <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded-full text-xs font-medium">
                            Selected
                          </span>
                        )}
                      </div>
                    </button>
                  ))
                ) : (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center">
                    <CheckCircle className="w-12 h-12 text-green-500 mx-auto mb-2" />
                    <p className="text-gray-700 font-medium">
                      This application is at the final stage
                    </p>
                    <p className="text-sm text-gray-600 mt-1">
                      Consider accepting or rejecting the application
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Notes */}
            <div>
              <label className="block text-sm font-semibold text-gray-900 mb-2">
                Notes (Optional)
              </label>
              <textarea
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
                placeholder="Add any notes about this stage advancement..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent resize-none"
              />
              <p className="text-xs text-gray-500 mt-1">
                These notes will be saved with the application history
              </p>
            </div>

            {/* Warning */}
            <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
              <div className="flex gap-3">
                <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="text-sm font-medium text-yellow-900">
                    Important Note
                  </p>
                  <p className="text-sm text-yellow-700 mt-1">
                    The candidate will be notified about this stage advancement. 
                    Make sure to follow up with them accordingly.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-end gap-3">
            <button
              onClick={onClose}
              disabled={isSubmitting}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium disabled:opacity-50"
            >
              Cancel
            </button>
            <button
              onClick={handleSubmit}
              disabled={!selectedStage || isSubmitting}
              className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full" />
                  Advancing...
                </>
              ) : (
                <>
                  <CheckCircle className="w-4 h-4" />
                  Advance Application
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StageAdvancementModal;
