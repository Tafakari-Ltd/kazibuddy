import React, { useState } from "react";
import { Users, Search, ChevronLeft, ChevronRight } from "lucide-react";
import { Application, ApplicationStage } from "@/types/job.types";
import ApplicationCard from "./ApplicationCard";

interface ApplicationsListProps {
  title: string;
  applications: Application[];
  stages: ApplicationStage[];
  loading: boolean;
  onEmailCandidate: (email: string) => void;
  onAdvanceApplication?: (application: Application) => void;
  onRejectApplication?: (application: Application) => void;
  onViewProfile?: (application: Application) => void;
}

const ITEMS_PER_PAGE = 9;

const ApplicationsList: React.FC<ApplicationsListProps> = ({
  title,
  applications,
  stages,
  loading,
  onEmailCandidate,
  onAdvanceApplication,
  onRejectApplication,
  onViewProfile,
}) => {
  const [currentPage, setCurrentPage] = useState(1);

  // Pagination calculations
  const totalPages = Math.ceil(applications.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const endIndex = startIndex + ITEMS_PER_PAGE;
  const currentApplications = applications.slice(startIndex, endIndex);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Reset to page 1 when applications change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [applications.length]);

  return (
    <div className="bg-white border border-gray-200 shadow-sm rounded-xl overflow-hidden min-h-[500px]">
      <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 bg-gray-50">
        <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <Users className="w-5 h-5 text-gray-500" /> {title}
        </h2>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">{applications.length}</span>
          <span>applications</span>
        </div>
      </div>

      <div className="p-6">
        {/* Results Summary */}
        {applications.length > 0 && !loading && (
          <div className="flex items-center justify-between mb-4">
            <p className="text-sm text-gray-600">
              Showing {startIndex + 1}-{Math.min(endIndex, applications.length)} of {applications.length} applications
            </p>
          </div>
        )}

        {loading ? (
          <div className="text-center py-20">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#800000] mx-auto mb-4"></div>
            <p className="text-gray-500">Loading applications...</p>
          </div>
        ) : applications.length === 0 ? (
          <div className="text-center py-20">
            <Search className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <h3 className="text-lg font-medium text-gray-900">
              No applications found
            </h3>
            <p className="text-gray-500">
              No {title.toLowerCase()} applications at this time.
            </p>
          </div>
        ) : (
          <>
            {/* Applications Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
              {currentApplications.map((app) => (
                <ApplicationCard
                  key={app.id}
                  application={app}
                  stages={stages}
                  onEmail={onEmailCandidate}
                  onAdvance={
                    onAdvanceApplication ? () => onAdvanceApplication(app) : undefined
                  }
                  onReject={
                    onRejectApplication ? () => onRejectApplication(app) : undefined
                  }
                  onViewProfile={
                    onViewProfile ? () => onViewProfile(app) : undefined
                  }
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

export default ApplicationsList;
