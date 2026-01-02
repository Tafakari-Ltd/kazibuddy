"use client";

import React, { useState, useEffect, useMemo } from "react";
import {
  useJobApplicationModal,
  useMyApplications,
} from "../../Redux/Functions/jobs";
import { JobApplicationModal } from "../JobApplication";
import { JobDetails } from "../../types/jobApplication.types";
import JobApplicationApi from "../../services/jobApplicationApi";
import { toast } from "sonner";
import {
  Search,
  Filter,
  MapPin,
  DollarSign,
  Clock,
  Calendar,
  Briefcase,
  ChevronLeft,
  ChevronRight,
  X,
  SlidersHorizontal,
  Building
} from "lucide-react";

interface AvailableJobsProps {
  jobs: JobDetails[];
  loading?: boolean;
  error?: string | null;
  onRefresh?: () => void;
  className?: string;
}

interface JobWithApplicationStatus extends JobDetails {
  applicationId?: string;
  applicationStatus?:
    | "pending"
    | "reviewed"
    | "accepted"
    | "rejected"
    | "withdrawn"
    | null;
  hasApplied?: boolean;
}

interface FilterOptions {
  searchTerm: string;
  location: string;
  jobType: string;
  urgency: string;
  minBudget: string;
  maxBudget: string;
}

const ITEMS_PER_PAGE = 12;

export const AvailableJobs: React.FC<AvailableJobsProps> = ({
  jobs,
  loading = false,
  error = null,
  onRefresh,
  className = "",
}) => {
  const [jobsWithStatus, setJobsWithStatus] = useState<JobWithApplicationStatus[]>([]);
  const [loadingStates, setLoadingStates] = useState<Record<string, boolean>>({});
  const [currentApplyingJob, setCurrentApplyingJob] = useState<JobDetails | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [showFilters, setShowFilters] = useState(false);
  
  const [filters, setFilters] = useState<FilterOptions>({
    searchTerm: "",
    location: "",
    jobType: "",
    urgency: "",
    minBudget: "",
    maxBudget: "",
  });

  const { showJobModal } = useJobApplicationModal();
  const { applications, fetchApplications } = useMyApplications();

  useEffect(() => {
    const mergedJobs = jobs.map((job) => {
      const application = applications.find((app) => {
        const jobId = typeof app.job === "string" ? app.job : (app.job as any)?.id;
        return jobId === job.id;
      });
      return {
        ...job,
        applicationId: application?.id,
        applicationStatus: application?.status || null,
        hasApplied: !!application,
      };
    });
    setJobsWithStatus(mergedJobs);
  }, [jobs, applications]);

  useEffect(() => {
    fetchApplications();
  }, [fetchApplications]);

  const filteredJobs = useMemo(() => {
    return jobsWithStatus.filter((job) => {
      const matchesSearch =
        !filters.searchTerm ||
        job.title.toLowerCase().includes(filters.searchTerm.toLowerCase()) ||
        job.description.toLowerCase().includes(filters.searchTerm.toLowerCase());

      const matchesLocation =
        !filters.location ||
        job.location_text.toLowerCase().includes(filters.location.toLowerCase());

      const matchesJobType = !filters.jobType || job.job_type === filters.jobType;

      const matchesUrgency = !filters.urgency || job.urgency_level === filters.urgency;

      const matchesBudget =
        (!filters.minBudget || parseFloat(job.budget_min) >= parseFloat(filters.minBudget)) &&
        (!filters.maxBudget || parseFloat(job.budget_max) <= parseFloat(filters.maxBudget));

      return (
        matchesSearch &&
        matchesLocation &&
        matchesJobType &&
        matchesUrgency &&
        matchesBudget
      );
    });
  }, [jobsWithStatus, filters]);

  const totalPages = Math.ceil(filteredJobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = filteredJobs.slice(startIndex, endIndex);

  const uniqueLocations = useMemo(() => {
    return Array.from(new Set(jobs.map((job) => job.location_text))).sort();
  }, [jobs]);

  const handleApplyClick = (job: JobDetails) => {
    setCurrentApplyingJob(job);
    showJobModal();
  };

  const handleWithdrawApplication = async (jobId: string, applicationId: string) => {
    if (!confirm("Are you sure you want to withdraw your application?")) return;

    setLoadingStates((prev) => ({ ...prev, [jobId]: true }));

    try {
      await JobApplicationApi.deleteApplication(applicationId);
      toast.success("Application withdrawn successfully");

      setJobsWithStatus((prev) =>
        prev.map((job) =>
          job.id === jobId
            ? { ...job, applicationId: undefined, applicationStatus: null, hasApplied: false }
            : job
        )
      );

      fetchApplications();
      onRefresh?.();
    } catch (error: any) {
      toast.error(error.message || "Failed to withdraw application");
    } finally {
      setLoadingStates((prev) => ({ ...prev, [jobId]: false }));
    }
  };

  const handleApplicationSuccess = () => {
    toast.success("Application submitted successfully!");
    fetchApplications();
    onRefresh?.();
    setCurrentApplyingJob(null);
  };

  const clearFilters = () => {
    setFilters({
      searchTerm: "",
      location: "",
      jobType: "",
      urgency: "",
      minBudget: "",
      maxBudget: "",
    });
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const getStatusBadge = (status: string) => {
    const configs = {
      pending: { bg: "bg-yellow-100", text: "text-yellow-800", label: "Pending" },
      reviewed: { bg: "bg-blue-100", text: "text-blue-800", label: "Reviewing" },
      accepted: { bg: "bg-green-100", text: "text-green-800", label: "Accepted" },
      rejected: { bg: "bg-red-100", text: "text-red-800", label: "Rejected" },
    };

    const config = configs[status as keyof typeof configs];
    if (!config) return null;

    return (
      <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
        {config.label}
      </span>
    );
  };

  const getActionButton = (job: JobWithApplicationStatus) => {
    const isLoading = loadingStates[job.id];

    if (isLoading) {
      return (
        <button disabled className="px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-400 bg-white cursor-not-allowed flex items-center gap-2">
          <div className="animate-spin h-4 w-4 border-2 border-gray-300 border-t-gray-600 rounded-full"></div>
          Processing...
        </button>
      );
    }

    if (!job.hasApplied) {
      return (
        <button
          onClick={() => handleApplyClick(job)}
          className="px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-700 transition-colors"
        >
          Apply Now
        </button>
      );
    }

    if (job.applicationStatus === "pending") {
      return (
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-600">Applied</span>
          <button
            onClick={() => handleWithdrawApplication(job.id, job.applicationId!)}
            className="px-3 py-1.5 border border-red-300 rounded-lg text-sm font-medium text-red-700 bg-white hover:bg-red-50 transition-colors"
          >
            Withdraw
          </button>
        </div>
      );
    }

    if (job.applicationStatus === "accepted") {
      return <span className="text-sm text-green-600 font-medium">✓ Accepted</span>;
    }

    if (job.applicationStatus === "rejected") {
      return <span className="text-sm text-red-600">Not selected</span>;
    }

    return null;
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

  if (loading) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, i) => (
            <div key={i} className="bg-white rounded-lg border border-gray-200 p-4 animate-pulse">
              <div className="h-5 bg-gray-200 rounded w-3/4 mb-3"></div>
              <div className="h-4 bg-gray-200 rounded w-full mb-2"></div>
              <div className="h-4 bg-gray-200 rounded w-2/3 mb-4"></div>
              <div className="h-8 bg-gray-200 rounded w-full"></div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-50 border border-red-200 rounded-lg p-6">
        <p className="text-red-800 text-sm">{error}</p>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      
      {/* Header with Search and Filters */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row gap-3">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
            <input
              type="text"
              placeholder="Search jobs by title or description..."
              className="w-full pl-10 pr-4 py-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
              value={filters.searchTerm}
              onChange={(e) => {
                setFilters({ ...filters, searchTerm: e.target.value });
                setCurrentPage(1);
              }}
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2.5 rounded-lg font-medium flex items-center gap-2 transition-colors ${
              showFilters
                ? "bg-red-600 text-white"
                : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-50"
            }`}
          >
            <SlidersHorizontal className="w-4 h-4" />
            Filters
            {Object.values(filters).filter(Boolean).length > 1 && (
              <span className="bg-white text-red-600 px-1.5 py-0.5 rounded-full text-xs font-semibold">
                {Object.values(filters).filter(Boolean).length - 1}
              </span>
            )}
          </button>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div className="bg-white border border-gray-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Location</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  value={filters.location}
                  onChange={(e) => {
                    setFilters({ ...filters, location: e.target.value });
                    setCurrentPage(1);
                  }}
                >
                  <option value="">All locations</option>
                  {uniqueLocations.map((loc) => (
                    <option key={loc} value={loc}>{loc}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Job Type</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  value={filters.jobType}
                  onChange={(e) => {
                    setFilters({ ...filters, jobType: e.target.value });
                    setCurrentPage(1);
                  }}
                >
                  <option value="">All types</option>
                  <option value="full_time">Full Time</option>
                  <option value="part_time">Part Time</option>
                  <option value="contract">Contract</option>
                  <option value="temporary">Temporary</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Urgency</label>
                <select
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent text-sm"
                  value={filters.urgency}
                  onChange={(e) => {
                    setFilters({ ...filters, urgency: e.target.value });
                    setCurrentPage(1);
                  }}
                >
                  <option value="">All levels</option>
                  <option value="high">High</option>
                  <option value="medium">Medium</option>
                  <option value="low">Low</option>
                </select>
              </div>
            </div>

            <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-200">
              <p className="text-sm text-gray-600">
                {filteredJobs.length} job{filteredJobs.length !== 1 ? "s" : ""} found
              </p>
              <button
                onClick={clearFilters}
                className="text-sm text-red-600 hover:text-red-700 font-medium flex items-center gap-1"
              >
                <X className="w-4 h-4" />
                Clear filters
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Results Summary */}
      <div className="flex items-center justify-between">
        <p className="text-sm text-gray-600">
          Showing {startIndex + 1}-{Math.min(endIndex, filteredJobs.length)} of {filteredJobs.length} jobs
        </p>
        {onRefresh && (
          <button
            onClick={onRefresh}
            className="text-sm text-gray-600 hover:text-gray-900 font-medium"
          >
            Refresh
          </button>
        )}
      </div>

      {/* Jobs Grid */}
      {currentJobs.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
          <Briefcase className="mx-auto h-12 w-12 text-gray-400 mb-3" />
          <h3 className="text-lg font-medium text-gray-900">No jobs found</h3>
          <p className="text-sm text-gray-500 mt-1">
            Try adjusting your filters or check back later.
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-lg border border-gray-200 hover:shadow-lg transition-shadow p-4 flex flex-col"
            >
              <div className="flex items-start justify-between mb-3">
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900 text-base mb-1 line-clamp-1">
                    {job.title}
                  </h3>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <Building className="w-3 h-3" />
                    <span className="line-clamp-1">
                      {typeof job.employer === 'object' ? job.employer?.company_name || 'Company' : 'Company'}
                    </span>
                  </div>
                </div>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full whitespace-nowrap ${
                    job.urgency_level === "high"
                      ? "bg-red-100 text-red-700"
                      : job.urgency_level === "medium"
                        ? "bg-yellow-100 text-yellow-700"
                        : "bg-green-100 text-green-700"
                  }`}
                >
                  {job.urgency_level}
                </span>
              </div>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2 flex-1">
                {job.description}
              </p>

              <div className="space-y-2 mb-3">
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <MapPin className="w-3 h-3 flex-shrink-0" />
                  <span className="line-clamp-1">{job.location_text}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <DollarSign className="w-3 h-3 flex-shrink-0" />
                  <span>KES {job.budget_min} - {job.budget_max}</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-600">
                  <Clock className="w-3 h-3 flex-shrink-0" />
                  <span className="capitalize">{job.job_type.replace("_", " ")}</span>
                  <span>•</span>
                  <span>{job.estimated_hours}h</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-gray-500">
                  <Calendar className="w-3 h-3 flex-shrink-0" />
                  <span>{formatTimeAgo(job.start_date)}</span>
                </div>
              </div>

              {job.applicationStatus && (
                <div className="mb-3">{getStatusBadge(job.applicationStatus)}</div>
              )}

              <div className="pt-3 border-t border-gray-100">
                {getActionButton(job)}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-center gap-2 pt-4">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: Math.min(totalPages, 5) }, (_, i) => {
              let pageNum;
              if (totalPages <= 5) {
                pageNum = i + 1;
              } else if (currentPage <= 3) {
                pageNum = i + 1;
              } else if (currentPage >= totalPages - 2) {
                pageNum = totalPages - 4 + i;
              } else {
                pageNum = currentPage - 2 + i;
              }

              return (
                <button
                  key={i}
                  onClick={() => handlePageChange(pageNum)}
                  className={`px-3 py-1 rounded-lg text-sm font-medium ${
                    currentPage === pageNum
                      ? "bg-red-600 text-white"
                      : "border border-gray-300 hover:bg-gray-50"
                  }`}
                >
                  {pageNum}
                </button>
              );
            })}
          </div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      )}

      {currentApplyingJob && (
        <JobApplicationModal
          jobDetails={currentApplyingJob}
          onSuccess={handleApplicationSuccess}
        />
      )}
    </div>
  );
};

export default AvailableJobs;