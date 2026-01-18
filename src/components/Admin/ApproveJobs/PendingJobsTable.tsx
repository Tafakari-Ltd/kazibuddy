"use client";
import React from "react";
import { Eye, CheckCircle, XCircle, Clock, MapPin, DollarSign } from "lucide-react";

interface PendingJob {
  id: string;
  title: string;
  description: string;
  location: string;
  job_type: string;
  urgency_level: string;
  budget_min: string | number;
  budget_max: string | number;
  status: string;
  visibility: string;
  admin_approved?: boolean;
  created_at: string;
  start_date?: string;
  end_date?: string;
  max_applicants?: number;
  estimated_hours?: number;
  employer: {
    id: string;
    company_name: string;
    user: {
      id: string;
      full_name: string;
      email: string;
    };
  };
  category: {
    id: string;
    name: string;
  };
}

interface PendingJobsTableProps {
  jobs: PendingJob[];
  onView: (job: PendingJob) => void;
  onApprove: (job: PendingJob) => Promise<void>;
  onReject: (job: PendingJob) => Promise<void>;
  processingJobId: string | null;
  processingAction: "approve" | "reject" | null;
}

const PendingJobsTable: React.FC<PendingJobsTableProps> = ({ 
  jobs, 
  onView, 
  onApprove, 
  onReject,
  processingJobId,
  processingAction
}) => {
  
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString();
  };

  const formatCurrency = (amount: string | number) => {
    return new Intl.NumberFormat('en-KE', { style: 'currency', currency: 'KES' }).format(Number(amount));
  };

  return (
    <div className="bg-white rounded-lg shadow overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-100 border-b">
            <tr>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Job Details</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Employer</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Budget</th>
              <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">Details</th>
              <th className="px-6 py-3 text-center text-sm font-semibold text-gray-700">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {jobs.map((job) => (
              <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="font-medium text-gray-900">{job.title}</span>
                    <span className="text-xs text-gray-500 line-clamp-1">{job.category?.name || 'No Category'}</span>
                    <div className="flex items-center gap-1 mt-1 text-xs text-gray-500">
                      <Clock size={12} />
                      <span>{formatDate(job.created_at)}</span>
                    </div>
                  </div>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex flex-col">
                    <span className="text-sm font-medium text-gray-900">{job.employer?.company_name || 'N/A'}</span>
                    <span className="text-xs text-gray-500">{job.employer?.user?.full_name}</span>
                  </div>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex flex-col text-sm">
                    <div className="flex items-center gap-1 text-gray-700">
                      <DollarSign size={14} className="text-green-600" />
                      <span>{formatCurrency(job.budget_min)} - {formatCurrency(job.budget_max)}</span>
                    </div>
                    <span className="text-xs text-gray-500 capitalize">{job.job_type.replace('_', ' ')}</span>
                  </div>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-1 text-xs text-gray-600">
                      <MapPin size={12} />
                      <span className="truncate max-w-[150px]">{job.location}</span>
                    </div>
                    <span className={`text-xs px-2 py-0.5 rounded-full w-fit ${
                      job.urgency_level === 'high' ? 'bg-red-100 text-red-700' :
                      job.urgency_level === 'medium' ? 'bg-yellow-100 text-yellow-700' :
                      'bg-blue-100 text-blue-700'
                    }`}>
                      {job.urgency_level}
                    </span>
                  </div>
                </td>
                
                <td className="px-6 py-4">
                  <div className="flex justify-center gap-2">
                    <button
                      onClick={() => onView(job)}
                      className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-md transition-colors"
                      title="View Details"
                    >
                      <Eye size={18} />
                    </button>
                    
                    <button
                      onClick={() => onApprove(job)}
                      disabled={processingJobId === job.id}
                      className={`p-1.5 text-green-600 hover:bg-green-50 rounded-md transition-colors ${
                       (processingJobId === job.id && processingAction === 'approve') ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      title="Approve Job"
                    >
                      {processingJobId === job.id && processingAction === 'approve' ? (
                        <div className="w-4 h-4 border-2 border-green-600 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <CheckCircle size={18} />
                      )}
                    </button>
                    
                    <button
                      onClick={() => onReject(job)}
                      disabled={processingJobId === job.id}
                      className={`p-1.5 text-red-600 hover:bg-red-50 rounded-md transition-colors ${
                        (processingJobId === job.id && processingAction === 'reject') ? 'opacity-50 cursor-not-allowed' : ''
                      }`}
                      title="Reject Job"
                    >
                      {processingJobId === job.id && processingAction === 'reject' ? (
                        <div className="w-4 h-4 border-2 border-red-600 border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <XCircle size={18} />
                      )}
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PendingJobsTable;