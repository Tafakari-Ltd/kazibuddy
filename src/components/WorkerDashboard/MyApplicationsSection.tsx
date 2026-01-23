"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useMyApplications } from "../../Redux/Functions/jobs";
import ApplicationCard from "./ApplicationCard";
import { toast } from "sonner";
import { ChevronLeft, ChevronRight } from "lucide-react";
import ApplicationDetailsModal from "./ApplicationDetailsModal";
import { JobApplicationWithDetails } from "@/types/jobApplication.types";

interface MyApplicationsSectionProps {
  className?: string;
  showAll?: boolean; // If false, shows only recent applications
  maxItems?: number;
}

const ITEMS_PER_PAGE = 9;

export const MyApplicationsSection: React.FC<MyApplicationsSectionProps> = ({
  className = "",
  showAll = false,
  maxItems = 3,
}) => {
  const router = useRouter();
  const {
    applications,
    isLoading,
    apiError,
    pagination,
    fetchApplications,
    updateApplicationById,
    deleteApplicationById,
  } = useMyApplications();

  const [statusFilter, setStatusFilter] = useState<
    "all" | "pending" | "reviewed" | "accepted" | "rejected"
  >("all");
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedApplication, setSelectedApplication] = useState<JobApplicationWithDetails | null>(null);

  // Fetch applications with pagination when showAll is true
  useEffect(() => {
    if (showAll) {
      const params = {
        page: currentPage,
        per_page: ITEMS_PER_PAGE,
        ...(statusFilter !== "all" && { status: [statusFilter] }),
      };
      fetchApplications(params);
    }
  }, [currentPage, statusFilter, showAll, fetchApplications]);

  // Reset to page 1 when filter changes
  useEffect(() => {
    if (showAll) {
      setCurrentPage(1);
    }
  }, [statusFilter, showAll]);

  const displayApplications = showAll
    ? applications
    : applications.slice(0, maxItems);

  const handleView = (applicationId: string) => {
    const app = applications.find(a => a.id === applicationId);
    if (app) {
      setSelectedApplication(app as JobApplicationWithDetails);
    }
  };

  const handleDelete = async (applicationId: string) => {
    if (
      !confirm("Are you sure you want to withdraw/delete this application?")
    ) {
      return;
    }

    try {
      await deleteApplicationById(applicationId).unwrap();
      toast.success("Application removed successfully");
      // Refetch current page
      if (showAll) {
        fetchApplications({
          page: currentPage,
          per_page: ITEMS_PER_PAGE,
          ...(statusFilter !== "all" && { status: [statusFilter] }),
        });
      }
    } catch (error: any) {
      toast.error(error.message || "Failed to remove application");
    }
  };

  const handleViewAll = () => {
    router.push("/applications");
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Get application stats 
  const stats = {
    total: showAll && pagination?.totalItems ? pagination.totalItems : applications.length,
    pending: applications.filter((app) => app.status === "pending").length,
    reviewed: applications.filter((app) => app.status === "reviewed").length,
    accepted: applications.filter((app) => app.status === "accepted").length,
    rejected: applications.filter((app) => app.status === "rejected").length,
  };

  const totalPages = showAll && pagination?.totalPages ? pagination.totalPages : 1;

  if (isLoading) {
    return (
      <div className={`space-y-4 ${className}`}>
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            My Applications
          </h2>
        </div>
        <div className="space-y-4">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="bg-white rounded-lg border border-gray-200 p-6 animate-pulse"
            >
              <div className="flex justify-between mb-4">
                <div className="flex-1">
                  <div className="h-5 bg-gray-200 rounded w-3/4 mb-2"></div>
                  <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                </div>
                <div className="h-6 bg-gray-200 rounded w-20"></div>
              </div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (apiError) {
    return (
      <div className={`${className}`}>
        <div className="bg-red-50 border border-red-200 rounded-lg p-6">
          <div className="flex items-center">
            <svg
              className="h-5 w-5 text-red-400 mr-2"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                clipRule="evenodd"
              />
            </svg>
            <div>
              <h3 className="text-sm font-medium text-red-800">
                Error loading applications
              </h3>
              <p className="text-sm text-red-700 mt-1">{apiError}</p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className={`space-y-6 ${className}`}>
      {/* Header with Stats */}
      <div className="flex items-center justify-between">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">
            My Applications
          </h2>
          <p className="text-sm text-gray-600 mt-1">
            {stats.total} total application{stats.total !== 1 ? "s" : ""}
            {stats.pending > 0 && ` • ${stats.pending} pending`}
            {stats.accepted > 0 && ` • ${stats.accepted} accepted`}
          </p>
        </div>
        {!showAll && applications.length > maxItems && (
          <button
            onClick={handleViewAll}
            className="text-blue-600 hover:text-blue-700 font-medium text-sm"
          >
            View All ({applications.length})
          </button>
        )}
      </div>

      {/* Status Filter Buttons */}
      {applications.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-4">
          {[
            { key: "all", label: `All (${stats.total})` },
            { key: "pending", label: `Pending (${stats.pending})` },
            { key: "reviewed", label: `In review (${stats.reviewed})` },
            { key: "accepted", label: `Accepted (${stats.accepted})` },
            { key: "rejected", label: `Rejected (${stats.rejected})` },
          ].map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setStatusFilter(key as any)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-colors ${
                statusFilter === key
                  ? "bg-red-700 text-white border-red-700"
                  : "bg-white text-gray-700 border-gray-300 hover:bg-gray-50"
              }`}
            >
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Quick Stats Cards */}
      {applications.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.total}
                </p>
                <p className="text-xs text-gray-600">Total</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-yellow-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-yellow-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.pending}
                </p>
                <p className="text-xs text-gray-600">Pending</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-blue-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.reviewed}
                </p>
                <p className="text-xs text-gray-600">Reviewed</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-4">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3">
                <svg
                  className="w-4 h-4 text-green-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </div>
              <div>
                <p className="text-2xl font-semibold text-gray-900">
                  {stats.accepted}
                </p>
                <p className="text-xs text-gray-600">Accepted</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Results Summary - Show when in paginated mode */}
      {showAll && displayApplications.length > 0 && (
        <div className="flex items-center justify-between text-sm text-gray-600">
          <p>
            Showing{" "}
            {((currentPage - 1) * ITEMS_PER_PAGE) + 1} -{" "}
            {Math.min(currentPage * ITEMS_PER_PAGE, stats.total)} of{" "}
            {stats.total} application{stats.total !== 1 ? "s" : ""}
          </p>
        </div>
      )}

      {/* Applications List */}
      {displayApplications.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-12 text-center">
          <svg
            className="mx-auto h-12 w-12 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
            />
          </svg>
          <h3 className="mt-4 text-lg font-medium text-gray-900">
            No applications yet
          </h3>
          <p className="mt-2 text-sm text-gray-500">
            Start applying for jobs to see your applications here.
          </p>
          <button
            onClick={() => router.push("/jobs")}
            className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
          >
            Browse Jobs
          </button>
        </div>
      ) : (
        <>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {displayApplications.map((application) => (
              <ApplicationCard
                key={application.id}
                application={application as any}
                onView={handleView}
                onDelete={handleDelete}
              />
            ))}
          </div>

          {/* Pagination Controls - Only show when showAll is true */}
          {showAll && totalPages > 1 && (
            <div className="flex items-center justify-center gap-2 pt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                disabled={currentPage === 1}
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
                      key={pageNum}
                      onClick={() => handlePageChange(pageNum)}
                      className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                        currentPage === pageNum
                          ? "bg-red-600 text-white"
                          : "bg-white border border-gray-300 text-gray-700 hover:bg-gray-50"
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
                className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          )}

          {/* View All Footer - Only show when NOT in showAll mode */}
          {!showAll && applications.length > displayApplications.length && (
            <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-center mt-4">
              <p className="text-sm text-gray-600 mb-4">
                Showing {displayApplications.length} of {applications.length}{" "}
                applications
              </p>
              <button
                onClick={handleViewAll}
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-blue-600 bg-blue-100 hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              >
                View All Applications
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          )}
        </>
      )}
       <ApplicationDetailsModal 
        application={selectedApplication}
        onClose={() => setSelectedApplication(null)}
      />
    </div>
  );
};

export default MyApplicationsSection;
