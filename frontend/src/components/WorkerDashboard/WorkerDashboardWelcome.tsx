"use client";
import React from "react";
import { Briefcase, TrendingUp } from "lucide-react";

interface WorkerDashboardWelcomeProps {
  userName: string;
  availableJobsCount: number;
  profileCompletion: number;
  onBrowseJobs: () => void;
  onCompleteProfile: () => void;
  showCompleteProfileBtn: boolean;
}

const WorkerDashboardWelcome: React.FC<WorkerDashboardWelcomeProps> = ({
  userName,
  availableJobsCount,
  profileCompletion,
  onBrowseJobs,
  onCompleteProfile,
  showCompleteProfileBtn,
}) => {
  return (
    <div className="mb-6 bg-gradient-to-r from-red-600 to-red-700 rounded-xl p-5 text-white shadow-md relative overflow-hidden">
      <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div className="flex-1">
          <h1 className="text-xl md:text-2xl font-bold mb-1">
            Welcome back, {userName}! 👋
          </h1>
          <p className="text-red-100 text-sm">
            <span className="font-semibold text-white">{availableJobsCount} jobs</span> available • 
            Profile <span className="font-semibold text-white">{profileCompletion}%</span> complete
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={onBrowseJobs}
            className="bg-white text-red-700 px-4 py-2 rounded-lg font-medium hover:bg-red-50 transition text-sm flex items-center gap-2"
          >
            <Briefcase className="w-4 h-4" />
            Browse Jobs
          </button>
          {showCompleteProfileBtn && profileCompletion < 100 && (
            <button
              onClick={onCompleteProfile}
              className="bg-red-800 text-white border border-red-500 px-4 py-2 rounded-lg font-medium hover:bg-red-900 transition text-sm flex items-center gap-2"
            >
              <TrendingUp className="w-4 h-4" />
              Complete Profile
            </button>
          )}
        </div>
      </div>
      <div className="absolute right-0 top-0 h-full w-1/3 bg-white/5 transform skew-x-12 translate-x-12"></div>
    </div>
  );
};

export default WorkerDashboardWelcome;