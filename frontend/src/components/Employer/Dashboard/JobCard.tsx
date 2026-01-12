import React from "react";
import { Eye, Edit2, Trash2, MapPin, DollarSign, Clock, Users } from "lucide-react";
import { Job, JobStatus } from "@/types/job.types";
import {
  getDetailedStatus,
  getJobStatusMessage,
  getCategoryName,
} from "./employerDashboardUtils";

interface JobCardProps {
  job: Job;
  categories: Array<{ id: string; name: string }>;
  onView: (job: Job) => void;
  onEdit: (job: Job) => void;
  onDelete: (job: Job) => void;
}

const JobCard: React.FC<JobCardProps> = ({
  job,
  categories,
  onView,
  onEdit,
  onDelete,
}) => {
  const status = getDetailedStatus(job.status, job.admin_approved);
  const StatusIcon = status.icon;
  const categoryName = getCategoryName(job.category, categories);
  const statusMessage = getJobStatusMessage(job.status, job.admin_approved);

  return (
    <div className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-4 flex flex-col h-full">
      {/* Header with Title and Status */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
            {job.title}
          </h3>
          <span className="inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold bg-blue-100 text-blue-800">
            {categoryName}
          </span>
        </div>
        <span
          className={`flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-bold whitespace-nowrap ml-2 ${status.color}`}
        >
          <StatusIcon className="w-3 h-3" />
          {status.label}
        </span>
      </div>

      {/* Description */}
      {job.description && (
        <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
          {job.description}
        </p>
      )}

      {/* Job Details */}
      <div className="space-y-2 mb-3">
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <MapPin className="w-3 h-3 flex-shrink-0" />
          <span className="line-clamp-1">{job.location}</span>
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-600">
          <DollarSign className="w-3 h-3 flex-shrink-0" />
          <span>KES {job.budget_min.toLocaleString()} - KES {job.budget_max.toLocaleString()}</span>
        </div>
        {job.estimated_hours && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Clock className="w-3 h-3 flex-shrink-0" />
            <span>{job.estimated_hours}h estimated</span>
          </div>
        )}
      </div>

      {/* Status Message */}
      <div className="mb-3 p-2 rounded-lg bg-gray-50 text-xs text-gray-600 line-clamp-2">
        {statusMessage}
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t border-gray-100 flex gap-2 mt-auto">
        <button
          onClick={() => onView(job)}
          className="flex-1 px-3 py-2 text-gray-700 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
          title="View Details"
        >
          <Eye className="w-3 h-3" />
          View
        </button>
        <button
          onClick={() => onEdit(job)}
          className="flex-1 px-3 py-2 text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-lg text-xs font-medium transition-colors flex items-center justify-center gap-1"
          title="Edit Job"
        >
          <Edit2 className="w-3 h-3" />
          Edit
        </button>
        <button
          onClick={() => onDelete(job)}
          className="px-3 py-2 text-red-700 bg-red-50 hover:bg-red-100 rounded-lg text-xs font-medium transition-colors flex items-center justify-center"
          title="Delete Job"
        >
          <Trash2 className="w-3 h-3" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
