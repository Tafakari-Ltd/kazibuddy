"use client";
import React, { useRef, useEffect } from "react";
import { Briefcase, MapPin, Loader2, X } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";

import { setSearchVisibility } from "@/Redux/Features/SearchSlice";
import { AppDispatch, RootState } from "@/Redux/Store/Store";

const SearchModal = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const modalRef = useRef<HTMLDivElement>(null);
  
  const { jobs, loading } = useSelector((state: RootState) => state.jobs);
  const { isShown, query } = useSelector((state: RootState) => state.search);

  // Close when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 1. If clicking inside the dropdown, do nothing (allow interaction)
      if (modalRef.current && modalRef.current.contains(event.target as Node)) {
        return;
      }
      
      // 2. If clicking the Navbar Input/Form, do nothing (allow typing)
    
      if ((event.target as Element).closest('#navbar-search-form')) {
          return;
      }

      // 3. Otherwise, close the dropdown
      dispatch(setSearchVisibility(false));
    };

    if (isShown) {
        document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
        document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isShown, dispatch]);

  if (!isShown || !query.trim()) return null;

  const handleJobClick = (jobId: string) => {
    // Navigate to jobs page with specific Job ID to open
    router.push(`/jobs?applyJobId=${jobId}`);
    dispatch(setSearchVisibility(false));
  };

  const handleViewAll = () => {
    router.push(`/jobs?q=${encodeURIComponent(query)}`);
    dispatch(setSearchVisibility(false));
  };

  return (
    <div 
        ref={modalRef}
        className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-2xl border border-gray-100 overflow-hidden z-[60] max-h-[60vh] flex flex-col animate-in fade-in slide-in-from-top-2 duration-200"
    >
        {loading && (
          <div className="p-6 text-center text-gray-500 flex flex-col items-center">
            <Loader2 className="w-6 h-6 animate-spin mb-2 text-[#800000]" />
            <p className="text-sm">Finding jobs...</p>
          </div>
        )}

        {!loading && jobs.length > 0 && (
          <div className="flex flex-col">
             <div className="px-4 py-2 bg-gray-50 border-b border-gray-100 flex justify-between items-center">
                <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                  Top Matches
                </span>
             </div>
            
            <ul className="overflow-y-auto max-h-[400px]">
              {jobs.slice(0, 5).map((job) => (
                <li
                  key={job.id}
                  onClick={() => handleJobClick(job.id)}
                  className="flex items-center gap-3 p-3 hover:bg-red-50 cursor-pointer transition-colors border-b border-gray-50 last:border-0 group"
                >
                  <div className="bg-gray-100 p-2 rounded-lg text-gray-500 group-hover:bg-[#800000] group-hover:text-white transition-colors">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-medium text-gray-900 truncate">{job.title}</h4>
                    <div className="flex items-center gap-3 text-xs text-gray-500 mt-0.5">
                      <span className="flex items-center gap-1 truncate">
                        <MapPin className="w-3 h-3" />
                        {job.location || job.location_text}
                      </span>
                      <span className="bg-gray-100 px-1.5 py-0.5 rounded text-gray-600">
                        {(job as any).job_type?.replace("_", " ")}
                      </span>
                    </div>
                  </div>
                  <div className="text-right whitespace-nowrap">
                    <span className="text-[#800000] font-semibold text-xs md:text-sm">
                      {job.budget_min ? `KSh ${Number(job.budget_min).toLocaleString()}` : 'Neg.'}
                    </span>
                  </div>
                </li>
              ))}
            </ul>
            
            <button
              onClick={handleViewAll}
              className="p-3 bg-gray-50 hover:bg-gray-100 text-[#800000] text-sm font-medium text-center border-t border-gray-100 transition-colors"
            >
              View all results for "{query}"
            </button>
          </div>
        )}

        {!loading && query && jobs.length === 0 && (
          <div className="p-8 text-center text-gray-500">
            <p>No jobs found.</p>
            <p className="text-xs mt-1">Try a different keyword.</p>
          </div>
        )}
    </div>
  );
};

export default SearchModal;