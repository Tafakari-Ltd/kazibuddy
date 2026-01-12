import React from "react";
import { AlertCircle } from "lucide-react";

interface WorkerProfileSetupAlertProps {
  onCreateProfile: () => void;
}

export const WorkerProfileSetupAlert: React.FC<WorkerProfileSetupAlertProps> = ({
  onCreateProfile,
}) => {
  return (
    <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
      <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
      <div className="flex-1">
        <h3 className="font-semibold text-amber-900 text-sm">Complete Your Profile</h3>
        <p className="text-amber-800 text-xs mt-1">
          Set up your worker profile to start applying for jobs. It only takes 2 minutes!
        </p>
      </div>
      <button 
        onClick={onCreateProfile}
        className="bg-amber-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-amber-700 transition whitespace-nowrap"
      >
        Create Profile
      </button>
    </div>
  );
};
