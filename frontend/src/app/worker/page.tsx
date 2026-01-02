"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import {
  AlertCircle, MapPin, DollarSign, Clock, User, Badge, ArrowRight, Star,
  Activity, Settings, Home, MessageSquare, Search, Filter, Briefcase,
  TrendingUp, Calendar, ChevronRight
} from "lucide-react";

import { RootState } from "@/Redux/Store/Store";
import { useWorkerProfiles } from "@/Redux/Functions/useWorkerProfiles";
import { useJobs } from "@/Redux/Functions/useJobs";
import { formatAvailabilitySchedule, CreateWorkerProfileData } from "@/types/worker.types";
import { JobDetails } from "@/types/jobApplication.types";

import DashboardWelcome from "@/components/WorkerDashboard/DashboardWelcome";
import WorkerStatsCards from "@/components/WorkerDashboard/WorkerStatsCards";
import WorkerProfileForm from "@/components/WorkerDashboard/WorkerProfileForm";
import WorkerTabs from "@/components/WorkerDashboard/WorkerTabs";
import { AvailableJobs } from "@/components/WorkerDashboard/AvailableJobs";
import { MyApplicationsSection } from "@/components/WorkerDashboard/MyApplicationsSection";

const STATUS_OPTIONS = [
  "Dashboard",
  "Find Jobs",
  "My Applications",
  "Profile",
  "Settings",
];

const WorkerDashboardPage = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [setupProfile, setSetupProfile] = useState<string | null>(null);

  const { user, userId, isAuthenticated } = useSelector((state: RootState) => state.auth || {});
  const currentUserId = userId || user?.user_id || user?.id;

  const {
    userProfile,
    loading: profileLoading,
    error: profileError,
    successMessage,
    handleFetchUserWorkerProfile,
    handleCreateWorkerProfile,
    handleUpdateWorkerProfile,
    handleClearState,
    hasUserProfile,
  } = useWorkerProfiles();

  const { handleFetchJobs } = useJobs();

  const [filter, setFilter] = useState<string>("Dashboard");
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [isClient, setIsClient] = useState(false);

  const [availableJobs, setAvailableJobs] = useState<JobDetails[]>([]);
  const [jobsLoading, setJobsLoading] = useState(false);
  const [jobsError, setJobsError] = useState<string | null>(null);

  useEffect(() => { setIsClient(true); }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setSetupProfile(searchParams?.get("setup") || null);
    }
  }, [searchParams]);

  useEffect(() => {
    if (currentUserId && isAuthenticated) {
      handleFetchUserWorkerProfile(currentUserId);
    }
  }, [currentUserId, isAuthenticated, handleFetchUserWorkerProfile]);

  useEffect(() => {
    if (setupProfile === "1") {
      if (!hasUserProfile()) {
        setShowProfileModal(true);
        setFilter("Profile");
      } else {
        setFilter("Dashboard");
      }
    }
  }, [setupProfile, hasUserProfile]);

  useEffect(() => {
    if (successMessage) {
      toast.success(typeof successMessage === 'string' ? successMessage : 'Success');
      handleClearState();
      setShowProfileModal(false);
      setShowEditModal(false);
      if (currentUserId) setTimeout(() => handleFetchUserWorkerProfile(currentUserId), 500);
    }
    if (profileError && typeof profileError === 'string' && !profileError.includes('No worker profile found')) {
      toast.error(profileError);
      handleClearState();
    }
  }, [successMessage, profileError, handleClearState, currentUserId, handleFetchUserWorkerProfile]);

  const fetchAvailableJobs = async () => {
    try {
      setJobsLoading(true);
      const result = await handleFetchJobs({ status: 'active' as any, page: 1, limit: 1000 });
      
      if (result && typeof result !== 'string') {
        let jobsArray = [];
        
        if ((result as any).results && !Array.isArray((result as any).results) && (result as any).results.data && Array.isArray((result as any).results.data)) {
            jobsArray = (result as any).results.data;
        }
        else if ((result as any).results && Array.isArray((result as any).results)) {
            jobsArray = (result as any).results;
        }
        else if (result.data && Array.isArray(result.data)) {
            jobsArray = result.data;
        }
        else if ('data' in result && Array.isArray(result.data)) {
            jobsArray = result.data;
        }
        else if (Array.isArray(result)) {
            jobsArray = result;
        }

        if (jobsArray.length > 0) {
          const transformedJobs: JobDetails[] = jobsArray.map((job: any) => ({
            id: job.id,
            title: job.title,
            description: job.description,
            location: job.location,
            location_text: job.location_text || job.location,
            job_type: job.job_type,
            urgency_level: job.urgency_level,
            budget_min: job.budget_min,
            budget_max: job.budget_max,
            payment_type: job.payment_type,
            start_date: job.start_date,
            end_date: job.end_date,
            estimated_hours: job.estimated_hours,
            max_applicants: job.max_applicants,
            status: job.status,
            visibility: job.visibility,
            employer: job.employer,
            category: job.category
          }));
          setAvailableJobs(transformedJobs);
        } else {
          setAvailableJobs([]);
        }
      } else {
        setAvailableJobs([]);
      }
    } catch (err: any) {
      setJobsError(err?.message || 'Failed to fetch jobs');
    } finally {
      setJobsLoading(false);
    }
  };

  useEffect(() => {
    if ((filter === "Find Jobs" || filter === "Dashboard") && availableJobs.length === 0 && !jobsLoading) {
      fetchAvailableJobs();
    }
  }, [filter, availableJobs.length, jobsLoading]);

  const handleProfileSubmit = async (data: CreateWorkerProfileData) => {
    try {
      if (showProfileModal) {
        await handleCreateWorkerProfile(data);
      } else if (userProfile?.id) {
        await handleUpdateWorkerProfile(userProfile.id, data);
      }
    } catch (error: any) {
      toast.error(error?.message || "Operation failed");
    }
  };

  if (!isClient || (profileLoading && !userProfile)) {
    return (
      <div className="px-4 md:px-6 lg:px-8 py-6 bg-gray-50 min-h-screen max-w-7xl mx-auto">
        <div className="animate-pulse space-y-4">
          <div className="h-20 bg-gray-200 rounded-lg w-full"></div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => <div key={i} className="h-24 bg-gray-200 rounded-lg"></div>)}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mb-6">
        
        {/* Compact Header with Quick Actions */}
        <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">
              Welcome back, {(typeof userProfile?.user !== 'string' ? userProfile?.user?.full_name : undefined) || user?.full_name || "Worker"}! 👋
            </h1>
            <p className="text-sm text-gray-600 mt-1">
              {availableJobs.length} new jobs available • Profile {userProfile?.profile_completion_percentage || 0}% complete
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

        {/* Profile Setup Alert */}
        {!hasUserProfile() && (
          <div className="bg-gradient-to-r from-amber-50 to-orange-50 border border-amber-200 rounded-lg p-4 mb-6 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div className="flex-1">
              <h3 className="font-semibold text-amber-900 text-sm">Complete Your Profile</h3>
              <p className="text-amber-800 text-xs mt-1">
                Set up your worker profile to start applying for jobs. It only takes 2 minutes!
              </p>
            </div>
            <button 
              onClick={() => setShowProfileModal(true)} 
              className="bg-amber-600 text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-amber-700 transition whitespace-nowrap"
            >
              Create Profile
            </button>
          </div>
        )}

        {/* Stats Cards */}
        {hasUserProfile() && <WorkerStatsCards />}

        {/* Navigation Tabs */}
        <WorkerTabs activeTab={filter} setTab={setFilter} options={STATUS_OPTIONS} />

        {/* DASHBOARD VIEW */}
        {filter === "Dashboard" && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            
            {/* Main Content - 2 columns */}
            <div className="lg:col-span-2 space-y-6">
              
              {/* Quick Actions Cards */}
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => setFilter("Find Jobs")}
                  className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow text-left group"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-red-100 rounded-lg flex items-center justify-center">
                      <Search className="w-5 h-5 text-red-600" />
                    </div>
                    <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-red-600 transition" />
                  </div>
                  <h3 className="font-semibold text-gray-900 text-sm">Find Jobs</h3>
                  <p className="text-xs text-gray-600 mt-1">{availableJobs.length} jobs available</p>
                </button>

                <button
                  onClick={() => setFilter("My Applications")}
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

              {/* Featured Jobs */}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    <TrendingUp className="w-5 h-5 text-red-600" /> 
                    Featured Jobs
                  </h3>
                  <button 
                    onClick={() => setFilter("Find Jobs")} 
                    className="text-red-600 text-xs font-medium hover:underline flex items-center gap-1"
                  >
                    View All <ArrowRight className="w-3 h-3" />
                  </button>
                </div>
                {availableJobs.length > 0 ? (
                  <div className="space-y-3">
                    {availableJobs.slice(0, 4).map(job => (
                      <div 
                        key={job.id} 
                        className="bg-gray-50 p-3 rounded-lg border border-gray-100 hover:bg-red-50 hover:border-red-200 transition cursor-pointer group"
                      >
                        <div className="flex justify-between items-start mb-2">
                          <div className="flex-1">
                            <h4 className="font-semibold text-gray-900 text-sm group-hover:text-red-700 transition">
                              {job.title}
                            </h4>
                            <p className="text-xs text-gray-500 mt-0.5 line-clamp-1">{job.description}</p>
                          </div>
                          <span className={`text-xs px-2 py-0.5 rounded-full ml-2 whitespace-nowrap ${
                            job.urgency_level === 'high' ? 'bg-red-100 text-red-700' :
                            job.urgency_level === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                            'bg-green-100 text-green-700'
                          }`}>
                            {job.urgency_level}
                          </span>
                        </div>
                        <div className="flex items-center gap-3 text-xs text-gray-600">
                          <span className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> {job.location_text}
                          </span>
                          <span className="flex items-center gap-1">
                            <DollarSign className="w-3 h-3" /> KES {job.budget_min}-{job.budget_max}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" /> {job.job_type}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-8 text-gray-500 text-sm">
                    No jobs available yet. Check back soon!
                  </div>
                )}
              </div>

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
            <div className="space-y-6">
              
              {/* Profile Card */}
              <div className="bg-white border border-gray-200 rounded-lg p-5">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
                    <User className="w-5 h-5 text-gray-500" /> My Profile
                  </h3>
                  {userProfile && (
                    <button 
                      onClick={() => setShowEditModal(true)} 
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
                      onClick={() => setShowProfileModal(true)} 
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
                    onClick={() => setShowEditModal(true)} 
                    className="text-xs font-semibold text-red-700 hover:text-red-900 mt-2 underline"
                  >
                    Improve Profile
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* FIND JOBS VIEW */}
        {filter === "Find Jobs" && (
          <div>
            {hasUserProfile() ? (
              <AvailableJobs 
                jobs={availableJobs} 
                loading={jobsLoading} 
                error={jobsError} 
                onRefresh={fetchAvailableJobs} 
              />
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
                <AlertCircle className="w-12 h-12 mx-auto text-yellow-600 mb-3" />
                <h3 className="font-bold text-yellow-800 text-lg">Profile Required</h3>
                <p className="text-sm text-yellow-700 mt-1 mb-4">
                  Please create a profile to view and apply for jobs.
                </p>
                <button 
                  onClick={() => setShowProfileModal(true)} 
                  className="bg-yellow-600 text-white px-5 py-2 rounded-lg hover:bg-yellow-700 font-medium"
                >
                  Create Profile
                </button>
              </div>
            )}
          </div>
        )}

        {/* MY APPLICATIONS VIEW */}
        {filter === "My Applications" && (
          <div>
            {hasUserProfile() ? (
              <MyApplicationsSection showAll={true} />
            ) : (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-8 text-center">
                <AlertCircle className="w-12 h-12 mx-auto text-yellow-600 mb-3" />
                <h3 className="font-bold text-yellow-800 text-lg">Profile Required</h3>
                <p className="text-sm text-yellow-700 mt-1 mb-4">
                  Please create a profile first.
                </p>
                <button 
                  onClick={() => setShowProfileModal(true)} 
                  className="bg-yellow-600 text-white px-5 py-2 rounded-lg hover:bg-yellow-700 font-medium"
                >
                  Create Profile
                </button>
              </div>
            )}
          </div>
        )}

        {/* PROFILE VIEW */}
        {filter === "Profile" && (
          <div className="max-w-4xl mx-auto">
            <div className="bg-white border border-gray-200 rounded-lg p-6">
              <h2 className="text-xl font-bold text-gray-900 mb-6">Worker Profile</h2>
              {userProfile ? (
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Location</label>
                      <p className="text-gray-900">{userProfile.location || "Not set"}</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Experience</label>
                      <p className="text-gray-900">{userProfile.years_experience || 0} years</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Hourly Rate</label>
                      <p className="text-gray-900">${userProfile.hourly_rate || "Not set"}/hr</p>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 block mb-1">Status</label>
                      <p className="text-gray-900">
                        {userProfile.is_available ? "Available" : "Unavailable"}
                      </p>
                    </div>
                  </div>
                  <div>
                    <label className="text-sm font-medium text-gray-700 block mb-1">Bio</label>
                    <p className="text-gray-900 leading-relaxed">{userProfile.bio || "No bio added"}</p>
                  </div>
                  <button 
                    onClick={() => setShowEditModal(true)}
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Edit Profile
                  </button>
                </div>
              ) : (
                <div className="text-center py-8">
                  <p className="text-gray-500 mb-4">You haven't created a profile yet.</p>
                  <button 
                    onClick={() => setShowProfileModal(true)} 
                    className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 transition"
                  >
                    Create Profile
                  </button>
                </div>
              )}
            </div>
          </div>
        )}

        {/* SETTINGS VIEW */}
        {filter === "Settings" && (
          <div className="bg-white border border-gray-200 p-12 rounded-lg text-center">
            <Settings className="w-16 h-16 mx-auto text-gray-300 mb-4" />
            <h3 className="text-xl font-semibold text-gray-700">Account Settings</h3>
            <p className="text-gray-500 mt-2">
              Manage your account preferences, notifications, and security settings.
            </p>
            <span className="inline-block mt-4 px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-xs font-medium">
              Coming Soon
            </span>
          </div>
        )}

        {/* Profile Modal */}
        {(showProfileModal || showEditModal) && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50 overflow-y-auto">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-y-auto my-8">
              <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
                <h3 className="text-lg font-semibold text-gray-900">
                  {showProfileModal ? "Create Worker Profile" : "Edit Worker Profile"}
                </h3>
                <button 
                  onClick={() => { setShowProfileModal(false); setShowEditModal(false); }} 
                  className="text-gray-400 hover:text-gray-600 text-xl"
                >
                  ✕
                </button>
              </div>
              <div className="p-6">
                <WorkerProfileForm
                  initialData={showEditModal && userProfile ? {
                    location: userProfile.location,
                    location_text: userProfile.location_text,
                    is_available: userProfile.is_available,
                    years_experience: userProfile.years_experience,
                    hourly_rate: userProfile.hourly_rate,
                    availability_schedule: userProfile.availability_schedule,
                    bio: userProfile.bio
                  } : undefined}
                  onSubmit={handleProfileSubmit}
                  onCancel={() => { setShowProfileModal(false); setShowEditModal(false); }}
                  loading={profileLoading}
                  isEdit={showEditModal}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WorkerDashboardPage;