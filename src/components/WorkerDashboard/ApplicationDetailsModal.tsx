"use client";
import React from "react";
import { JobApplicationWithDetails, FullJobDetails } from "@/types/jobApplication.types";
import { X, Briefcase, Calendar, DollarSign, Info, Building, User, Mail, Phone } from "lucide-react";

interface ApplicationDetailsModalProps {
  application: JobApplicationWithDetails | null;
  onClose: () => void;
}

const ApplicationDetailsModal: React.FC<ApplicationDetailsModalProps> = ({
  application,
  onClose,
}) => {
  if (!application) return null;

  const job = application.job as FullJobDetails;
  const worker = application.worker_details;

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50 overflow-y-auto">
      <div className="bg-white rounded-xl w-full max-w-2xl max-h-[90vh] overflow-y-auto my-8">
        <div className="p-6 border-b flex justify-between items-center sticky top-0 bg-white z-10">
          <h3 className="text-xl font-bold text-gray-900">
            Application Details
          </h3>
          <button 
            onClick={onClose} 
            className="text-gray-400 hover:text-gray-600 p-2 rounded-full"
          >
            <X size={24} />
          </button>
        </div>
<div className="p-6 space-y-8">
          {/* Header with Job Title and Company */}
          <div className="pb-4 border-b border-gray-200">
            <h4 className="text-2xl font-bold text-gray-900">{job?.title || "N/A"}</h4>
            <div className="flex items-center gap-2 text-md text-gray-600 mt-1">
              <Building size={16} />
              <span>{job?.employer?.company_name || "N/A"}</span>
            </div>
          </div>

          {/* Application Status & Key Info */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <p className="text-sm font-medium text-gray-500">Status</p>
              <span className={`inline-block mt-1 px-3 py-1 text-sm font-semibold rounded-full ${
                application.status === 'accepted' ? 'bg-green-100 text-green-800' :
                application.status === 'rejected' ? 'bg-red-100 text-red-800' :
                application.status === 'reviewed' ? 'bg-blue-100 text-blue-800' :
                'bg-yellow-100 text-yellow-800'
              }`}>
                {application.status}
              </span>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Applied On</p>
              <p className="text-md font-semibold text-gray-800 mt-1">{new Date(application.applied_at).toLocaleDateString()}</p>
            </div>
            <div>
              <p className="text-sm font-medium text-gray-500">Proposed Rate</p>
              <p className="text-md font-semibold text-gray-800 mt-1">KSh {application.proposed_rate}</p>
            </div>
          </div>

          {/* Your Application Note */}
          <div className="bg-gray-50 p-4 rounded-lg">
            <h5 className="font-semibold text-gray-800 flex items-center gap-2 mb-2">
              <User size={18} /> Your Application Note
            </h5>
            <p className="text-gray-700 text-sm whitespace-pre-wrap">
              {application.cover_letter || "No cover letter provided."}
            </p>
          </div>

          {/* Detailed Job Information */}
          <div>
            <h5 className="font-semibold text-gray-800 flex items-center gap-2 mb-4 border-t pt-6">
              <Briefcase size={18} /> Detailed Job Information
            </h5>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-4 text-sm">
              <div className="flex items-start">
                <DollarSign size={16} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-500">Salary</p>
                  <p className="text-gray-800">{job?.budget_min && job.budget_max ? `KSh ${job.budget_min} - KSh ${job.budget_max}` : "Not specified"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Calendar size={16} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-500">Job Type</p>
                  <p className="text-gray-800 capitalize">{job?.job_type?.replace('_', ' ') || "N/A"}</p>
                </div>
              </div>
              <div className="flex items-start">
                <Info size={16} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-500">Location</p>
                  <p className="text-gray-800">{job?.location_text || "N/A"}</p>
                </div>
              </div>
              <div className="md:col-span-2 flex items-start">
                <Info size={16} className="text-gray-500 mt-0.5 mr-2 flex-shrink-0" />
                <div>
                  <p className="font-medium text-gray-500">Job Description</p>
                  <p className="text-gray-800 whitespace-pre-wrap mt-1">{job?.description || "No description available."}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="p-6 border-t bg-gray-50 rounded-b-xl">
            <button
                onClick={onClose}
                className="w-full sm:w-auto px-6 py-2.5 bg-gray-600 text-white rounded-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500"
            >
                Close
            </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationDetailsModal;
