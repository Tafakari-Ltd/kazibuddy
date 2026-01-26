"use client";

import React, { useState, useEffect } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import {
  AlertCircle
} from "lucide-react";

import { RootState } from "@/Redux/Store/Store";
import { useWorkerProfiles } from "@/Redux/Functions/useWorkerProfiles";
import { useJobs } from "@/Redux/Functions/useJobs";
import { formatAvailabilitySchedule, CreateWorkerProfileData } from "@/types/worker.types";
import { JobDetails } from "@/types/jobApplication.types";

import WorkerDashboardWelcome from "@/components/WorkerDashboard/WorkerDashboardWelcome";
import WorkerStatsCards from "@/components/WorkerDashboard/WorkerStatsCards";
import WorkerProfileForm from "@/components/WorkerDashboard/WorkerProfileForm";
import WorkerTabs from "@/components/WorkerDashboard/WorkerTabs";
import { AvailableJobs } from "@/components/WorkerDashboard/AvailableJobs";
import { MyApplicationsSection } from "@/components/WorkerDashboard/MyApplicationsSection";
import WorkerProfileView from "@/components/WorkerDashboard/WorkerProfileView";
import { WorkerSettingsView } from "@/components/WorkerDashboard/WorkerSettingsView";
import { WorkerDashboardHeader } from "@/components/WorkerDashboard/WorkerDashboardHeader";
import { WorkerProfileSetupAlert } from "@/components/WorkerDashboard/WorkerProfileSetupAlert";
import { WorkerDashboardView } from "@/components/WorkerDashboard/WorkerDashboardView";

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
    <div className="px-6 md:px-12 py-8 bg-gray-50 min-h-screen">
      <div className="container mb-6">
        
        {/* Compact Header with Quick Actions */}
        <WorkerDashboardHeader
          userName={(typeof userProfile?.user !== 'string' ? userProfile?.user?.full_name : undefined) || user?.full_name}
          availableJobsCount={availableJobs.length}
          profileCompletionPercentage={userProfile?.profile_completion_percentage || 0}
        />

        {/* Profile Setup Alert */}
        {!hasUserProfile() && (
          <WorkerProfileSetupAlert onCreateProfile={() => setShowProfileModal(true)} />
        )}

        {/* Stats Cards */}
        {hasUserProfile() && <WorkerStatsCards />}

        {/* Navigation Tabs */}
        <WorkerTabs activeTab={filter} setTab={setFilter} options={STATUS_OPTIONS} />

        {/* DASHBOARD VIEW */}
        {filter === "Dashboard" && (
          <WorkerDashboardView
            availableJobs={availableJobs}
            userProfile={userProfile}
            onFindJobs={() => setFilter("Find Jobs")}
            onMyApplications={() => setFilter("My Applications")}
            onEditProfile={() => setShowEditModal(true)}
            onCreateProfile={() => setShowProfileModal(true)}
          />
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
          <div className="space-y-6">
            {!userProfile ? (
              <div className="bg-white rounded-lg shadow-sm p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">No Profile Found</h3>
                <p className="text-gray-600 mb-6">Create your worker profile to get started</p>
                <button
                  onClick={() => setShowProfileModal(true)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Create Profile
                </button>
              </div>
            ) : (
              <WorkerProfileView
                worker={{
                  id: userProfile.id,
                  firstName: user?.full_name?.split(' ')[0] || 'Worker',
                  lastName: user?.full_name?.split(' ').slice(1).join(' ') || '',
                  email: user?.email || '',
                  phone: user?.phone_number || '',
                  location: userProfile.location_text || userProfile.location,
                  avatarUrl: undefined,
                  bio: userProfile.bio,
                  title: `${userProfile.years_experience} years experience`,
                  skills: [],
                  availability: userProfile.is_available ? "Available" : "Offline",
                  rating: 0,
                  completedJobs: 0,
                  joinedDate: new Date(userProfile.created_at).toLocaleDateString(),
                  experience: [],
                  certifications: [],
                  isVerified: userProfile.verification_status === 'verified'
                }}
                onEdit={() => setShowEditModal(true)}
              />
            )}
          </div>
        )}

        {/* SETTINGS VIEW */}
        {filter === "Settings" && <WorkerSettingsView />}

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