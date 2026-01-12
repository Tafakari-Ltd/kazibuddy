import React, { useState } from "react";
import { Briefcase, Filter, ChevronLeft, ChevronRight } from "lucide-react";
import { Job } from "@/types/job.types";
import JobCard from "./JobCard";

interface MyJobsListProps {
  jobs: Job[];
  categories: Array<{ id: string; name: string }>;
  selectedCategoryId: string;
  onCategoryChange: (categoryId: string) => void;
  onPostJob: () => void;
  onViewJob: (job: Job) => void;
  onEditJob: (job: Job) => void;
  onDeleteJob: (job: Job) => void;
}

const ITEMS_PER_PAGE = 9;

const MyJobsList: React.FC<MyJobsListProps> = ({
  jobs,
  categories,
  selectedCategoryId,
  onCategoryChange,
  onPostJob,
  onViewJob,
  onEditJob,
  onDeleteJob,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination calculations
  const totalPages = Math.ceil(jobs.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentJobs = jobs.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedCategoryId, jobs.length]);

  return (
    <div className="bg-white shadow-sm rounded-xl overflow-hidden min-h-[500px]">
      <div className="p-6 bg-gray-50">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <Briefcase className="w-5 h-5 text-gray-500" /> My Job Postings
          </h2>
          <button
            onClick={onPostJob}
            className="text-sm bg-red-800 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition"
          >
            + Post New Job
          </button>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-3">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <Filter className="w-4 h-4" />
            Filter by Category:
          </label>
          <select
            value={selectedCategoryId}
            onChange={(e) => onCategoryChange(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 text-sm bg-white"
          >
            <option value="">All Categories</option>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>
                {cat.name}
              </option>
            ))}
          </select>
          {selectedCategoryId && (
            <span className="text-sm text-gray-600 font-medium">
              ({jobs.length} {jobs.length === 1 ? "job" : "jobs"})
            </span>
          )}
        </div>
      </div>

      <div className="p-6">
        {/* Results Summary */}
        {jobs.length > 0 && (
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, jobs.length)} of {jobs.length} jobs
            </p>
          </div>
        )}

        {jobs.length === 0 ? (
          <div className="text-center py-20">
            <Briefcase className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium">
              {selectedCategoryId ? "No jobs in this category" : "No jobs posted yet"}
            </h3>
            <p className="text-gray-500">
              {selectedCategoryId
                ? "Try selecting a different category or clear the filter."
                : "Post your first job to start receiving applications."}
            </p>
          </div>
        ) : (
          <>
            {/* Jobs Grid  */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {currentJobs.map((job) => (
                <JobCard
                  key={job.id}
                  job={job}
                  categories={categories}
                  onView={onViewJob}
                  onEdit={onEditJob}
                  onDelete={onDeleteJob}
                />
              ))}
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="flex items-center justify-center gap-2 pt-4 border-t border-gray-200">
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
                        key={i}
                        onClick={() => handlePageChange(pageNum)}
                        className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
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
                  className="p-2 rounded-lg border border-gray-300 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
};

export default MyJobsList;
