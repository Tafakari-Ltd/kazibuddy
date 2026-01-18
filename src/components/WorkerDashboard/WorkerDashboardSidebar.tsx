import React from "react";
import { User, MapPin, Badge, DollarSign, Clock } from "lucide-react";
import { WorkerProfile, formatAvailabilitySchedule } from "@/types/worker.types";

interface WorkerDashboardSidebarProps {
  userProfile: WorkerProfile | null;
  onEditProfile: () => void;
  onCreateProfile: () => void;
}

export const WorkerDashboardSidebar: React.FC<WorkerDashboardSidebarProps> = ({
  userProfile,
  onEditProfile,
  onCreateProfile,
}) => {
  return (
    <div className="space-y-6">
      {/* Profile Card */}
      <div className="bg-white border border-gray-200 rounded-lg p-5">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
            <User className="w-5 h-5 text-gray-500" /> My Profile
          </h3>
          {userProfile && (
            <button 
              onClick={onEditProfile}
              className="text-red-600 text-xs font-medium hover:underline"
            >
              Edit
            </button>
          )}
        </div>

        {userProfile ? (
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <MapPin className="w-4 h-4 flex-shrink-0" /> 
              <span className="truncate">{userProfile?.location || "Not set"}</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Badge className="w-4 h-4 flex-shrink-0" /> 
              <span>{userProfile?.years_experience || 0} Years</span>
            </div>
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <DollarSign className="w-4 h-4 flex-shrink-0" /> 
              <span>{userProfile?.hourly_rate ? `${userProfile.hourly_rate}/hr` : "Not set"}</span>
            </div>
            
            <div className="pt-3 border-t border-gray-100">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-600 font-medium">Profile Completion</span>
                <span className="text-xs font-semibold text-gray-900">
                  {userProfile?.profile_completion_percentage || 0}%
                </span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div 
                  className="bg-red-600 h-2 rounded-full transition-all" 
                  style={{ width: `${userProfile?.profile_completion_percentage || 0}%` }}
                ></div>
              </div>
            </div>

            <div className={`mt-3 p-3 rounded-lg text-center text-sm ${
              userProfile?.is_available 
                ? "bg-green-50 text-green-800" 
                : "bg-gray-100 text-gray-700"
            }`}>
              <div className="flex items-center justify-center gap-2 font-medium">
                <div className={`w-2 h-2 rounded-full ${
                  userProfile?.is_available ? "bg-green-500" : "bg-gray-500"
                }`}></div>
                {userProfile?.is_available ? "Available for Work" : "Unavailable"}
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-gray-500 text-sm mb-3">No profile yet</p>
            <button 
              onClick={onCreateProfile}
              className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm"
            >
              Create Profile
            </button>
          </div>
        )}
      </div>

      {/* Availability */}
      {userProfile && (
        <div className="bg-white border border-gray-200 rounded-lg p-5">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-red-600" />
            <h3 className="text-base font-semibold text-gray-900">Availability</h3>
          </div>
          <div className="text-xs text-gray-700 bg-gray-50 p-3 rounded-lg border border-gray-100 leading-relaxed">
            {formatAvailabilitySchedule(userProfile.availability_schedule)}
          </div>
        </div>
      )}

      {/* Pro Tip */}
      <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-lg p-4 border border-red-100">
        <h3 className="font-bold text-red-900 mb-1 text-sm flex items-center gap-1">
          💡 Pro Tip
        </h3>
        <p className="text-red-800 text-xs leading-relaxed">
          Complete your profile to 100% to appear higher in employer searches!
        </p>
        {userProfile && (
          <button 
            onClick={onEditProfile}
            className="text-xs font-semibold text-red-700 hover:text-red-900 mt-2 underline"
          >
            Improve Profile
          </button>
        )}
      </div>
    </div>
  );
};
