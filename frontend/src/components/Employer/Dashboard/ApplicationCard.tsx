import React from "react";
import {
  Mail,
  CheckCircle,
  Ban,
  Calendar,
  Phone,
  Briefcase,
  User,
  Eye,
} from "lucide-react";
import { Application, ApplicationStage } from "@/types/job.types";
import { getStatusBadgeClass, getStageProgress } from "./employerDashboardUtils";

interface ApplicationCardProps {
  application: Application;
  stages: ApplicationStage[];
  onEmail: (email: string) => void;
  onAdvance?: () => void;
  onReject?: () => void;
  onViewProfile?: () => void;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({
  application,
  stages,
  onEmail,
  onAdvance,
  onReject,
  onViewProfile,
}) => {
  const showActions =
    application.status !== "Rejected" &&
    application.status !== "Accepted" &&
    application.status !== "Cancelled";

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-4 flex flex-col h-full">
      {/* Header with Name and Status */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1 flex items-center gap-2">
            <User className="w-4 h-4 text-gray-500 flex-shrink-0" />
            {application.applicantName}
          </h3>
          <p className="text-xs text-gray-600 line-clamp-1">
            {application.jobTitle}
          </p>
        </div>
        <span
          className={`px-2 py-0.5 rounded-full text-xs font-semibold whitespace-nowrap ml-2 ${getStatusBadgeClass(application.status)}`}
        >
          {application.status}
        </span>
      </div>

      {/* Candidate Details */}
      <div className="space-y-2 mb-3 flex-1">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Calendar className="w-3 h-3 flex-shrink-0" />
          <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Phone className="w-3 h-3 flex-shrink-0" />
          <span className="line-clamp-1">{application.phone}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <Briefcase className="w-3 h-3 flex-shrink-0" />
          <span>{application.experience}</span>
        </div>
      </div>

      {/* Progress Bar Section */}
      <div className="mb-3 p-2 bg-gray-50 rounded-lg">
        <div className="flex justify-between text-xs text-gray-600 mb-1.5">
          <span className="font-medium">{application.stage}</span>
          <span className="font-semibold">{Math.round(getStageProgress(application.stage, stages))}%</span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-1.5">
          <div
            className="bg-[#800000] h-1.5 rounded-full transition-all duration-500"
            style={{
              width: `${getStageProgress(application.stage, stages)}%`,
            }}
          />
        </div>
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-gray-100 flex flex-col gap-2 mt-auto">
        {/* View Profile Button - Full width */}
        {onViewProfile && (
          <button
            onClick={onViewProfile}
            className="w-full px-3 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
            title="View Full Profile"
          >
            <Eye className="w-3 h-3" />
            View Full Profile
          </button>
        )}

        {/* Action Buttons Row */}
        <div className="flex gap-2">
          <button
            onClick={() => onEmail(application.email)}
            className="flex-1 px-3 py-2 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
            title="Email Candidate"
          >
            <Mail className="w-3 h-3" />
            Email
          </button>
          {showActions && (
            <>
              {onAdvance && (
                <button
                  onClick={onAdvance}
                  className="flex-1 px-3 py-2 text-green-700 bg-green-50 hover:bg-green-100 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
                  title="Advance"
                >
                  <CheckCircle className="w-3 h-3" />
                  Advance
                </button>
              )}
              {onReject && (
                <button
                  onClick={onReject}
                  className="px-3 py-2 text-red-700 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-medium transition-colors flex items-center justify-center"
                  title="Reject"
                >
                  <Ban className="w-3 h-3" />
                </button>
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationCard;
