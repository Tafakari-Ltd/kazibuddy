import React from "react";
import { Activity } from "lucide-react";
import { WorkerProfile } from "@/types/worker.types";
import { JobDetails } from "@/types/jobApplication.types";
import { WorkerQuickActionCards } from "./WorkerQuickActionCards";
import { WorkerFeaturedJobsList } from "./WorkerFeaturedJobsList";
import { WorkerDashboardSidebar } from "./WorkerDashboardSidebar";

interface WorkerDashboardViewProps {
  availableJobs: JobDetails[];
  userProfile: WorkerProfile | null;
  onFindJobs: () => void;
  onMyApplications: () => void;
  onEditProfile: () => void;
  onCreateProfile: () => void;
}

export const WorkerDashboardView: React.FC<WorkerDashboardViewProps> = ({
  availableJobs,
  userProfile,
  onFindJobs,
  onMyApplications,
  onEditProfile,
  onCreateProfile,
}) => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
      {/* Main Content - 2 columns */}
      <div className="lg:col-span-2 space-y-6">
        {/* Quick Actions Cards */}
        <WorkerQuickActionCards
          availableJobsCount={availableJobs.length}
          onFindJobs={onFindJobs}
          onMyApplications={onMyApplications}
        />

        {/* Featured Jobs */}
        <WorkerFeaturedJobsList
          jobs={availableJobs}
          onViewAllJobs={onFindJobs}
        />

        {/* Recent Activity */}
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <h3 className="font-bold text-gray-800 mb-4 flex items-center gap-2 text-base">
            <Activity className="w-5 h-5 text-gray-500" /> Recent Activity
          </h3>
          <div className="space-y-3 relative before:absolute before:left-2 before:top-2 before:h-[calc(100%-16px)] before:w-0.5 before:bg-gray-100">
            <div className="relative pl-6">
              <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-red-500 border-2 border-white"></div>
              <p className="text-sm text-gray-800 font-medium">Logged in to Dashboard</p>
              <p className="text-xs text-gray-500">Just now</p>
            </div>
          </div>
        </div>
      </div>

      {/* Sidebar - 1 column */}
      <WorkerDashboardSidebar
        userProfile={userProfile}
        onEditProfile={onEditProfile}
        onCreateProfile={onCreateProfile}
      />
    </div>
  );
};
