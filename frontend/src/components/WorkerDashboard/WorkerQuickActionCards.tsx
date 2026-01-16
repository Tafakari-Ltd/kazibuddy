import React from "react";
import { Search, Briefcase, ChevronRight } from "lucide-react";

interface WorkerQuickActionCardsProps {
  availableJobsCount: number;
  onFindJobs: () => void;
  onMyApplications: () => void;
}

export const WorkerQuickActionCards: React.FC<WorkerQuickActionCardsProps> = ({
  availableJobsCount,
  onFindJobs,
  onMyApplications,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4">
      <button
        onClick={onFindJobs}
        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-left group"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
            <Search className="w-5 h-5 text-red-600" />
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition" />
        </div>
        <h3 className="font-semibold text-gray-900 text-sm">Find Jobs</h3>
        <p className="text-xs text-gray-600 mt-1">{availableJobsCount} jobs available</p>
      </button>

      <button
        onClick={onMyApplications}
        className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-left group"
      >
        <div className="flex items-center justify-between mb-2">
          <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
            <Briefcase className="w-5 h-5 text-blue-600" />
          </div>
          <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-600 transition" />
        </div>
        <h3 className="font-semibold text-gray-900 text-sm">My Applications</h3>
        <p className="text-xs text-gray-600 mt-1">Track your progress</p>
      </button>
    </div>
  );
};
