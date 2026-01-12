import React from "react";
import {
  User, MapPin, Badge, DollarSign, Star, Briefcase, Calendar,
  Clock, Settings, TrendingUp
} from "lucide-react";
import { WorkerProfile } from "@/types/worker.types";

interface WorkerProfileViewProps {
  userProfile: WorkerProfile | null;
  userName?: string;
  onEditProfile: () => void;
  onCreateProfile: () => void;
  onNavigateToJobs: () => void;
}

export const WorkerProfileView: React.FC<WorkerProfileViewProps> = ({
  userProfile,
  userName,
  onEditProfile,
  onCreateProfile,
  onNavigateToJobs,
}) => {
  if (!userProfile) {
    return (
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        <div className="p-12 text-center">
          <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
            <User className="w-10 h-10 text-gray-400" />
          </div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No Profile Yet</h3>
          <p className="text-gray-600 mb-6">
            Create your worker profile to start applying for jobs and connect with employers.
          </p>
          <button 
            onClick={onCreateProfile}
            className="bg-red-600 text-white px-8 py-3 rounded-lg hover:bg-red-700 transition font-medium inline-flex items-center gap-2"
          >
            <User className="w-5 h-5" />
            Create Profile Now
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Left Column */}
        <div className="space-y-6">
          
          {/* Profile Summary Card */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-red-600" />
                Profile Summary
              </h3>
            </div>
            <div className="p-6">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-20 h-20 bg-red-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <User className="w-10 h-10 text-red-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <h2 className="text-2xl font-bold text-gray-900 mb-1 truncate">
                    {(typeof userProfile?.user !== 'string' ? userProfile?.user?.full_name : undefined) || userName || "Worker"}
                  </h2>
                  <div className="flex items-center gap-2 mb-3">
                    <div className={`w-2 h-2 rounded-full ${userProfile.is_available ? "bg-green-500" : "bg-gray-400"}`}></div>
                    <span className="text-sm text-gray-600">
                      {userProfile.is_available ? "Available for Work" : "Unavailable"}
                    </span>
                  </div>
                  <button 
                    onClick={onEditProfile}
                    className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition text-sm font-medium flex items-center gap-2"
                  >
                    <Settings className="w-4 h-4" />
                    Edit Profile
                  </button>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <MapPin className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-1 min-w-0">
                    <p className="text-xs text-gray-500 mb-0.5">Location</p>
                    <p className="text-sm font-medium text-gray-900 truncate">
                      {userProfile.location_text || "Not set"}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <Badge className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">Experience</p>
                    <p className="text-sm font-medium text-gray-900">
                      {userProfile.years_experience || 0} Years
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg">
                  <DollarSign className="w-5 h-5 text-gray-400 flex-shrink-0" />
                  <div className="flex-1">
                    <p className="text-xs text-gray-500 mb-0.5">Hourly Rate</p>
                    <p className="text-sm font-medium text-gray-900">
                      KES {userProfile.hourly_rate || "Not set"}/hr
                    </p>
                  </div>
                </div>
              </div>

              {/* Profile Completion */}
              <div className="mt-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-700">Profile Completion</span>
                  <span className="text-sm font-bold text-gray-900">{userProfile.profile_completion_percentage || 0}%</span>
                </div>
                <div className="w-full bg-blue-200 rounded-full h-2">
                  <div 
                    className="bg-blue-600 h-2 rounded-full transition-all" 
                    style={{ width: `${userProfile.profile_completion_percentage || 0}%` }}
                  ></div>
                </div>
                {(userProfile.profile_completion_percentage || 0) < 100 && (
                  <p className="text-blue-700 text-xs mt-2">
                    💡 Complete your profile to increase visibility!
                  </p>
                )}
              </div>
            </div>
          </div>
          
          {/* Bio Section */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <User className="w-5 h-5 text-red-600" />
                About Me
              </h3>
            </div>
            <div className="p-6">
              {userProfile.bio ? (
                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {userProfile.bio}
                </p>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-400 mb-3">No bio added yet</p>
                  <button 
                    onClick={onEditProfile}
                    className="text-red-600 hover:text-red-700 font-medium text-sm"
                  >
                    Add Bio
                  </button>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div className="space-y-6">
          
          {/* Quick Stats */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Star className="w-5 h-5 text-red-600" />
                Quick Stats
              </h3>
            </div>
            <div className="p-6 space-y-4">
              <div className="flex items-center justify-between p-4 bg-blue-50 rounded-lg border border-blue-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">0</p>
                    <p className="text-xs text-gray-600">Jobs Completed</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg border border-green-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                    <Star className="w-5 h-5 text-green-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">0.0</p>
                    <p className="text-xs text-gray-600">Rating</p>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between p-4 bg-purple-50 rounded-lg border border-purple-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Badge className="w-5 h-5 text-purple-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-gray-900">{userProfile.years_experience || 0}</p>
                    <p className="text-xs text-gray-600">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Account Info */}
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
            <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
              <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
                <Calendar className="w-5 h-5 text-red-600" />
                Account Details
              </h3>
            </div>
            <div className="p-6 space-y-3">
              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Calendar className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Member Since</p>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {new Date(userProfile.created_at).toLocaleDateString('en-US', { 
                      month: 'long', 
                      year: 'numeric' 
                    })}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Clock className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Last Updated</p>
                  <p className="text-sm font-medium text-gray-900 truncate">
                    {new Date(userProfile.updated_at).toLocaleDateString()}
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
                <Badge className="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" />
                <div className="flex-1 min-w-0">
                  <p className="text-xs text-gray-500 mb-1">Verification Status</p>
                  <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                    userProfile.verification_status === 'verified' 
                      ? 'bg-green-100 text-green-800' 
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {userProfile.verification_status === 'verified' ? '✓ Verified' : 'Pending'}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Action CTA */}
          <div className="bg-gradient-to-br from-red-50 to-orange-50 rounded-xl border border-red-100 p-6">
            <h4 className="font-bold text-red-900 mb-2 flex items-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Ready to Work?
            </h4>
            <p className="text-sm text-red-800 mb-4">
              Start browsing available jobs and apply to opportunities that match your skills!
            </p>
            <button
              onClick={onNavigateToJobs}
              className="w-full bg-red-600 text-white px-4 py-2.5 rounded-lg hover:bg-red-700 transition font-medium text-sm"
            >
              Browse Available Jobs
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
