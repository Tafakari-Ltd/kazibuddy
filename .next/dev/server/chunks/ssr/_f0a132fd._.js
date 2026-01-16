module.exports = [
"[project]/src/Redux/Functions/useJobs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useJobs",
    ()=>useJobs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/jobsSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobEmployerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/jobs/jobEmployerSlice.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
const useJobs = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { jobs, featuredJobs, currentJob, filters, pagination, loading, error, successMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.jobs);
    const { employer: jobEmployer, loading: employerLoading } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.jobEmployer);
    const handleFetchJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (filters)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchJobs"])(filters));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleFetchFeaturedJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async ()=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchFeaturedJobs"])());
        return result.payload;
    }, [
        dispatch
    ]);
    const handleFetchJobById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (jobId)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchJobById"])(jobId));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleCreateJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (jobData)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createJob"])(jobData));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleUpdateJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (jobId, data)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateJob"])({
            jobId,
            data
        }));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleDeleteJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (jobId)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteJob"])(jobId));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleUpdateJobStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (jobId, status)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateJobStatus"])({
            jobId,
            status
        }));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleFetchJobsByEmployer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (employerId)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchJobsByEmployer"])(employerId));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleFetchJobsByCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (categoryId)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchJobsByCategory"])(categoryId));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleSetFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((newFilters)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setFilters"])(newFilters));
    }, [
        dispatch
    ]);
    const handleClearFilters = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearFilters"])());
    }, [
        dispatch
    ]);
    const handleSetPagination = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((page, limit)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setPagination"])({
            page,
            limit
        }));
    }, [
        dispatch
    ]);
    const handleFetchJobEmployer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (jobId)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobEmployerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchJobEmployer"])(jobId));
        return result.payload;
    }, [
        dispatch
    ]);
    const handleClearState = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearState"])());
    }, [
        dispatch
    ]);
    const handleClearCurrentJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCurrentJob"])());
    }, [
        dispatch
    ]);
    const getJobById = (jobId)=>{
        return jobs.find((job)=>job.id === jobId);
    };
    const getJobsByStatus = (status)=>{
        return jobs.filter((job)=>job.status === status);
    };
    const getJobsByCategory = (categoryId)=>{
        return jobs.filter((job)=>job.category === categoryId);
    };
    const getTotalJobs = ()=>{
        return pagination.total;
    };
    const getCurrentPage = ()=>{
        return pagination.page;
    };
    const getTotalPages = ()=>{
        return pagination.total_pages;
    };
    const isFirstPage = ()=>{
        return pagination.page === 1;
    };
    const isLastPage = ()=>{
        return pagination.page === pagination.total_pages;
    };
    return {
        jobs,
        featuredJobs,
        currentJob,
        jobEmployer,
        filters,
        pagination,
        loading,
        employerLoading,
        error,
        successMessage,
        handleFetchJobs,
        handleFetchFeaturedJobs,
        handleFetchJobById,
        handleCreateJob,
        handleUpdateJob,
        handleDeleteJob,
        handleUpdateJobStatus,
        handleFetchJobsByEmployer,
        handleFetchJobsByCategory,
        handleSetFilters,
        handleClearFilters,
        handleSetPagination,
        handleFetchJobEmployer,
        handleClearState,
        handleClearCurrentJob,
        getJobById,
        getJobsByStatus,
        getJobsByCategory,
        getTotalJobs,
        getCurrentPage,
        getTotalPages,
        isFirstPage,
        isLastPage
    };
};
}),
"[project]/src/Redux/Functions/useCategories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useCategories",
    ()=>useCategories
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/jobs/jobsCategories/jobCategories.ts [app-ssr] (ecmascript)");
"use client";
;
;
const useCategories = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { categories, currentCategory, loading, error, successMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.categories);
    const handleFetchCategories = async ()=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCategories"])());
        return result.payload;
    };
    const handleFetchCategoryById = async (categoryId)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchCategoryById"])(categoryId));
        return result.payload;
    };
    const handleCreateCategory = async (name, description)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createCategory"])({
            name,
            description
        }));
        return result.payload;
    };
    const handleUpdateCategory = async (categoryId, name, description)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateCategory"])({
            categoryId,
            data: {
                name,
                description
            }
        }));
        return result.payload;
    };
    const handleDeleteCategory = async (categoryId)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteCategory"])(categoryId));
        return result.payload;
    };
    const handleFetchJobsByCategory = async (categoryId)=>{
        const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchJobsByCategory"])(categoryId));
        return result.payload;
    };
    const handleClearState = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearState"])());
    };
    const handleClearCurrentCategory = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearCurrentCategory"])());
    };
    return {
        categories,
        currentCategory,
        loading,
        error,
        successMessage,
        handleFetchCategories,
        handleFetchCategoryById,
        handleCreateCategory,
        handleUpdateCategory,
        handleDeleteCategory,
        handleFetchJobsByCategory,
        handleClearState,
        handleClearCurrentCategory
    };
};
}),
"[project]/src/app/jobs/page.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/locate.js [app-ssr] (ecmascript) <export default as Locate>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/ApplyJobSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Functions$2f$useJobs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Functions/useJobs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Functions$2f$useCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Functions/useCategories.ts [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
const JobListPage = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { jobs, loading, handleFetchJobs, handleFetchJobsByCategory } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Functions$2f$useJobs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useJobs"])();
    const { categories, handleFetchCategories } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Functions$2f$useCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCategories"])();
    const [activeCategoryId, setActiveCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("all");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        handleFetchCategories();
        handleFetchJobs();
    }, []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (activeCategoryId === "all") {
            handleFetchJobs();
        } else if (activeCategoryId) {
            handleFetchJobsByCategory(activeCategoryId);
        }
    }, [
        activeCategoryId
    ]);
    const visibleJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>jobs, [
        jobs
    ]);
    const handleApply = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openJobModal"])());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mx-auto px-6 md:px-12 py-12",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-4xl font-bold text-[#800000] mb-6 container",
                children: "Jobs"
            }, void 0, false, {
                fileName: "[project]/src/app/jobs/page.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-wrap gap-2 mb-10 container",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setActiveCategoryId("all"),
                        className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategoryId === "all" ? "bg-[#800000] text-white shadow-sm" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`,
                        children: "All"
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/page.tsx",
                        lineNumber: 44,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>setActiveCategoryId(cat.id),
                            className: `px-4 py-2 rounded-full text-sm font-medium transition-colors ${activeCategoryId === cat.id ? "bg-[#800000] text-white shadow-sm" : "bg-white text-gray-600 hover:bg-gray-100 border border-gray-200"}`,
                            children: cat.name
                        }, cat.id, false, {
                            fileName: "[project]/src/app/jobs/page.tsx",
                            lineNumber: 55,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/jobs/page.tsx",
                lineNumber: 43,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid gap-4 md:grid-cols-2 lg:grid-cols-3 mb-12 container",
                children: [
                    loading && visibleJobs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 col-span-full",
                        children: "Loading jobs..."
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/page.tsx",
                        lineNumber: 72,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    !loading && visibleJobs.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-600 col-span-full",
                        children: "No jobs found."
                    }, void 0, false, {
                        fileName: "[project]/src/app/jobs/page.tsx",
                        lineNumber: 75,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    visibleJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "rounded-xl overflow-hidden shadow-sm border border-gray-200 bg-white hover:shadow-md transition-shadow",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "p-5 space-y-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h4", {
                                        className: "text-lg font-bold text-[#800000]",
                                        children: job.title
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jobs/page.tsx",
                                        lineNumber: 83,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-gray-600 text-sm line-clamp-3",
                                        children: job.description
                                    }, void 0, false, {
                                        fileName: "[project]/src/app/jobs/page.tsx",
                                        lineNumber: 84,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap items-center gap-4 text-sm text-gray-600",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Locate$3e$__["Locate"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jobs/page.tsx",
                                                        lineNumber: 90,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    job.location
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/jobs/page.tsx",
                                                lineNumber: 89,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "flex items-center gap-1",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jobs/page.tsx",
                                                        lineNumber: 94,
                                                        columnNumber: 19
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    job.job_type.replace("_", " ")
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/jobs/page.tsx",
                                                lineNumber: 93,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "font-medium text-[#800000]",
                                                children: [
                                                    job.budget_min ? `KSh ${job.budget_min.toLocaleString()}` : "—",
                                                    job.budget_max ? ` - KSh ${job.budget_max.toLocaleString()}` : ""
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/jobs/page.tsx",
                                                lineNumber: 97,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/jobs/page.tsx",
                                        lineNumber: 88,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex gap-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                onClick: handleApply,
                                                className: "flex-1 bg-gradient-to-r from-[#800000] to-[#600000] text-white px-4 py-2 rounded-sm text-sm font-semibold hover:opacity-90",
                                                children: "Apply Now"
                                            }, void 0, false, {
                                                fileName: "[project]/src/app/jobs/page.tsx",
                                                lineNumber: 108,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                                href: `/admin/jobs?status=${job.status}`,
                                                className: "flex items-center gap-1 text-[#800000] px-3 py-2 border border-[#800000] rounded-sm text-sm",
                                                children: [
                                                    "View ",
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ArrowRight$3e$__["ArrowRight"], {
                                                        className: "w-4 h-4"
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/app/jobs/page.tsx",
                                                        lineNumber: 118,
                                                        columnNumber: 24
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/app/jobs/page.tsx",
                                                lineNumber: 114,
                                                columnNumber: 17
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/app/jobs/page.tsx",
                                        lineNumber: 107,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/app/jobs/page.tsx",
                                lineNumber: 82,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, job.id, false, {
                            fileName: "[project]/src/app/jobs/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)))
                ]
            }, void 0, true, {
                fileName: "[project]/src/app/jobs/page.tsx",
                lineNumber: 70,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/app/jobs/page.tsx",
        lineNumber: 39,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = JobListPage;
}),
"[project]/node_modules/lucide-react/dist/esm/icons/locate.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>Locate
]);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "line",
        {
            x1: "2",
            x2: "5",
            y1: "12",
            y2: "12",
            key: "bvdh0s"
        }
    ],
    [
        "line",
        {
            x1: "19",
            x2: "22",
            y1: "12",
            y2: "12",
            key: "1tbv5k"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "2",
            y2: "5",
            key: "11lu5j"
        }
    ],
    [
        "line",
        {
            x1: "12",
            x2: "12",
            y1: "19",
            y2: "22",
            key: "x3vr5v"
        }
    ],
    [
        "circle",
        {
            cx: "12",
            cy: "12",
            r: "7",
            key: "fim9np"
        }
    ]
];
const Locate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("locate", __iconNode);
;
 //# sourceMappingURL=locate.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/locate.js [app-ssr] (ecmascript) <export default as Locate>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Locate",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$locate$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/locate.js [app-ssr] (ecmascript)");
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "__iconNode",
    ()=>__iconNode,
    "default",
    ()=>ArrowRight
]);
/**
 * @license lucide-react v0.511.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */ var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/createLucideIcon.js [app-ssr] (ecmascript)");
;
const __iconNode = [
    [
        "path",
        {
            d: "M5 12h14",
            key: "1ays0h"
        }
    ],
    [
        "path",
        {
            d: "m12 5 7 7-7 7",
            key: "xquz4c"
        }
    ]
];
const ArrowRight = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$createLucideIcon$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])("arrow-right", __iconNode);
;
 //# sourceMappingURL=arrow-right.js.map
}),
"[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript) <export default as ArrowRight>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ArrowRight",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$arrow$2d$right$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/arrow-right.js [app-ssr] (ecmascript)");
}),
];

//# sourceMappingURL=_f0a132fd._.js.map