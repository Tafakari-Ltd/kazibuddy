"use client";

import React from "react";
import {
  MapPin,
  DollarSign,
  Clock,
  Calendar,
  Building,
  ChevronRight,
} from "lucide-react";
import { JobApplicationWithDetails } from "../../types/jobApplication.types";
import Link from "next/link";

interface ApplicationCardProps {
  application: JobApplicationWithDetails;
  onView: (id: string) => void;
  onDelete: (id: string) => void;
  className?: string;
}

const ApplicationCard: React.FC<ApplicationCardProps> = ({
  application,
  onView,
  onDelete,
  className = "",
}) => {
  const getStatusConfig = (status: string) => {
    const configs = {
      pending: {
        bg: "bg-yellow-100",
        text: "text-yellow-700",
        label: "Pending",
      },
      reviewed: {
        bg: "bg-blue-100",
        text: "text-blue-700",
        label: "In Review",
      },
      accepted: {
        bg: "bg-green-100",
        text: "text-green-700",
        label: "Accepted",
      },
      rejected: {
        bg: "bg-red-100",
        text: "text-red-700",
        label: "Rejected",
      },
      withdrawn: {
        bg: "bg-gray-100",
        text: "text-gray-700",
        label: "Withdrawn",
      },
    };
    return (
      configs[status as keyof typeof configs] || configs.pending
    );
  };

  const formatTimeAgo = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInDays = Math.floor(diffInMs / (1000 * 60 * 60 * 24));

    if (diffInDays === 0) return "Today";
    if (diffInDays === 1) return "Yesterday";
    if (diffInDays < 7) return `${diffInDays}d ago`;
    if (diffInDays < 30) return `${Math.floor(diffInDays / 7)}w ago`;
    return `${Math.floor(diffInDays / 30)}mo ago`;
  };

  const statusConfig = getStatusConfig(application.status);

  const jobTitle =
    (typeof application.job !== "string"
      ? application.job?.title
      : undefined) ||
    application.job_details?.title ||
    "Job Application";

  const companyName =
    (typeof application.job !== "string" &&
    typeof application.job?.employer === "object"
      ? application.job?.employer?.company_name
      : undefined) ||
    application.employer_details?.company_name ||
    "Company";

  const location =
    (typeof application.job !== "string"
      ? application.job?.location_text
      : undefined) || application.job_details?.location_text;

  const budgetMin =
    (typeof application.job !== "string"
      ? application.job?.budget_min
      : undefined) || application.job_details?.budget_min;

  const budgetMax =
    (typeof application.job !== "string"
      ? application.job?.budget_max
      : undefined) || application.job_details?.budget_max;

  const jobType =
    (typeof application.job !== "string"
      ? application.job?.job_type
      : undefined) || application.job_details?.job_type;

  const estimatedHours =
    (typeof application.job !== "string"
      ? application.job?.estimated_hours
      : undefined) || application.job_details?.estimated_hours;

  return (
    <div
      className={`bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-4 flex flex-col ${className}`}
    >
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
            {jobTitle}
          </h3>
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Building className="w-3 h-3" />
            <span className="line-clamp-1">{companyName}</span>
          </div>
        </div>
        <span
          className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${statusConfig.bg} ${statusConfig.text} font-medium`}
        >
          {statusConfig.label}
        </span>
      </div>

      <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
        Applied with rate: <span className="font-semibold">KES {application.proposed_rate}</span>
        {application.cover_letter && ` • ${application.cover_letter.substring(0, 60)}...`}
      </p>

      <div className="space-y-2 mb-3">
        {location && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <MapPin className="w-3 h-3 flex-shrink-0" />
            <span className="line-clamp-1">{location}</span>
          </div>
        )}
        {budgetMin && budgetMax && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <DollarSign className="w-3 h-3 flex-shrink-0" />
            <span>
              KES {budgetMin} - {budgetMax}
            </span>
          </div>
        )}
        {jobType && (
          <div className="flex items-center gap-2 text-xs text-gray-600">
            <Clock className="w-3 h-3 flex-shrink-0" />
            <span className="capitalize">{jobType.replace("_", " ")}</span>
            {estimatedHours && (
              <>
                <span>•</span>
                <span>{estimatedHours}h</span>
              </>
            )}
          </div>
        )}
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <Calendar className="w-3 h-3 flex-shrink-0" />
          <span>Applied {formatTimeAgo(application.applied_at)}</span>
        </div>
      </div>

      <div className="mt-4 pt-4 border-t border-gray-200 flex items-center justify-between">
        <button
          onClick={() => onView(application.id)}
          className="text-sm font-medium text-blue-600 hover:text-blue-700"
        >
          View Details
        </button>
        <button
          onClick={() => onDelete(application.id)}
          className="text-red-600 hover:text-red-700 font-medium text-sm"
        >
          Withdraw
        </button>
      </div>
    </div>
  );
};

export default ApplicationCard;
