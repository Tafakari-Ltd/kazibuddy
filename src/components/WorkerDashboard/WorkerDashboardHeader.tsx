import React from "react";
import { Home, MessageSquare } from "lucide-react";
import { useRouter } from "next/navigation";

interface WorkerDashboardHeaderProps {
  userName?: string;
  availableJobsCount: number;
  profileCompletionPercentage: number;
}

export const WorkerDashboardHeader: React.FC<WorkerDashboardHeaderProps> = ({
  userName,
  availableJobsCount,
  profileCompletionPercentage,
}) => {
  const router = useRouter();

  return (
    <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Welcome back, {userName || "Worker"}! 👋
        </h1>
        <p className="text-sm text-gray-600 mt-1">
          {availableJobsCount} new jobs available • Profile {profileCompletionPercentage}% complete
        </p>
      </div>
      <div className="flex gap-2">
        <button
          onClick={() => router.push("/")}
          className="flex items-center gap-2 px-4 py-2 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors text-sm font-medium"
        >
          <Home className="w-4 h-4" />
          Home
        </button>
        <button
          onClick={() => router.push('/messages')}
          className="flex items-center gap-2 px-4 py-2 text-white bg-red-600 rounded-lg hover:bg-red-700 transition-colors text-sm font-medium"
        >
          <MessageSquare className="w-4 h-4" />
          Messages
        </button>
      </div>
    </div>
  );
};
