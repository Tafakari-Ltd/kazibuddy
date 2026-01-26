"use client";
import { Clock, Locate, ArrowRight } from "lucide-react";
import { useEffect, useMemo, useState, useCallback, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

import { AppDispatch, RootState } from "@/Redux/Store/Store";
import { openJobModal, setSelectedJob } from "@/Redux/Features/ApplyJobSlice";
import { openJobDescription } from "@/Redux/Features/JobDescriptionSlice";
import { fetchUserWorkerProfile } from "@/Redux/Features/workerProfilesSlice";
import { fetchJobById } from "@/Redux/Features/jobsSlice"; // Import fetchJobById
import { useJobs } from "@/Redux/Functions/useJobs";
import { useCategories } from "@/Redux/Functions/useCategories";
import { Job } from "@/types/job.types";
import { JobDetails } from "@/types/jobApplication.types";

const JobListPage = () => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();
  const searchParams = useSearchParams();

  const { isAuthenticated, userId } = useSelector((state: RootState) => state.auth);
  const { userProfile } = useSelector((state: RootState) => state.workerProfiles);
  const { jobs, loading, handleFetchJobs, handleFetchJobsByCategory } = useJobs();
  const { categories, handleFetchCategories } = useCategories();

  const [activeCategoryId, setActiveCategoryId] = useState<string>("all");
  const toastShownRef = useRef(false);

  useEffect(() => {
    handleFetchCategories();
  }, []);

  // Handle Search Params for filtering the list
  useEffect(() => {
    const query = searchParams.get("q");
    const location = searchParams.get("location");
    
    // Only fetch list if we are NOT trying to open a specific ID immediately
    // or if we want background list to match search
    if (query || location) {
        handleFetchJobs({
            search_query: query || "",
            location: location || ""
        });
        setActiveCategoryId(""); 
    } else if (activeCategoryId === "all") {
        handleFetchJobs();
    } else if (activeCategoryId) {
        handleFetchJobsByCategory(activeCategoryId);
    }
  }, [activeCategoryId, searchParams, handleFetchJobs, handleFetchJobsByCategory]);

  const visibleJobs: Job[] = useMemo(() => jobs, [jobs]);

  const dispatchJobDescription = useCallback((job: Job) => {
    dispatch(
      openJobDescription({
        id: String(job.id),
        title: job.title,
        jobType: job.job_type,
        category: typeof job.category === 'string' ? job.category : (job.category as any)?.name || 'General',
        location: (job as any).location_address || job.location_text || job.location || 'Not specified',
        rate: job.budget_min && job.budget_max ? `KSh ${job.budget_min.toLocaleString()} - ${job.budget_max.toLocaleString()}` : 'Negotiable',
        description: job.description || "View details for more information.",
        image: (job as any).job_image || '',
      } as any)
    );
  }, [dispatch]);

  const handleViewDetails = (job: Job) => {
    dispatchJobDescription(job);
  };

  const handleApply = useCallback(
    async (job: Job) => {
      if (!isAuthenticated) {
        const currentPath = window.location.pathname;
        const returnUrl = `${currentPath}?applyJobId=${job.id}`;
        router.push(`/auth/login?returnTo=${encodeURIComponent(returnUrl)}`);
        return;
      }
      
      if (userId && !userProfile) {
        try {
           const result = await dispatch(fetchUserWorkerProfile(userId)).unwrap();
           if (!result) {
             toast.info("Please create a worker profile");
             router.push('/worker');
             return;
           }
        } catch {
           toast.info("Please create a worker profile");
           router.push('/worker');
           return;
        }
      }
      
      dispatchJobDescription(job); 
      dispatch(setSelectedJob(job as unknown as JobDetails));
      dispatch(openJobModal()); 
    },
    [dispatch, isAuthenticated, userProfile, userId, router, dispatchJobDescription]
  );

  // Handle Direct Job Opening via ID (from Search or Link)
  useEffect(() => {
    const applyJobIdParam = searchParams.get("applyJobId");
    
    if (!applyJobIdParam) {
      toastShownRef.current = false;
      return;
    }

    const openJob = async () => {
       // Check if job is already in the list
       let jobToApply = visibleJobs.find((j) => String(j.id) === applyJobIdParam);

       // If not in list, fetch it specifically
       if (!jobToApply) {
         try {
           const fetchedJob = await dispatch(fetchJobById(applyJobIdParam)).unwrap();
          
           jobToApply = (fetchedJob as any).data || fetchedJob;
         } catch (error) {
           console.error("Could not fetch job details", error);
         }
       }

       if (jobToApply) {
          if (!isAuthenticated) {
           
          }
          
          if (isAuthenticated) {
             // Verify Profile
             if (userId && !userProfile) {
                 try {
                     const hasProfile = await dispatch(fetchUserWorkerProfile(userId)).unwrap();
                     if (!hasProfile) {
                         if (!toastShownRef.current) {
                             toast.info("Please create a worker profile");
                             toastShownRef.current = true;
                         }
                         router.push("/worker");
                         return;
                     }
                 } catch { return; }
             }

             if (!toastShownRef.current) {
                 toast.success("Opening job details...");
                 toastShownRef.current = true;
             }

             // Open Modal
             dispatchJobDescription(jobToApply as Job);
             dispatch(setSelectedJob(jobToApply as unknown as JobDetails));
             dispatch(openJobModal());
             
             // Clean URL
             router.replace("/jobs", { scroll: false });
          }
       }
    };

    if (isAuthenticated) {
        openJob();
    }
  }, [searchParams, isAuthenticated, dispatch, router, visibleJobs, userId, userProfile, dispatchJobDescription]);


  return (
    <div className="mx-auto px-6 md:px-12 py-12">
      <h1 className="text-4xl font-bold text-[#800000] mb-6 container">Jobs</h1>

      <div className="flex flex-wrap gap-2 mb-10 container">
        <button
          onClick={() => setActiveCategoryId("all")}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
            activeCategoryId === "all"
              ? "bg-[#800000] text-white shadow-sm"
              : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
          }`}
        >
          All
        </button>
        {categories.map((cat) => (
          <button
            key={cat.id}
            onClick={() => setActiveCategoryId(cat.id)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeCategoryId === cat.id
                ? "bg-[#800000] text-white shadow-sm"
                : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12 container">
        {loading && visibleJobs.length === 0 && (
          <p className="text-gray-600 col-span-full">Loading jobs...</p>
        )}
        {!loading && visibleJobs.length === 0 && (
          <p className="text-gray-600 col-span-full">No jobs found.</p>
        )}
        {visibleJobs.map((job) => (
          <div
            key={job.id}
            id={`job-card-${job.id}`} 
            className="rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white hover:shadow-md transition-shadow"
          >
            <div className="p-5 space-y-3">
              <h4 className="text-lg font-bold text-[#800000]">{job.title}</h4>
              <p className="text-gray-600 text-sm line-clamp-3">
                {job.description}
              </p>

              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                <span className="flex items-center gap-1">
                  <Locate className="w-4 h-4" />
                  {job.location}
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" />
                  {job.job_type.replace("_", " ")}
                </span>
                <span className="font-medium text-[#800000]">
                  {job.budget_min
                    ? `KSh ${job.budget_min.toLocaleString()}`
                    : "—"}
                  {job.budget_max
                    ? ` - KSh ${job.budget_max.toLocaleString()}`
                    : ""}
                </span>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={() => handleApply(job)}
                  className="flex-1 bg-gradient-to-r from-[#800000] to-[#600000] text-white px-4 py-2 rounded-sm text-sm font-semibold hover:opacity-90"
                >
                  Apply Now
                </button>
              
                <button
                  onClick={() => handleViewDetails(job)}
                  className="flex items-center gap-1 text-[#800000] px-3 py-2 border border-[#800000] rounded-sm text-sm hover:bg-[#800000] hover:text-white transition-colors"
                >
                  View <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobListPage;