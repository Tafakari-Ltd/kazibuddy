import React, { useState, useEffect } from "react";
import {
  X,
  MapPin,
  DollarSign,
  Calendar,
  Award,
  Briefcase,
  Clock,
  Mail,
  Phone,
  CheckCircle,
  Star,
  FileText,
  ExternalLink,
} from "lucide-react";
import { Application } from "@/types/job.types";

interface WorkerProfileModalProps {
  application: Application;
  isOpen: boolean;
  onClose: () => void;
  onAdvanceStage?: () => void;
  onReject?: () => void;
}

const WorkerProfileModal: React.FC<WorkerProfileModalProps> = ({
  application,
  isOpen,
  onClose,
  onAdvanceStage,
  onReject,
}) => {
  const [activeTab, setActiveTab] = useState<"overview" | "details" | "application">("overview");

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  const showActions =
    application.status !== "Rejected" &&
    application.status !== "Accepted" &&
    application.status !== "Cancelled";

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Modal */}
        <div className="relative bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col">
          {/* Header */}
          <div className="bg-gradient-to-r from-red-700 to-red-900 text-white px-6 py-5 flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-red-700 font-bold text-2xl">
                {application.applicantName.charAt(0).toUpperCase()}
              </div>
              <div>
                <h2 className="text-2xl font-bold">{application.applicantName}</h2>
                <p className="text-red-100 text-sm">{application.experience}</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Tabs */}
          <div className="border-b border-gray-200 px-6">
            <div className="flex gap-6">
              {[
                { id: "overview", label: "Overview" },
                { id: "details", label: "Details" },
                { id: "application", label: "Application" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`py-3 px-2 border-b-2 font-medium text-sm transition-colors ${
                    activeTab === tab.id
                      ? "border-red-700 text-red-700"
                      : "border-transparent text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 overflow-y-auto p-6">
            {activeTab === "overview" && (
              <div className="space-y-6">
                {/* Quick Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="bg-blue-50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <Phone className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Phone</p>
                        <p className="font-semibold text-gray-900">{application.phone}</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                        <Mail className="w-5 h-5 text-green-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Email</p>
                        <p className="font-semibold text-gray-900 text-sm truncate">
                          {application.email}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 rounded-lg p-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                        <Calendar className="w-5 h-5 text-purple-600" />
                      </div>
                      <div>
                        <p className="text-xs text-gray-600">Available</p>
                        <p className="font-semibold text-gray-900">{application.availability}</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Job Applied For */}
                <div className="bg-gray-50 rounded-lg p-4">
                  <h3 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-gray-500" />
                    Applied For
                  </h3>
                  <p className="text-gray-700 font-medium">{application.jobTitle}</p>
                  <p className="text-sm text-gray-600 mt-1">
                    Applied on {new Date(application.appliedDate).toLocaleDateString()}
                  </p>
                </div>

                {/* Experience Summary */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gray-500" />
                    Experience Level
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <span className="text-gray-700">{application.experience}</span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
                        Experienced
                      </span>
                    </div>
                  </div>
                </div>

                {/* Application Message */}
                {application.message && (
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                      <FileText className="w-5 h-5 text-gray-500" />
                      Cover Letter
                    </h3>
                    <div className="bg-white border border-gray-200 rounded-lg p-4">
                      <p className="text-gray-700 leading-relaxed">{application.message}</p>
                    </div>
                  </div>
                )}
              </div>
            )}

            {activeTab === "details" && (
              <div className="space-y-6">
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <p className="text-sm text-yellow-800">
                    <strong>Note:</strong> Detailed worker profile information including certifications, 
                    skills, portfolio, and work history will be displayed here. This requires integration 
                    with the worker profile API endpoint.
                  </p>
                </div>

                {/* Placeholder sections */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Award className="w-5 h-5 text-gray-500" />
                    Skills & Certifications
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 text-sm italic">
                      Skills and certifications data will be loaded from the worker profile.
                    </p>
                    {/* Example structure */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        Example Skill 1
                      </span>
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
                        Example Skill 2
                      </span>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Briefcase className="w-5 h-5 text-gray-500" />
                    Work History
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 text-sm italic">
                      Work history will be loaded from the worker profile.
                    </p>
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                    <Star className="w-5 h-5 text-gray-500" />
                    Reviews & Ratings
                  </h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-600 text-sm italic">
                      Reviews and ratings will be loaded from the worker profile.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === "application" && (
              <div className="space-y-6">
                {/* Application Status */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Application Status</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-gray-600">Current Status</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">
                          {application.status}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm text-gray-600">Current Stage</p>
                        <p className="text-lg font-semibold text-gray-900 mt-1">
                          {application.stage}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Timeline */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Application Timeline</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <div className="space-y-4">
                      <div className="flex gap-3">
                        <div className="flex-shrink-0">
                          <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                            <CheckCircle className="w-4 h-4 text-green-600" />
                          </div>
                        </div>
                        <div>
                          <p className="font-medium text-gray-900">Application Submitted</p>
                          <p className="text-sm text-gray-600">
                            {new Date(application.appliedDate).toLocaleDateString()} at{" "}
                            {new Date(application.appliedDate).toLocaleTimeString()}
                          </p>
                        </div>
                      </div>

                      {application.status !== "Pending" && (
                        <div className="flex gap-3">
                          <div className="flex-shrink-0">
                            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                              <Clock className="w-4 h-4 text-blue-600" />
                            </div>
                          </div>
                          <div>
                            <p className="font-medium text-gray-900">Under Review</p>
                            <p className="text-sm text-gray-600">
                              Application is being reviewed
                            </p>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Application Details */}
                <div>
                  <h3 className="font-semibold text-gray-900 mb-3">Application Details</h3>
                  <div className="bg-white border border-gray-200 rounded-lg p-4 space-y-3">
                    <div>
                      <p className="text-sm text-gray-600">Availability Start Date</p>
                      <p className="font-medium text-gray-900">{application.availability}</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-600">Experience Level</p>
                      <p className="font-medium text-gray-900">{application.experience}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Footer Actions */}
          <div className="border-t border-gray-200 px-6 py-4 bg-gray-50 flex items-center justify-between gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors font-medium"
            >
              Close
            </button>

            {showActions && (
              <div className="flex gap-3">
                <a
                  href={`mailto:${application.email}`}
                  className="px-4 py-2 border border-blue-300 bg-blue-50 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors font-medium flex items-center gap-2"
                >
                  <Mail className="w-4 h-4" />
                  Email Candidate
                </a>

                {onReject && (
                  <button
                    onClick={onReject}
                    className="px-4 py-2 border border-red-300 bg-red-50 text-red-700 rounded-lg hover:bg-red-100 transition-colors font-medium"
                  >
                    Reject
                  </button>
                )}

                {onAdvanceStage && (
                  <button
                    onClick={onAdvanceStage}
                    className="px-6 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors font-medium flex items-center gap-2"
                  >
                    <CheckCircle className="w-4 h-4" />
                    Advance to Next Stage
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkerProfileModal;
