import React from "react";
import { TrendingUp, ArrowRight, MapPin, DollarSign, Clock } from "lucide-react";
import { JobDetails } from "@/types/jobApplication.types";

interface WorkerFeaturedJobsListProps {
  jobs: JobDetails[];
  onViewAllJobs: () => void;
}

export const WorkerFeaturedJobsList: React.FC<WorkerFeaturedJobsListProps> = ({
  jobs,
  onViewAllJobs,
}) => {
  return (
    <div className="bg-white border border-gray-200 rounded-lg p-5">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-base font-bold text-gray-800 flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-red-600" /> 
          Featured Jobs
        </h3>
        <button 
          onClick={onViewAllJobs}
          className="text-red-600 text-xs font-medium hover:underline flex items-center gap-1"
        >
          View All <ArrowRight className="w-3 h-3" />
        </button>
      </div>
      {jobs.length > 0 ? (
        <div className="space-y-3">
          {jobs.slice(0, 4).map(job => (
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
  );
};
