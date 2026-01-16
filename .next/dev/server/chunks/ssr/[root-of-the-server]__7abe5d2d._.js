module.exports = [
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[project]/src/Redux/Features/SearchSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearQuery",
    ()=>clearQuery,
    "default",
    ()=>__TURBOPACK__default__export__,
    "setQuery",
    ()=>setQuery,
    "toggleSearch",
    ()=>toggleSearch
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    query: "",
    isShown: false
};
const searchSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "search",
    initialState,
    reducers: {
        setQuery: (state, action)=>{
            state.query = action.payload;
            state.isShown = true;
        },
        clearQuery: (state)=>{
            state.query = "";
            state.isShown = false;
        },
        toggleSearch: (state)=>{
            state.isShown = false;
        }
    }
});
const { setQuery, clearQuery, toggleSearch } = searchSlice.actions;
const __TURBOPACK__default__export__ = searchSlice;
}),
"[project]/src/Redux/Features/SidebarSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeSidebar",
    ()=>closeSidebar,
    "default",
    ()=>__TURBOPACK__default__export__,
    "openSidebar",
    ()=>openSidebar,
    "resetSidebar",
    ()=>resetSidebar,
    "setActiveLink",
    ()=>setActiveLink,
    "setSidebarType",
    ()=>setSidebarType,
    "toggleSidebar",
    ()=>toggleSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    open: false,
    type: null,
    active: null
};
const sidebarSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "sidebar",
    initialState,
    reducers: {
        toggleSidebar: (state)=>{
            state.open = !state.open;
        },
        openSidebar: (state)=>{
            state.open = true;
        },
        closeSidebar: (state)=>{
            state.open = false;
        },
        setSidebarType: (state, action)=>{
            state.type = action.payload;
        },
        setActiveLink: (state, action)=>{
            state.active = action.payload;
        },
        resetSidebar: ()=>initialState
    }
});
const { toggleSidebar, openSidebar, closeSidebar, setSidebarType, setActiveLink, resetSidebar } = sidebarSlice.actions;
const __TURBOPACK__default__export__ = sidebarSlice;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[externals]/assert [external] (assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("assert", () => require("assert"));

module.exports = mod;
}),
"[externals]/tty [external] (tty, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tty", () => require("tty"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[project]/src/lib/axios.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/axios/lib/axios.js [app-ssr] (ecmascript)");
;
const api = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$axios$2f$lib$2f$axios$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].create({
    baseURL: process.env.NEXT_PUBLIC_BASE_URL
});
api.interceptors.request.use((config)=>{
    const token = ("TURBOPACK compile-time falsy", 0) ? "TURBOPACK unreachable" : null;
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    return config;
}, (error)=>Promise.reject(error));
api.interceptors.response.use((response)=>response.data, (error)=>{
    if (error.response) {
        const status = error.response.status;
        const data = error.response.data;
        // Handle Unauthorized
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        let errorMessage = "An error occurred";
        let fieldErrors = {};
        if (typeof data === "string") {
            errorMessage = data;
        } else if (data?.detail) {
            errorMessage = data.detail;
        } else if (data?.message) {
            errorMessage = data.message;
        } else if (data?.error) {
            errorMessage = data.error;
        } else if (data?.non_field_errors) {
            errorMessage = Array.isArray(data.non_field_errors) ? data.non_field_errors[0] : data.non_field_errors;
        } else {
            // Handle field errors
            Object.entries(data).forEach(([key, val])=>{
                fieldErrors[key] = Array.isArray(val) ? val.map(String) : [
                    String(val)
                ];
            });
            const firstKey = Object.keys(fieldErrors)[0];
            if (firstKey) errorMessage = fieldErrors[firstKey][0];
        }
        return Promise.reject({
            message: errorMessage,
            status,
            data,
            fieldErrors
        });
    }
    return Promise.reject({
        message: error.message || "Network Error",
        status: 0,
        data: null
    });
});
const __TURBOPACK__default__export__ = api;
}),
"[project]/src/services/jobApplicationApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobApplicationApi",
    ()=>JobApplicationApi,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
;
class JobApplicationApi {
    static BASE_ENDPOINT = '/applications';
    static ADMIN_ENDPOINT = '/adminpanel/applications';
    static async adminChangeStatus(applicationId, status, notes) {
        const payload = {
            status
        };
        if (notes) payload.employer_notes = notes;
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].patch(`${this.ADMIN_ENDPOINT}/${applicationId}/status/`, payload);
    }
    static async applyForJob(jobId, applicationData) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${this.BASE_ENDPOINT}/${jobId}/apply/`, applicationData);
    }
    static async getMyApplications(params) {
        const query = this.buildQueryParams(params);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${this.BASE_ENDPOINT}/me/${query ? `?${query}` : ''}`);
    }
    static async getApplicationDetails(applicationId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${this.BASE_ENDPOINT}/${applicationId}/`);
    }
    static async getJobApplications(jobId, params) {
        const query = this.buildQueryParams(params);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${this.BASE_ENDPOINT}/job/${jobId}/${query ? `?${query}` : ''}`);
    }
    static async getAllApplications(params) {
        const query = this.buildQueryParams(params);
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${this.BASE_ENDPOINT}/all/${query ? `?${query}` : ''}`);
    }
    static async updateApplication(applicationId, updateData) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`${this.BASE_ENDPOINT}/${applicationId}/`, updateData);
    }
    static async deleteApplication(applicationId) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`${this.BASE_ENDPOINT}/${applicationId}/`);
    }
    static async hasUserApplied(jobId) {
        try {
            const response = await this.getMyApplications({
                search: jobId,
                per_page: 1
            });
            return response.applications.some((app)=>app.job === jobId);
        } catch  {
            return false;
        }
    }
    static async getJobApplicationStats(jobId) {
        const response = await this.getJobApplications(jobId);
        const apps = response.applications;
        return {
            total: apps.length,
            pending: apps.filter((app)=>app.status === 'pending').length,
            reviewed: apps.filter((app)=>app.status === 'reviewed').length,
            accepted: apps.filter((app)=>app.status === 'accepted').length,
            rejected: apps.filter((app)=>app.status === 'rejected').length
        };
    }
    static async bulkUpdateApplications(applicationIds, status) {
        const results = {
            success: true,
            updated: 0,
            errors: []
        };
        const chunks = this.chunkArray(applicationIds, 5);
        for (const chunk of chunks){
            await Promise.all(chunk.map(async (id)=>{
                try {
                    await this.updateApplication(id, {
                        status
                    });
                    results.updated++;
                } catch (error) {
                    results.errors.push(`Failed to update ${id}: ${error.message}`);
                    results.success = false;
                }
            }));
        }
        return results;
    }
    static buildQueryParams(params) {
        if (!params) return '';
        const q = new URLSearchParams();
        if (params.status) params.status.forEach((s)=>q.append('status', s));
        if (params.job_type) params.job_type.forEach((t)=>q.append('job_type', t));
        if (params.date_from) q.append('date_from', params.date_from);
        if (params.date_to) q.append('date_to', params.date_to);
        if (params.min_rate) q.append('min_rate', params.min_rate.toString());
        if (params.max_rate) q.append('max_rate', params.max_rate.toString());
        if (params.page) q.append('page', params.page.toString());
        if (params.per_page) q.append('per_page', params.per_page.toString());
        if (params.ordering) q.append('ordering', params.ordering);
        if (params.search) q.append('search', params.search);
        if (params.expand) q.append('expand', params.expand);
        return q.toString();
    }
    static chunkArray(array, chunkSize) {
        const chunks = [];
        for(let i = 0; i < array.length; i += chunkSize){
            chunks.push(array.slice(i, i + chunkSize));
        }
        return chunks;
    }
    static validateApplicationData(data) {
        const errors = {};
        if (!data.cover_letter?.trim()) errors.cover_letter = 'Cover letter is required';
        else if (data.cover_letter.length < 50) errors.cover_letter = 'Min 50 chars required';
        else if (data.cover_letter.length > 2000) errors.cover_letter = 'Max 2000 chars allowed';
        if (!data.proposed_rate || data.proposed_rate <= 0) errors.proposed_rate = 'Invalid rate';
        if (!data.availability_start) {
            errors.availability_start = 'Start date required';
        } else {
            const start = new Date(data.availability_start);
            if (start < new Date(new Date().setHours(0, 0, 0, 0))) errors.availability_start = 'Date cannot be in past';
        }
        return {
            isValid: Object.keys(errors).length === 0,
            errors
        };
    }
    static formatApplicationForDisplay(application) {
        return {
            ...application,
            applied_at: new Date(application.applied_at).toISOString(),
            reviewed_at: application.reviewed_at ? new Date(application.reviewed_at).toISOString() : null,
            responded_at: application.responded_at ? new Date(application.responded_at).toISOString() : null,
            proposed_rate: parseFloat(application.proposed_rate).toFixed(2)
        };
    }
}
const __TURBOPACK__default__export__ = JobApplicationApi;
}),
"[project]/src/Redux/Features/ApplyJobSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyForJob",
    ()=>applyForJob,
    "clearForm",
    ()=>clearForm,
    "clearFormErrors",
    ()=>clearFormErrors,
    "clearMessages",
    ()=>clearMessages,
    "closeJobModal",
    ()=>closeJobModal,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteApplication",
    ()=>deleteApplication,
    "fetchApplicationDetails",
    ()=>fetchApplicationDetails,
    "fetchApplicationStats",
    ()=>fetchApplicationStats,
    "fetchJobApplications",
    ()=>fetchJobApplications,
    "fetchMyApplications",
    ()=>fetchMyApplications,
    "openJobModal",
    ()=>openJobModal,
    "resetForm",
    ()=>resetForm,
    "setApiError",
    ()=>setApiError,
    "setAvailabilityStart",
    ()=>setAvailabilityStart,
    "setCoverLetter",
    ()=>setCoverLetter,
    "setFormErrors",
    ()=>setFormErrors,
    "setPagination",
    ()=>setPagination,
    "setProposedRate",
    ()=>setProposedRate,
    "setSelectedJob",
    ()=>setSelectedJob,
    "setSuccessMessage",
    ()=>setSuccessMessage,
    "setWorkerNotes",
    ()=>setWorkerNotes,
    "updateApplication",
    ()=>updateApplication,
    "updateApplicationStatus",
    ()=>updateApplicationStatus,
    "updateFormData",
    ()=>updateFormData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/jobApplicationApi.ts [app-ssr] (ecmascript)");
;
;
const initialFormData = {
    cover_letter: "",
    proposed_rate: 0,
    availability_start: "",
    worker_notes: "",
    employer_notes: ""
};
const initialState = {
    formData: initialFormData,
    myApplications: [],
    jobApplications: [],
    allApplications: [],
    currentApplication: null,
    selectedJob: null,
    isModalOpen: false,
    isLoading: false,
    isSubmitting: false,
    errors: {},
    apiError: null,
    successMessage: null,
    pagination: {
        currentPage: 1,
        totalPages: 1,
        totalItems: 0,
        itemsPerPage: 10
    },
    stats: {
        total: 0,
        pending: 0,
        reviewed: 0,
        accepted: 0,
        rejected: 0
    }
};
const applyForJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('jobApplication/apply', async ({ jobId, applicationData })=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].applyForJob(jobId, applicationData);
    return response;
});
const fetchMyApplications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('jobApplication/fetchMyApplications', async (params)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMyApplications(params);
    return response;
});
const fetchApplicationDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('jobApplication/fetchDetails', async (applicationId)=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getApplicationDetails(applicationId);
    return response;
});
const fetchJobApplications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('jobApplication/fetchJobApplications', async ({ jobId, params })=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getJobApplications(jobId, params);
    return response;
});
const updateApplication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('jobApplication/update', async ({ applicationId, updateData })=>{
    const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].updateApplication(applicationId, updateData);
    return response;
});
const deleteApplication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('jobApplication/delete', async (applicationId)=>{
    await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].deleteApplication(applicationId);
    return applicationId;
});
const fetchApplicationStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])('jobApplication/fetchStats', async (jobId)=>{
    const stats = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getJobApplicationStats(jobId);
    return stats;
});
const applyJobSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "jobApplication",
    initialState,
    reducers: {
        updateFormData (state, action) {
            state.formData = {
                ...state.formData,
                ...action.payload
            };
        },
        setCoverLetter (state, action) {
            state.formData.cover_letter = action.payload;
        },
        setProposedRate (state, action) {
            state.formData.proposed_rate = action.payload;
        },
        setAvailabilityStart (state, action) {
            state.formData.availability_start = action.payload;
        },
        setWorkerNotes (state, action) {
            state.formData.worker_notes = action.payload;
        },
        setSelectedJob (state, action) {
            state.selectedJob = action.payload;
        },
        setFormErrors (state, action) {
            state.errors = action.payload;
        },
        clearFormErrors (state) {
            state.errors = {};
        },
        resetForm (state) {
            state.formData = initialFormData;
            state.errors = {};
        },
        clearForm (state) {
            state.formData = initialFormData;
            state.errors = {};
            state.apiError = null;
            state.successMessage = null;
        },
        openJobModal (state) {
            state.isModalOpen = true;
            state.apiError = null;
            state.successMessage = null;
        },
        closeJobModal (state) {
            state.isModalOpen = false;
            state.formData = initialFormData;
            state.errors = {};
            state.apiError = null;
            state.successMessage = null;
        },
        setSuccessMessage (state, action) {
            state.successMessage = action.payload;
            state.apiError = null;
        },
        setApiError (state, action) {
            state.apiError = action.payload;
            state.successMessage = null;
        },
        clearMessages (state) {
            state.successMessage = null;
            state.apiError = null;
        },
        updateApplicationStatus (state, action) {
            const { id, status } = action.payload;
            const myApp = state.myApplications.find((app)=>app.id === id);
            if (myApp) myApp.status = status;
            const jobApp = state.jobApplications.find((app)=>app.id === id);
            if (jobApp) jobApp.status = status;
            const allApp = state.allApplications.find((app)=>app.id === id);
            if (allApp) allApp.status = status;
            if (state.currentApplication && state.currentApplication.id === id) {
                state.currentApplication.status = status;
            }
        },
        setPagination (state, action) {
            state.pagination = {
                ...state.pagination,
                ...action.payload
            };
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(applyForJob.pending, (state)=>{
            state.isSubmitting = true;
            state.apiError = null;
        }).addCase(applyForJob.fulfilled, (state, action)=>{
            state.isSubmitting = false;
            state.successMessage = action.payload.message || 'Application submitted successfully!';
            state.isModalOpen = false;
            state.formData = initialFormData;
            state.errors = {};
        }).addCase(applyForJob.rejected, (state, action)=>{
            state.isSubmitting = false;
            state.apiError = action.error.message || 'Failed to submit application';
        });
        builder.addCase(fetchMyApplications.pending, (state)=>{
            state.isLoading = true;
            state.apiError = null;
        }).addCase(fetchMyApplications.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.myApplications = action.payload.applications;
        }).addCase(fetchMyApplications.rejected, (state, action)=>{
            state.isLoading = false;
            state.apiError = action.error.message || 'Failed to fetch applications';
        });
        builder.addCase(fetchApplicationDetails.pending, (state)=>{
            state.isLoading = true;
            state.apiError = null;
        }).addCase(fetchApplicationDetails.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.currentApplication = action.payload.application;
        }).addCase(fetchApplicationDetails.rejected, (state, action)=>{
            state.isLoading = false;
            state.apiError = action.error.message || 'Failed to fetch application details';
        });
        builder.addCase(fetchJobApplications.pending, (state)=>{
            state.isLoading = true;
            state.apiError = null;
        }).addCase(fetchJobApplications.fulfilled, (state, action)=>{
            state.isLoading = false;
            state.jobApplications = action.payload.applications;
        }).addCase(fetchJobApplications.rejected, (state, action)=>{
            state.isLoading = false;
            state.apiError = action.error.message || 'Failed to fetch job applications';
        });
        builder.addCase(updateApplication.pending, (state)=>{
            state.isSubmitting = true;
            state.apiError = null;
        }).addCase(updateApplication.fulfilled, (state, action)=>{
            state.isSubmitting = false;
            state.successMessage = action.payload.message || 'Application updated successfully!';
            state.currentApplication = action.payload.application;
        }).addCase(updateApplication.rejected, (state, action)=>{
            state.isSubmitting = false;
            state.apiError = action.error.message || 'Failed to update application';
        });
        builder.addCase(deleteApplication.pending, (state)=>{
            state.isSubmitting = true;
            state.apiError = null;
        }).addCase(deleteApplication.fulfilled, (state, action)=>{
            state.isSubmitting = false;
            state.successMessage = 'Application deleted successfully!';
            const applicationId = action.payload;
            state.myApplications = state.myApplications.filter((app)=>app.id !== applicationId);
            state.jobApplications = state.jobApplications.filter((app)=>app.id !== applicationId);
            state.allApplications = state.allApplications.filter((app)=>app.id !== applicationId);
            if (state.currentApplication?.id === applicationId) {
                state.currentApplication = null;
            }
        }).addCase(deleteApplication.rejected, (state, action)=>{
            state.isSubmitting = false;
            state.apiError = action.error.message || 'Failed to delete application';
        });
        builder.addCase(fetchApplicationStats.fulfilled, (state, action)=>{
            state.stats = action.payload;
        });
    }
});
const { updateFormData, setCoverLetter, setProposedRate, setAvailabilityStart, setWorkerNotes, setFormErrors, clearFormErrors, resetForm, clearForm, openJobModal, closeJobModal, setSuccessMessage, setApiError, clearMessages, updateApplicationStatus, setPagination, setSelectedJob } = applyJobSlice.actions;
const __TURBOPACK__default__export__ = applyJobSlice;
}),
"[project]/src/Redux/Features/AdminSIdebarSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeSidebar",
    ()=>closeSidebar,
    "default",
    ()=>__TURBOPACK__default__export__,
    "openSidebar",
    ()=>openSidebar,
    "resetSidebar",
    ()=>resetSidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    open: false
};
const adminSidebarSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "adminSidebar",
    initialState,
    reducers: {
        openSidebar: (state)=>{
            state.open = true;
        },
        closeSidebar: (state)=>{
            state.open = false;
        },
        resetSidebar: ()=>initialState
    }
});
const { openSidebar, closeSidebar, resetSidebar } = adminSidebarSlice.actions;
const __TURBOPACK__default__export__ = adminSidebarSlice;
}),
"[project]/src/Redux/Features/JobDescriptionSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "closeJobDescription",
    ()=>closeJobDescription,
    "default",
    ()=>__TURBOPACK__default__export__,
    "openJobDescription",
    ()=>openJobDescription,
    "resetState",
    ()=>resetState,
    "selectIsJobModalOpen",
    ()=>selectIsJobModalOpen,
    "selectJobDescriptionError",
    ()=>selectJobDescriptionError,
    "selectJobDescriptionLoading",
    ()=>selectJobDescriptionLoading,
    "selectJobDescriptionOpen",
    ()=>selectJobDescriptionOpen,
    "selectJobLocation",
    ()=>selectJobLocation,
    "selectJobRate",
    ()=>selectJobRate,
    "selectJobTitle",
    ()=>selectJobTitle,
    "selectSelectedJob",
    ()=>selectSelectedJob,
    "setError",
    ()=>setError,
    "setLoading",
    ()=>setLoading,
    "updateJobData",
    ()=>updateJobData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
;
const initialState = {
    open: false,
    selectedJob: null,
    loading: false,
    error: null
};
const moreJobDescriptionSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "moreDescription",
    initialState,
    reducers: {
        openJobDescription: (state, action)=>{
            state.open = true;
            state.selectedJob = action.payload;
            state.error = null;
        },
        closeJobDescription: (state)=>{
            state.open = false;
            state.selectedJob = null;
            state.error = null;
        },
        setLoading: (state, action)=>{
            state.loading = action.payload;
        },
        setError: (state, action)=>{
            state.error = action.payload;
            state.loading = false;
        },
        updateJobData: (state, action)=>{
            if (state.selectedJob) {
                state.selectedJob = {
                    ...state.selectedJob,
                    ...action.payload
                };
            }
        },
        resetState: (state)=>{
            state.open = false;
            state.selectedJob = null;
            state.loading = false;
            state.error = null;
        }
    }
});
const { openJobDescription, closeJobDescription, setLoading, setError, updateJobData, resetState } = moreJobDescriptionSlice.actions;
const selectJobDescriptionOpen = (state)=>state.moreDescription.open;
const selectSelectedJob = (state)=>state.moreDescription.selectedJob;
const selectJobDescriptionLoading = (state)=>state.moreDescription.loading;
const selectJobDescriptionError = (state)=>state.moreDescription.error;
const selectJobTitle = (state)=>state.moreDescription.selectedJob?.title || "";
const selectJobLocation = (state)=>state.moreDescription.selectedJob?.location || "";
const selectJobRate = (state)=>state.moreDescription.selectedJob?.rate || "";
const selectIsJobModalOpen = (state)=>state.moreDescription.open && state.moreDescription.selectedJob !== null;
const __TURBOPACK__default__export__ = moreJobDescriptionSlice;
}),
"[project]/src/Redux/Features/authSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "approveUser",
    ()=>approveUser,
    "clearAuthState",
    ()=>clearAuthState,
    "default",
    ()=>__TURBOPACK__default__export__,
    "loadSession",
    ()=>loadSession,
    "login",
    ()=>login,
    "logout",
    ()=>logout,
    "registerUser",
    ()=>registerUser,
    "resendOTP",
    ()=>resendOTP,
    "verifyEmail",
    ()=>verifyEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
"use client";
;
;
const setAuthCookie = (token)=>{
    if (typeof document !== 'undefined') {
        document.cookie = `accessToken=${token}; path=/; max-age=86400; SameSite=Lax; Secure`;
    }
};
const removeAuthCookie = ()=>{
    if (typeof document !== 'undefined') {
        document.cookie = "accessToken=; path=/; max-age=0";
    }
};
const registerUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/register", async (formData, { rejectWithValue })=>{
    try {
        const form = new FormData();
        Object.entries(formData).forEach(([key, value])=>{
            if (value !== undefined && value !== null && key !== "confirm_password") {
                form.append(key, value);
            }
        });
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("accounts/register/", form, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return response;
    } catch (err) {
        // Only return field errors if they actually exist and are not empty
        if (err?.fieldErrors && Object.keys(err.fieldErrors).length > 0) {
            return rejectWithValue(JSON.stringify({
                message: "Validation failed",
                fieldErrors: err.fieldErrors
            }));
        }
        // Fallback to the message
        return rejectWithValue(err?.message || "Registration failed");
    }
});
const verifyEmail = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/verifyEmail", async ({ user_id, otp_code }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("accounts/verify-email/", {
            user_id,
            otp_code,
            otp_type: "registration"
        });
        return response;
    } catch (err) {
        return rejectWithValue(err?.message || "Verification failed");
    }
});
const resendOTP = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/resendOTP", async ({ user_id, email }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("accounts/resend-otp/", {
            user_id,
            email,
            otp_type: "registration"
        });
        return response;
    } catch (err) {
        return rejectWithValue(err?.message || "Failed to resend OTP");
    }
});
const login = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/login", async ({ email, password }, { rejectWithValue })=>{
    try {
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/accounts/login/", {
            identifier: email,
            password
        });
        if (!res || !res.tokens) return rejectWithValue("Invalid login response");
        const { access: accessToken, refresh: refreshToken } = res.tokens;
        const userId = res.user_id;
        // Set cookie for middleware
        setAuthCookie(accessToken);
        const userFromApi = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/accounts/me/", {
            headers: {
                Authorization: `Bearer ${accessToken}`
            }
        });
        const user = {
            ...userFromApi,
            user_type: userFromApi.user_type ?? res.user_type
        };
        if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
        ;
        return {
            accessToken,
            refreshToken,
            userId,
            user
        };
    } catch (err) {
        let errorMessage = err?.message || "Login failed";
        // Handle 401 Unauthorized specifically
        if (err?.status === 401 || err?.response?.status === 401) {
            errorMessage = "Invalid email or password";
        }
        if (err?.fieldErrors && Object.keys(err.fieldErrors).length > 0) {
            const errors = Object.values(err.fieldErrors).flat();
            if (errors.length > 0) {
                errorMessage = errors.join(". ");
            }
        }
        if (err?.response?.data?.detail) {
            errorMessage = err.response.data.detail;
        }
        return rejectWithValue(errorMessage);
    }
});
const approveUser = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("auth/approveUser", async ({ userId, data }, { rejectWithValue })=>{
    try {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value])=>{
            if (value !== undefined && value !== null) formData.append(key, value);
        });
        const res = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/adminpanel/users/${userId}/approve/`, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        });
        return res;
    } catch (err) {
        return rejectWithValue(err.message || "Failed to approve user");
    }
});
const initialState = {
    accessToken: null,
    refreshToken: null,
    userId: null,
    isAuthenticated: false,
    loading: false,
    error: null,
    user: null,
    successMessage: null,
    isVerified: false
};
const authSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "auth",
    initialState,
    reducers: {
        loadSession: (state)=>{
            const accessToken = sessionStorage.getItem("accessToken");
            const refreshToken = sessionStorage.getItem("refreshToken");
            const userId = sessionStorage.getItem("userId");
            const user = sessionStorage.getItem("user");
            const isAuthenticated = sessionStorage.getItem("isAuthenticated");
            if (accessToken && refreshToken && userId && isAuthenticated === "true") {
                state.accessToken = accessToken;
                state.refreshToken = refreshToken;
                state.userId = userId;
                state.user = user ? JSON.parse(user) : null;
                state.isAuthenticated = true;
            }
        },
        logout: (state)=>{
            state.accessToken = null;
            state.refreshToken = null;
            state.userId = null;
            state.user = null;
            state.isAuthenticated = false;
            sessionStorage.clear();
            removeAuthCookie();
        },
        clearAuthState: (state)=>{
            state.error = null;
            state.successMessage = null;
            state.loading = false;
            state.isVerified = false;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(login.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(login.fulfilled, (state, action)=>{
            state.loading = false;
            state.accessToken = action.payload.accessToken;
            state.refreshToken = action.payload.refreshToken;
            state.userId = action.payload.userId;
            state.user = action.payload.user;
            state.isAuthenticated = true;
            sessionStorage.setItem("accessToken", action.payload.accessToken);
            sessionStorage.setItem("refreshToken", action.payload.refreshToken);
            sessionStorage.setItem("userId", action.payload.userId);
            sessionStorage.setItem("user", JSON.stringify(action.payload.user));
            sessionStorage.setItem("isAuthenticated", "true");
        }).addCase(login.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(registerUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(registerUser.fulfilled, (state, action)=>{
            state.loading = false;
            state.successMessage = action.payload.message;
        }).addCase(registerUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(verifyEmail.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(verifyEmail.fulfilled, (state, action)=>{
            state.loading = false;
            state.isVerified = true;
            state.successMessage = action.payload.message;
        }).addCase(verifyEmail.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(resendOTP.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(resendOTP.fulfilled, (state, action)=>{
            state.loading = false;
            state.successMessage = action.payload.message;
        }).addCase(resendOTP.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        }).addCase(approveUser.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(approveUser.fulfilled, (state)=>{
            state.loading = false;
        }).addCase(approveUser.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { loadSession, logout, clearAuthState } = authSlice.actions;
const __TURBOPACK__default__export__ = authSlice;
}),
"[project]/src/Redux/Features/WorkersSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearWorkerState",
    ()=>clearWorkerState,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchWorkerProfile",
    ()=>fetchWorkerProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
"use client";
;
;
const fetchWorkerProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("worker/fetchProfile", async (userId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`workers/${userId}/profile`);
        return response;
    } catch (err) {
        return rejectWithValue(err.message || "Failed to fetch profile");
    }
});
const initialState = {
    worker: null,
    loading: false,
    error: null,
    successMessage: null
};
const workerSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "worker",
    initialState,
    reducers: {
        clearWorkerState: (state)=>{
            state.error = null;
            state.successMessage = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchWorkerProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchWorkerProfile.fulfilled, (state, action)=>{
            state.loading = false;
            state.worker = action.payload;
        }).addCase(fetchWorkerProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearWorkerState } = workerSlice.actions;
const __TURBOPACK__default__export__ = workerSlice;
}),
"[project]/src/Redux/Features/jobs/jobsCategories/jobCategories.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCategories",
    ()=>clearCategories,
    "clearCurrentCategory",
    ()=>clearCurrentCategory,
    "clearState",
    ()=>clearState,
    "createCategory",
    ()=>createCategory,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteCategory",
    ()=>deleteCategory,
    "fetchCategories",
    ()=>fetchCategories,
    "fetchCategoryById",
    ()=>fetchCategoryById,
    "fetchJobsByCategory",
    ()=>fetchJobsByCategory,
    "hydrateCategories",
    ()=>hydrateCategories,
    "updateCategory",
    ()=>updateCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    categories: [],
    currentCategory: null,
    categoryJobs: [],
    loading: false,
    error: null,
    successMessage: null
};
const fetchCategories = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("categories/fetchCategories", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/jobs/categories/?page_size=1000");
        if (response.data && Array.isArray(response.data.results)) {
            return response.data.results;
        }
        return response.data || response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch categories");
    }
});
const fetchCategoryById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("categories/fetchCategoryById", async (categoryId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/jobs/categories/${categoryId}/`);
        return response.data || response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch category");
    }
});
const createCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("categories/createCategory", async (data, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/jobs/categories/create/", data);
        return response.data || response;
    } catch (error) {
        if (error?.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
            return rejectWithValue({
                message: "Validation errors occurred",
                fieldErrors: error.fieldErrors
            });
        }
        return rejectWithValue(error?.message || "Failed to create category");
    }
});
const updateCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("categories/updateCategory", async ({ categoryId, data }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/jobs/categories/update/${categoryId}/`, data);
        return response.data || response;
    } catch (error) {
        if (error?.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
            return rejectWithValue({
                message: "Validation errors occurred",
                fieldErrors: error.fieldErrors
            });
        }
        return rejectWithValue(error?.message || "Failed to update category");
    }
});
const deleteCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("categories/deleteCategory", async (categoryId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/jobs/categories/delete/${categoryId}/`);
        return categoryId;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to delete category");
    }
});
const fetchJobsByCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("categories/fetchJobsByCategory", async (categoryId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/jobs/categories/${categoryId}/jobs/`);
        return response.data || response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch jobs in category");
    }
});
const categoriesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "categories",
    initialState,
    reducers: {
        clearCategories: (state)=>{
            state.categories = [];
            state.error = null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        },
        hydrateCategories: (state, action)=>{
            state.categories = action.payload;
        },
        clearState: (state)=>{
            state.error = null;
            state.successMessage = null;
        },
        clearCurrentCategory: (state)=>{
            state.currentCategory = null;
            state.categoryJobs = [];
        }
    },
    extraReducers: (builder)=>{
        // Fetch all categories
        builder.addCase(fetchCategories.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchCategories.fulfilled, (state, action)=>{
            state.loading = false;
            state.categories = Array.isArray(action.payload) ? action.payload : action.payload.results || [];
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(fetchCategories.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Fetch single category
        builder.addCase(fetchCategoryById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchCategoryById.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentCategory = action.payload;
        }).addCase(fetchCategoryById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Create category
        builder.addCase(createCategory.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(createCategory.fulfilled, (state, action)=>{
            state.loading = false;
            state.categories.unshift(action.payload);
            state.successMessage = "Category created successfully";
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(createCategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "Failed to create category";
        });
        // Update category
        builder.addCase(updateCategory.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(updateCategory.fulfilled, (state, action)=>{
            state.loading = false;
            const index = state.categories.findIndex((cat)=>cat.id === action.payload.id);
            if (index !== -1) {
                state.categories[index] = action.payload;
            }
            state.currentCategory = action.payload;
            state.successMessage = "Category updated successfully";
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(updateCategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "Failed to update category";
        });
        // Delete category
        builder.addCase(deleteCategory.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(deleteCategory.fulfilled, (state, action)=>{
            state.loading = false;
            state.categories = state.categories.filter((cat)=>cat.id !== action.payload);
            if (state.currentCategory?.id === action.payload) {
                state.currentCategory = null;
            }
            state.successMessage = "Category deleted successfully";
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(deleteCategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Fetch jobs by category
        builder.addCase(fetchJobsByCategory.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchJobsByCategory.fulfilled, (state, action)=>{
            state.loading = false;
            state.categoryJobs = action.payload;
        }).addCase(fetchJobsByCategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearCategories, hydrateCategories, clearState, clearCurrentCategory } = categoriesSlice.actions;
const __TURBOPACK__default__export__ = categoriesSlice;
}),
"[project]/src/Redux/Features/profileSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearProfile",
    ()=>clearProfile,
    "clearProfileError",
    ()=>clearProfileError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteProfile",
    ()=>deleteProfile,
    "getProfile",
    ()=>getProfile,
    "updateProfile",
    ()=>updateProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
"use client";
;
;
const getProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("profile/getProfile", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("accounts/me/");
        return response;
    } catch (err) {
        return rejectWithValue(err.message || "Failed to fetch profile");
    }
});
const updateProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("profile/updateProfile", async (payload, { rejectWithValue })=>{
    try {
        // If there's a profile photo, use FormData
        if (payload.profile_photo) {
            const formData = new FormData();
            if (payload.full_name) formData.append("full_name", payload.full_name);
            if (payload.phone_number) formData.append("phone_number", payload.phone_number);
            formData.append("profile_photo", payload.profile_photo);
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put("accounts/me/update/", formData, {
                headers: {
                    "Content-Type": "multipart/form-data"
                }
            });
            return response;
        } else {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put("accounts/me/update/", payload);
            return response;
        }
    } catch (err) {
        return rejectWithValue(err.message || "Failed to update profile");
    }
});
const deleteProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("profile/deleteProfile", async (_, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete("accounts/me/delete/");
    } catch (err) {
        return rejectWithValue(err.message || "Failed to delete profile");
    }
});
// Initial State
const initialState = {
    profile: null,
    loading: false,
    updating: false,
    deleting: false,
    error: null
};
// Slice
const profileSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "profile",
    initialState,
    reducers: {
        clearProfileError: (state)=>{
            state.error = null;
        },
        clearProfile: (state)=>{
            state.profile = null;
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        // Get Profile
        builder.addCase(getProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getProfile.fulfilled, (state, action)=>{
            state.loading = false;
            state.profile = action.payload;
            // Optionally sync with sessionStorage
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(getProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload ?? "Failed to fetch profile";
        });
        // Update Profile
        builder.addCase(updateProfile.pending, (state)=>{
            state.updating = true;
            state.error = null;
        }).addCase(updateProfile.fulfilled, (state, action)=>{
            state.updating = false;
            state.profile = action.payload;
            // Sync with sessionStorage
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(updateProfile.rejected, (state, action)=>{
            state.updating = false;
            state.error = action.payload ?? "Failed to update profile";
        });
        // Delete Profile
        builder.addCase(deleteProfile.pending, (state)=>{
            state.deleting = true;
            state.error = null;
        }).addCase(deleteProfile.fulfilled, (state)=>{
            state.deleting = false;
            state.profile = null;
            // Clear session storage and redirect
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(deleteProfile.rejected, (state, action)=>{
            state.deleting = false;
            state.error = action.payload ?? "Failed to delete profile";
        });
    }
});
const { clearProfileError, clearProfile } = profileSlice.actions;
const __TURBOPACK__default__export__ = profileSlice;
}),
"[project]/src/Redux/Features/jobsSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCurrentJob",
    ()=>clearCurrentJob,
    "clearFilters",
    ()=>clearFilters,
    "clearJobs",
    ()=>clearJobs,
    "clearState",
    ()=>clearState,
    "createJob",
    ()=>createJob,
    "default",
    ()=>__TURBOPACK__default__export__,
    "deleteJob",
    ()=>deleteJob,
    "fetchFeaturedJobs",
    ()=>fetchFeaturedJobs,
    "fetchJobById",
    ()=>fetchJobById,
    "fetchJobs",
    ()=>fetchJobs,
    "fetchJobsByCategory",
    ()=>fetchJobsByCategory,
    "fetchJobsByEmployer",
    ()=>fetchJobsByEmployer,
    "hydrateJobs",
    ()=>hydrateJobs,
    "setFilters",
    ()=>setFilters,
    "setPagination",
    ()=>setPagination,
    "updateJob",
    ()=>updateJob,
    "updateJobStatus",
    ()=>updateJobStatus
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    jobs: [],
    featuredJobs: [],
    currentJob: null,
    jobSkills: [],
    jobEmployer: null,
    filters: {
        page: 1,
        limit: 10
    },
    pagination: {
        total: 0,
        page: 1,
        limit: 10,
        total_pages: 0
    },
    loading: false,
    error: null,
    successMessage: null
};
const fetchJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/fetchJobs", async (filters, { rejectWithValue })=>{
    try {
        const queryParams = new URLSearchParams();
        if (filters && typeof filters === "object") {
            Object.entries(filters).forEach(([key, value])=>{
                if (value !== undefined && value !== null && value !== "") {
                    queryParams.append(key, value.toString());
                }
            });
        }
        const queryString = queryParams.toString();
        const url = `/jobs/${queryString ? `?${queryString}&page_size=1000` : "?page_size=1000"}`;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(url);
        return response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch jobs");
    }
});
const fetchFeaturedJobs = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/fetchFeaturedJobs", async (_, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/jobs/featured/");
        return response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch featured jobs");
    }
});
const fetchJobById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/fetchJobById", async (jobId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/jobs/${jobId}/`);
        return response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch job details");
    }
});
const createJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/createJob", async (jobData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/jobs/create/", jobData);
        return response;
    } catch (error) {
        if (error?.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
            return rejectWithValue({
                message: "Validation errors occurred",
                fieldErrors: error.fieldErrors
            });
        }
        return rejectWithValue(error?.message || "Failed to create job");
    }
});
const updateJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/updateJob", async ({ jobId, data }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/jobs/update/${jobId}/`, data);
        return response;
    } catch (error) {
        if (error?.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
            return rejectWithValue({
                message: "Validation errors occurred",
                fieldErrors: error.fieldErrors
            });
        }
        return rejectWithValue(error?.message || "Failed to update job");
    }
});
const deleteJob = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/deleteJob", async (jobId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`/jobs/delete/${jobId}/`);
        return jobId;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to delete job");
    }
});
const updateJobStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/updateJobStatus", async ({ jobId, status }, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`/jobs/${jobId}/status/`, {
            status
        });
        return {
            jobId,
            status
        };
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to update job status");
    }
});
const fetchJobsByEmployer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/fetchJobsByEmployer", async (employerId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/jobs/employers/?employer_id=${employerId}&page_size=1000`);
        return response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch jobs by employer");
    }
});
const fetchJobsByCategory = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobs/fetchJobsByCategory", async (categoryId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/jobs/category/${categoryId}/filter/?page_size=1000`);
        return response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch jobs by category");
    }
});
const jobsSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "jobs",
    initialState,
    reducers: {
        clearJobs: (state)=>{
            state.jobs = [];
            state.error = null;
        },
        hydrateJobs: (state, action)=>{
            state.jobs = action.payload;
        },
        clearState: (state)=>{
            state.error = null;
            state.successMessage = null;
        },
        clearCurrentJob: (state)=>{
            state.currentJob = null;
            state.jobSkills = [];
            state.jobEmployer = null;
        },
        setFilters: (state, action)=>{
            state.filters = {
                ...state.filters,
                ...action.payload
            };
        },
        clearFilters: (state)=>{
            state.filters = {
                page: 1,
                limit: 10
            };
        },
        setPagination: (state, action)=>{
            state.pagination.page = action.payload.page;
            if (action.payload.limit) {
                state.pagination.limit = action.payload.limit;
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchJobs.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchJobs.fulfilled, (state, action)=>{
            state.loading = false;
            const payload = action.payload;
            if (payload.results && !Array.isArray(payload.results) && payload.results.data && Array.isArray(payload.results.data)) {
                state.jobs = payload.results.data;
            } else if (payload.results && Array.isArray(payload.results)) {
                state.jobs = payload.results;
            } else if (payload.data && Array.isArray(payload.data)) {
                state.jobs = payload.data;
            } else if (Array.isArray(payload)) {
                state.jobs = payload;
            } else {
                state.jobs = [];
            }
            if (payload.pagination) {
                state.pagination = payload.pagination;
            } else if (payload.count !== undefined) {
                const total = payload.count;
                const limit = state.filters.limit || 10;
                state.pagination = {
                    total: total,
                    page: state.filters.page || 1,
                    limit: limit,
                    total_pages: Math.ceil(total / limit)
                };
            }
        }).addCase(fetchJobs.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchFeaturedJobs.fulfilled, (state, action)=>{
            const payload = action.payload;
            let rawJobs = [];
            if (payload.results && !Array.isArray(payload.results) && payload.results.data && Array.isArray(payload.results.data)) {
                rawJobs = payload.results.data;
            } else if (payload.results && Array.isArray(payload.results)) {
                rawJobs = payload.results;
            } else if (payload.data && Array.isArray(payload.data)) {
                rawJobs = payload.data;
            } else if (Array.isArray(payload)) {
                rawJobs = payload;
            }
            state.featuredJobs = rawJobs.map((job)=>({
                    ...job,
                    category: job.category || (job.category_name ? {
                        name: job.category_name
                    } : {
                        name: "General"
                    }),
                    employer: job.employer || (job.employer_name ? {
                        company_name: job.employer_name
                    } : null),
                    description: job.description || "View details to see full job description."
                }));
        });
        builder.addCase(fetchJobById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchJobById.fulfilled, (state, action)=>{
            state.loading = false;
            const job = action.payload.data || action.payload;
            state.currentJob = job;
        }).addCase(fetchJobById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(createJob.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(createJob.fulfilled, (state, action)=>{
            state.loading = false;
            const job = action.payload.data || action.payload;
            state.jobs.unshift(job);
            state.successMessage = "Job created successfully";
        }).addCase(createJob.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "Failed to create job";
        });
        builder.addCase(updateJob.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(updateJob.fulfilled, (state, action)=>{
            state.loading = false;
            const job = action.payload.data || action.payload;
            const index = state.jobs.findIndex((j)=>j.id === job.id);
            if (index !== -1) state.jobs[index] = job;
            state.currentJob = job;
            state.successMessage = "Job updated successfully";
        }).addCase(updateJob.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "Failed to update job";
        });
        builder.addCase(deleteJob.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(deleteJob.fulfilled, (state, action)=>{
            state.loading = false;
            state.jobs = state.jobs.filter((job)=>job.id !== action.payload);
            if (state.currentJob?.id === action.payload) state.currentJob = null;
            state.successMessage = "Job deleted successfully";
        }).addCase(deleteJob.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(updateJobStatus.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(updateJobStatus.fulfilled, (state, action)=>{
            state.loading = false;
            const { jobId, status } = action.payload;
            const index = state.jobs.findIndex((job)=>job.id === jobId);
            if (index !== -1) state.jobs[index].status = status;
            if (state.currentJob?.id === jobId) state.currentJob.status = status;
            state.successMessage = "Job status updated successfully";
        }).addCase(updateJobStatus.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchJobsByEmployer.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchJobsByEmployer.fulfilled, (state, action)=>{
            state.loading = false;
            const payload = action.payload;
            if (payload.results && !Array.isArray(payload.results) && payload.results.data) {
                state.jobs = payload.results.data;
            } else if (payload.results && Array.isArray(payload.results)) {
                state.jobs = payload.results;
            } else if (payload.data && Array.isArray(payload.data)) {
                state.jobs = payload.data;
            } else {
                state.jobs = Array.isArray(action.payload) ? action.payload : [];
            }
            if (action.payload && action.payload.pagination) state.pagination = action.payload.pagination;
        }).addCase(fetchJobsByEmployer.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchJobsByCategory.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchJobsByCategory.fulfilled, (state, action)=>{
            state.loading = false;
            const payload = action.payload;
            if (payload.results && !Array.isArray(payload.results) && payload.results.data) {
                state.jobs = payload.results.data;
            } else if (payload.results && Array.isArray(payload.results)) {
                state.jobs = payload.results;
            } else if (payload.data && Array.isArray(payload.data)) {
                state.jobs = payload.data;
            } else {
                state.jobs = Array.isArray(action.payload) ? action.payload : [];
            }
            if (action.payload && action.payload.pagination) state.pagination = action.payload.pagination;
        }).addCase(fetchJobsByCategory.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearJobs, hydrateJobs, clearState, clearCurrentJob, setFilters, clearFilters, setPagination } = jobsSlice.actions;
const __TURBOPACK__default__export__ = jobsSlice;
}),
"[project]/src/Redux/Features/jobs/jobEmployerSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearEmployerState",
    ()=>clearEmployerState,
    "clearJobEmployer",
    ()=>clearJobEmployer,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchJobEmployer",
    ()=>fetchJobEmployer
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    employer: null,
    loading: false,
    error: null
};
const fetchJobEmployer = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("jobEmployer/fetchJobEmployer", async (jobId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/jobs/employer/${jobId}/`);
        return response.data || response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch job employer");
    }
});
const jobEmployerSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "jobEmployer",
    initialState,
    reducers: {
        clearJobEmployer: (state)=>{
            state.employer = null;
            state.error = null;
        },
        clearEmployerState: (state)=>{
            state.error = null;
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchJobEmployer.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchJobEmployer.fulfilled, (state, action)=>{
            state.loading = false;
            state.employer = action.payload;
        }).addCase(fetchJobEmployer.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
    }
});
const { clearJobEmployer, clearEmployerState } = jobEmployerSlice.actions;
const __TURBOPACK__default__export__ = jobEmployerSlice;
}),
"[project]/src/Redux/Features/employerProfilesSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCurrentProfile",
    ()=>clearCurrentProfile,
    "clearEmployerProfileState",
    ()=>clearEmployerProfileState,
    "clearEmployerProfiles",
    ()=>clearEmployerProfiles,
    "clearFilters",
    ()=>clearFilters,
    "clearUserProfile",
    ()=>clearUserProfile,
    "createEmployerProfile",
    ()=>createEmployerProfile,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchEmployerProfileById",
    ()=>fetchEmployerProfileById,
    "fetchEmployerProfiles",
    ()=>fetchEmployerProfiles,
    "fetchUserEmployerProfile",
    ()=>fetchUserEmployerProfile,
    "hydrateEmployerProfiles",
    ()=>hydrateEmployerProfiles,
    "setFilters",
    ()=>setFilters,
    "setPagination",
    ()=>setPagination,
    "updateEmployerProfile",
    ()=>updateEmployerProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    profiles: [],
    currentProfile: null,
    userProfile: null,
    filters: {
        page: 1,
        limit: 10
    },
    pagination: {
        total: 0,
        page: 1,
        limit: 10,
        total_pages: 0
    },
    loading: false,
    error: null,
    successMessage: null
};
const fetchEmployerProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("employerProfiles/fetchEmployerProfiles", async (filters, { rejectWithValue })=>{
    try {
        const queryParams = new URLSearchParams();
        if (filters && typeof filters === 'object') {
            Object.entries(filters).forEach(([key, value])=>{
                if (value !== undefined && value !== null && value !== '') {
                    queryParams.append(key, value.toString());
                }
            });
        }
        const queryString = queryParams.toString();
        const url = `/adminpanel/employer-profiles/${queryString ? `?${queryString}` : ''}`;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(url);
        return response.data || response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch employer profiles");
    }
});
const fetchEmployerProfileById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("employerProfiles/fetchEmployerProfileById", async (profileId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/adminpanel/employer-profiles/${profileId}/`);
        return response.data || response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch employer profile");
    }
});
const fetchUserEmployerProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("employerProfiles/fetchUserEmployerProfile", async (userId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/employers/employer-profiles/${userId}/`);
        return response.data || response;
    } catch (error) {
        if (error?.status === 404) {
            return rejectWithValue("Employer profile not found");
        }
        return rejectWithValue(error?.message || "Failed to fetch user employer profile");
    }
});
const createEmployerProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("employerProfiles/createEmployerProfile", async (profileData, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/employers/employer-profiles/create/", profileData);
        return response.data || response;
    } catch (error) {
        if (error?.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
            return rejectWithValue({
                message: "Validation errors occurred",
                fieldErrors: error.fieldErrors
            });
        }
        if (error?.data && typeof error.data === 'object') {
            const fieldErrors = {};
            let hasFieldErrors = false;
            Object.entries(error.data).forEach(([key, value])=>{
                if (Array.isArray(value)) {
                    fieldErrors[key] = value;
                    hasFieldErrors = true;
                } else if (typeof value === 'string') {
                    fieldErrors[key] = [
                        value
                    ];
                    hasFieldErrors = true;
                }
            });
            if (hasFieldErrors) {
                return rejectWithValue({
                    message: "Please fix the validation errors",
                    fieldErrors: fieldErrors
                });
            }
        }
        return rejectWithValue(error?.message || "Failed to create employer profile");
    }
});
const updateEmployerProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("employerProfiles/updateEmployerProfile", async ({ profileId, data }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/employers/employer-profiles/${profileId}/update/`, data);
        return response.data || response;
    } catch (error) {
        if (error?.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
            return rejectWithValue({
                message: "Validation errors occurred",
                fieldErrors: error.fieldErrors
            });
        }
        return rejectWithValue(error?.message || "Failed to update employer profile");
    }
});
const employerProfilesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "employerProfiles",
    initialState,
    reducers: {
        clearEmployerProfiles: (state)=>{
            state.profiles = [];
            state.error = null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        },
        hydrateEmployerProfiles: (state, action)=>{
            state.profiles = action.payload;
        },
        clearEmployerProfileState: (state)=>{
            state.error = null;
            state.successMessage = null;
        },
        clearCurrentProfile: (state)=>{
            state.currentProfile = null;
        },
        clearUserProfile: (state)=>{
            state.userProfile = null;
        },
        setFilters: (state, action)=>{
            state.filters = {
                ...state.filters,
                ...action.payload
            };
        },
        clearFilters: (state)=>{
            state.filters = {
                page: 1,
                limit: 10
            };
        },
        setPagination: (state, action)=>{
            state.pagination.page = action.payload.page;
            if (action.payload.limit) {
                state.pagination.limit = action.payload.limit;
            }
        }
    },
    extraReducers: (builder)=>{
        builder.addCase(fetchEmployerProfiles.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchEmployerProfiles.fulfilled, (state, action)=>{
            state.loading = false;
            if (action.payload.results && Array.isArray(action.payload.results)) {
                state.profiles = action.payload.results;
                const count = action.payload.count || 0;
                const limit = state.filters.limit || 10;
                state.pagination = {
                    total: count,
                    page: state.filters.page || 1,
                    limit: limit,
                    total_pages: Math.ceil(count / limit)
                };
            } else if (action.payload.data && Array.isArray(action.payload.data)) {
                state.profiles = action.payload.data;
                if (action.payload.pagination) {
                    state.pagination = action.payload.pagination;
                }
            } else if (Array.isArray(action.payload)) {
                state.profiles = action.payload;
            } else {
                state.profiles = [];
            }
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(fetchEmployerProfiles.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchEmployerProfileById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchEmployerProfileById.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentProfile = action.payload;
        }).addCase(fetchEmployerProfileById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        builder.addCase(fetchUserEmployerProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchUserEmployerProfile.fulfilled, (state, action)=>{
            state.loading = false;
            state.userProfile = action.payload;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(fetchUserEmployerProfile.rejected, (state, action)=>{
            state.loading = false;
            const errorMsg = action.payload;
            if (errorMsg === "Employer profile not found") {
                state.error = null;
                state.userProfile = null;
            } else {
                state.error = errorMsg;
            }
        });
        builder.addCase(createEmployerProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(createEmployerProfile.fulfilled, (state, action)=>{
            state.loading = false;
            state.profiles.unshift(action.payload);
            state.userProfile = action.payload;
            state.successMessage = "Employer profile created successfully";
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(createEmployerProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "Failed to create employer profile";
        });
        builder.addCase(updateEmployerProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(updateEmployerProfile.fulfilled, (state, action)=>{
            state.loading = false;
            const index = state.profiles.findIndex((profile)=>profile.id === action.payload.id);
            if (index !== -1) {
                state.profiles[index] = action.payload;
            }
            state.currentProfile = action.payload;
            if (state.userProfile?.id === action.payload.id) {
                state.userProfile = action.payload;
            }
            state.successMessage = "Employer profile updated successfully";
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(updateEmployerProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "Failed to update employer profile";
        });
    }
});
const { clearEmployerProfiles, hydrateEmployerProfiles, clearEmployerProfileState, clearCurrentProfile, clearUserProfile, setFilters, clearFilters, setPagination } = employerProfilesSlice.actions;
const __TURBOPACK__default__export__ = employerProfilesSlice;
}),
"[project]/src/Redux/Features/workerProfilesSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clearCurrentProfile",
    ()=>clearCurrentProfile,
    "clearFilters",
    ()=>clearFilters,
    "clearUserProfile",
    ()=>clearUserProfile,
    "clearWorkerProfileState",
    ()=>clearWorkerProfileState,
    "clearWorkerProfiles",
    ()=>clearWorkerProfiles,
    "createWorkerProfile",
    ()=>createWorkerProfile,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchUserWorkerProfile",
    ()=>fetchUserWorkerProfile,
    "fetchWorkerProfileById",
    ()=>fetchWorkerProfileById,
    "fetchWorkerProfiles",
    ()=>fetchWorkerProfiles,
    "hydrateWorkerProfiles",
    ()=>hydrateWorkerProfiles,
    "setFilters",
    ()=>setFilters,
    "setPagination",
    ()=>setPagination,
    "updateWorkerProfile",
    ()=>updateWorkerProfile
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
;
;
const initialState = {
    profiles: [],
    currentProfile: null,
    userProfile: null,
    filters: {
        page: 1,
        limit: 10
    },
    pagination: {
        total: 0,
        page: 1,
        limit: 10,
        total_pages: 0
    },
    loading: false,
    error: null,
    successMessage: null
};
const fetchWorkerProfiles = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("workerProfiles/fetchWorkerProfiles", async (filters, { rejectWithValue })=>{
    try {
        const queryParams = new URLSearchParams();
        // Build query parameters - handle void filters
        if (filters && typeof filters === "object") {
            Object.entries(filters).forEach(([key, value])=>{
                if (value !== undefined && value !== null && value !== "") {
                    queryParams.append(key, value.toString());
                }
            });
        }
        const queryString = queryParams.toString();
        const url = `/workers/profiles/list/${queryString ? `?${queryString}` : ""}`;
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(url);
        return response.data || response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch worker profiles");
    }
});
const fetchWorkerProfileById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("workerProfiles/fetchWorkerProfileById", async (profileId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/workers/profiles/${profileId}/`);
        return response.data || response;
    } catch (error) {
        return rejectWithValue(error?.message || "Failed to fetch worker profile");
    }
});
const fetchUserWorkerProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("workerProfiles/fetchUserWorkerProfile", async (userId, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get("/workers/profiles/list/");
        const profiles = Array.isArray(response) ? response : response.data || [];
        console.log("Fetching user worker profile for userId:", userId);
        console.log("Profiles fetched:", profiles.length);
        // Find the profile that belongs to the current user
        const userProfile = profiles.find((profile)=>{
            if (typeof profile.user === "string") {
                return profile.user === userId;
            } else if (profile.user && typeof profile.user === "object") {
                return profile.user.id === userId;
            }
            return false;
        });
        if (!userProfile) {
            console.log("No worker profile found for user:", userId);
            return null;
        }
        console.log("Found user worker profile:", userProfile);
        return userProfile;
    } catch (error) {
        console.error("Fetch user worker profile error:", error);
        return rejectWithValue(error?.message || "Failed to fetch user worker profile");
    }
});
const createWorkerProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("workerProfiles/createWorkerProfile", async (profileData, { rejectWithValue })=>{
    try {
        console.log("Sending worker profile data:", profileData);
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post("/workers/profiles/", profileData);
        console.log("Worker profile created successfully:", response);
        return response.data || response;
    } catch (error) {
        console.error("Create worker profile error:", error);
        // Handle specific error cases
        if (error.status === 400) {
            // Check for duplicate profile error
            if (error.message && error.message.includes("already exists")) {
                return rejectWithValue("You already have a worker profile. Please refresh the page.");
            }
            // Handle validation errors
            if (error?.data && typeof error.data === "object") {
                const fieldErrors = {};
                let hasFieldErrors = false;
                Object.entries(error.data).forEach(([key, value])=>{
                    if (Array.isArray(value)) {
                        fieldErrors[key] = value;
                        hasFieldErrors = true;
                    } else if (typeof value === "string") {
                        fieldErrors[key] = [
                            value
                        ];
                        hasFieldErrors = true;
                    }
                });
                if (hasFieldErrors) {
                    return rejectWithValue({
                        message: "Please fix the validation errors",
                        fieldErrors: fieldErrors
                    });
                }
            }
        }
        if (error?.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
            return rejectWithValue({
                message: "Validation errors occurred",
                fieldErrors: error.fieldErrors
            });
        }
        return rejectWithValue(error?.message || "Failed to create worker profile");
    }
});
const updateWorkerProfile = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("workerProfiles/updateWorkerProfile", async ({ profileId, data }, { rejectWithValue })=>{
    try {
        const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].put(`/workers/profiles/${profileId}/update/`, data);
        return response.data || response;
    } catch (error) {
        if (error?.fieldErrors && Object.keys(error.fieldErrors).length > 0) {
            return rejectWithValue({
                message: "Validation errors occurred",
                fieldErrors: error.fieldErrors
            });
        }
        return rejectWithValue(error?.message || "Failed to update worker profile");
    }
});
// Worker profiles slice
const workerProfilesSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "workerProfiles",
    initialState,
    reducers: {
        clearWorkerProfiles: (state)=>{
            state.profiles = [];
            state.error = null;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        },
        hydrateWorkerProfiles: (state, action)=>{
            state.profiles = action.payload;
        },
        clearWorkerProfileState: (state)=>{
            state.error = null;
            state.successMessage = null;
        },
        clearCurrentProfile: (state)=>{
            state.currentProfile = null;
        },
        clearUserProfile: (state)=>{
            state.userProfile = null;
        },
        setFilters: (state, action)=>{
            state.filters = {
                ...state.filters,
                ...action.payload
            };
        },
        clearFilters: (state)=>{
            state.filters = {
                page: 1,
                limit: 10
            };
        },
        setPagination: (state, action)=>{
            state.pagination.page = action.payload.page;
            if (action.payload.limit) {
                state.pagination.limit = action.payload.limit;
            }
        }
    },
    extraReducers: (builder)=>{
        // Fetch worker profiles
        builder.addCase(fetchWorkerProfiles.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchWorkerProfiles.fulfilled, (state, action)=>{
            state.loading = false;
            // Handle both direct array response and object with data property
            if (Array.isArray(action.payload)) {
                state.profiles = action.payload;
            } else if (action.payload && typeof action.payload === "object" && "data" in action.payload) {
                state.profiles = action.payload.data || [];
                if (action.payload.pagination) {
                    state.pagination = action.payload.pagination;
                }
            } else {
                state.profiles = [];
            }
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(fetchWorkerProfiles.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Fetch worker profile by ID
        builder.addCase(fetchWorkerProfileById.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchWorkerProfileById.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentProfile = action.payload;
        }).addCase(fetchWorkerProfileById.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Fetch user worker profile
        builder.addCase(fetchUserWorkerProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchUserWorkerProfile.fulfilled, (state, action)=>{
            state.loading = false;
            state.userProfile = action.payload;
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(fetchUserWorkerProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload;
        });
        // Create worker profile
        builder.addCase(createWorkerProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(createWorkerProfile.fulfilled, (state, action)=>{
            state.loading = false;
            state.profiles.unshift(action.payload);
            state.userProfile = action.payload; // Set as user's profile
            state.successMessage = "Worker profile created successfully";
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(createWorkerProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "Failed to create worker profile";
        });
        // Update worker profile
        builder.addCase(updateWorkerProfile.pending, (state)=>{
            state.loading = true;
            state.error = null;
            state.successMessage = null;
        }).addCase(updateWorkerProfile.fulfilled, (state, action)=>{
            state.loading = false;
            const index = state.profiles.findIndex((profile)=>profile.id === action.payload.id);
            if (index !== -1) {
                state.profiles[index] = action.payload;
            }
            state.currentProfile = action.payload;
            // Update user profile if it matches
            if (state.userProfile?.id === action.payload.id) {
                state.userProfile = action.payload;
            }
            state.successMessage = "Worker profile updated successfully";
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
        }).addCase(updateWorkerProfile.rejected, (state, action)=>{
            state.loading = false;
            state.error = typeof action.payload === "string" ? action.payload : "Failed to update worker profile";
        });
    }
});
const { clearWorkerProfiles, hydrateWorkerProfiles, clearWorkerProfileState, clearCurrentProfile, clearUserProfile, setFilters, clearFilters, setPagination } = workerProfilesSlice.actions;
const __TURBOPACK__default__export__ = workerProfilesSlice;
}),
"[project]/src/services/chatApi.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "ChatApi",
    ()=>ChatApi,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/axios.ts [app-ssr] (ecmascript)");
;
class ChatApi {
    static BASE_ENDPOINT = "/messages";
    static CONVERSATIONS_ENDPOINT = "/conversations";
    /**
   * Fetch all conversations for the current user
   * GET /api/conversations/
   */ static async getConversations() {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(this.CONVERSATIONS_ENDPOINT + "/");
            return response.data.results || response.data;
        } catch (error) {
            console.error("Error fetching conversations:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to fetch conversations");
        }
    }
    /**
   * Get or create a conversation with a specific user
   * POST /api/conversations/get-or-create/
   */ static async getOrCreateConversation(participantId) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${this.CONVERSATIONS_ENDPOINT}/get-or-create/`, {
                participant_id: participantId
            });
            return response.data;
        } catch (error) {
            console.error("Error creating conversation:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to create conversation");
        }
    }
    /**
   * Fetch messages for a specific conversation
   * GET /api/conversations/{id}/messages/
   */ static async getMessages(conversationId) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${this.CONVERSATIONS_ENDPOINT}/${conversationId}/messages/`);
            return response.data.results || response.data;
        } catch (error) {
            console.error("Error fetching messages:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to fetch messages");
        }
    }
    /**
   * Send a new message
   * POST /api/messages/
   */ static async sendMessage(data) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(this.BASE_ENDPOINT + "/", data);
            return response.data;
        } catch (error) {
            console.error("Error sending message:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to send message");
        }
    }
    /**
   * Mark messages as read
   * POST /api/conversations/{id}/mark-read/
   */ static async markMessagesAsRead(conversationId) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${this.CONVERSATIONS_ENDPOINT}/${conversationId}/mark-read/`);
        } catch (error) {
            console.error("Error marking messages as read:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to mark messages as read");
        }
    }
    /**
   * Delete a message
   * DELETE /api/messages/{id}/
   */ static async deleteMessage(messageId) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].delete(`${this.BASE_ENDPOINT}/${messageId}/`);
        } catch (error) {
            console.error("Error deleting message:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to delete message");
        }
    }
    /**
   * Archive a conversation
   * POST /api/conversations/{id}/archive/
   */ static async archiveConversation(conversationId) {
        try {
            await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].post(`${this.CONVERSATIONS_ENDPOINT}/${conversationId}/archive/`);
        } catch (error) {
            console.error("Error archiving conversation:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to archive conversation");
        }
    }
    /**
   * Search users to start a conversation
   * GET /api/users/search/?q={query}
   */ static async searchUsers(query) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`/accounts/users/`, {
                params: {
                    search: query
                }
            });
            return response.data.results || response.data;
        } catch (error) {
            console.error("Error searching users:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to search users");
        }
    }
    /**
   * Get conversation by ID
   * GET /api/conversations/{id}/
   */ static async getConversation(conversationId) {
        try {
            const response = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$axios$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].get(`${this.CONVERSATIONS_ENDPOINT}/${conversationId}/`);
            return response.data;
        } catch (error) {
            console.error("Error fetching conversation:", error);
            throw new Error(error.response?.data?.message || error.response?.data?.error || "Failed to fetch conversation");
        }
    }
}
const __TURBOPACK__default__export__ = ChatApi;
}),
"[project]/src/Redux/Features/chatSlice.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addMessage",
    ()=>addMessage,
    "archiveConversation",
    ()=>archiveConversation,
    "clearError",
    ()=>clearError,
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchConversations",
    ()=>fetchConversations,
    "fetchMessages",
    ()=>fetchMessages,
    "getOrCreateConversation",
    ()=>getOrCreateConversation,
    "incrementUnreadCount",
    ()=>incrementUnreadCount,
    "markMessagesAsRead",
    ()=>markMessagesAsRead,
    "resetChatState",
    ()=>resetChatState,
    "sendMessage",
    ()=>sendMessage,
    "setCurrentConversation",
    ()=>setCurrentConversation,
    "setTypingIndicator",
    ()=>setTypingIndicator
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/chatApi.ts [app-ssr] (ecmascript)");
"use client";
;
;
const initialState = {
    conversations: [],
    currentConversation: null,
    messages: {},
    loading: false,
    sending: false,
    error: null,
    typingUsers: {}
};
const fetchConversations = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("chat/fetchConversations", async (_, { rejectWithValue })=>{
    try {
        const conversations = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getConversations();
        return conversations;
    } catch (error) {
        return rejectWithValue(error.message || "Failed to fetch conversations");
    }
});
const getOrCreateConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("chat/getOrCreateConversation", async (participantId, { rejectWithValue })=>{
    try {
        const conversation = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getOrCreateConversation(participantId);
        return conversation;
    } catch (error) {
        return rejectWithValue(error.message || "Failed to create conversation");
    }
});
const fetchMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("chat/fetchMessages", async (conversationId, { rejectWithValue })=>{
    try {
        const messages = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].getMessages(conversationId);
        return {
            conversationId,
            messages
        };
    } catch (error) {
        return rejectWithValue(error.message || "Failed to fetch messages");
    }
});
const sendMessage = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("chat/sendMessage", async (payload, { rejectWithValue })=>{
    try {
        const messageData = {
            conversation_id: payload.conversationId,
            recipient_id: payload.recipientId,
            content: payload.content,
            message_type: payload.messageType || "text",
            attachment_url: payload.attachmentUrl
        };
        const message = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].sendMessage(messageData);
        return message;
    } catch (error) {
        return rejectWithValue(error.message || "Failed to send message");
    }
});
const markMessagesAsRead = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("chat/markMessagesAsRead", async (conversationId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].markMessagesAsRead(conversationId);
        return conversationId;
    } catch (error) {
        return rejectWithValue(error.message || "Failed to mark messages as read");
    }
});
const archiveConversation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createAsyncThunk"])("chat/archiveConversation", async (conversationId, { rejectWithValue })=>{
    try {
        await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$chatApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].archiveConversation(conversationId);
        return conversationId;
    } catch (error) {
        return rejectWithValue(error.message || "Failed to archive conversation");
    }
});
// Slice
const chatSlice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createSlice"])({
    name: "chat",
    initialState,
    reducers: {
        setCurrentConversation: (state, action)=>{
            state.currentConversation = action.payload;
        },
        addMessage: (state, action)=>{
            const message = action.payload;
            const conversationId = message.conversation_id;
            if (!state.messages[conversationId]) {
                state.messages[conversationId] = [];
            }
            // Avoid duplicates
            const exists = state.messages[conversationId].some((m)=>m.id === message.id);
            if (!exists) {
                state.messages[conversationId].push(message);
            }
            // Update last message in conversations
            const conversation = state.conversations.find((c)=>c.id === conversationId);
            if (conversation) {
                conversation.last_message = message;
                conversation.updated_at = message.created_at;
            }
        },
        clearError: (state)=>{
            state.error = null;
        },
        setTypingIndicator: (state, action)=>{
            const { conversationId, userId, isTyping } = action.payload;
            if (!state.typingUsers[conversationId]) {
                state.typingUsers[conversationId] = [];
            }
            if (isTyping) {
                if (!state.typingUsers[conversationId].includes(userId)) {
                    state.typingUsers[conversationId].push(userId);
                }
            } else {
                state.typingUsers[conversationId] = state.typingUsers[conversationId].filter((id)=>id !== userId);
            }
        },
        incrementUnreadCount: (state, action)=>{
            const conversationId = action.payload;
            const conversation = state.conversations.find((c)=>c.id === conversationId);
            if (conversation) {
                conversation.unread_count += 1;
            }
        },
        resetChatState: ()=>initialState
    },
    extraReducers: (builder)=>{
        // Fetch Conversations
        builder.addCase(fetchConversations.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchConversations.fulfilled, (state, action)=>{
            state.loading = false;
            state.conversations = action.payload;
        }).addCase(fetchConversations.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || "Failed to fetch conversations";
        });
        // Get or Create Conversation
        builder.addCase(getOrCreateConversation.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(getOrCreateConversation.fulfilled, (state, action)=>{
            state.loading = false;
            state.currentConversation = action.payload;
            // Add to conversations if not already there
            const exists = state.conversations.some((c)=>c.id === action.payload.id);
            if (!exists) {
                state.conversations.unshift(action.payload);
            }
        }).addCase(getOrCreateConversation.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || "Failed to create conversation";
        });
        // Fetch Messages
        builder.addCase(fetchMessages.pending, (state)=>{
            state.loading = true;
            state.error = null;
        }).addCase(fetchMessages.fulfilled, (state, action)=>{
            state.loading = false;
            const { conversationId, messages } = action.payload;
            state.messages[conversationId] = messages;
        }).addCase(fetchMessages.rejected, (state, action)=>{
            state.loading = false;
            state.error = action.payload || "Failed to fetch messages";
        });
        // Send Message
        builder.addCase(sendMessage.pending, (state)=>{
            state.sending = true;
            state.error = null;
        }).addCase(sendMessage.fulfilled, (state, action)=>{
            state.sending = false;
            const message = action.payload;
            const conversationId = message.conversation_id;
            if (!state.messages[conversationId]) {
                state.messages[conversationId] = [];
            }
            state.messages[conversationId].push(message);
            // Update conversation last message
            const conversation = state.conversations.find((c)=>c.id === conversationId);
            if (conversation) {
                conversation.last_message = message;
                conversation.updated_at = message.created_at;
                // Move to top
                state.conversations = [
                    conversation,
                    ...state.conversations.filter((c)=>c.id !== conversationId)
                ];
            }
        }).addCase(sendMessage.rejected, (state, action)=>{
            state.sending = false;
            state.error = action.payload || "Failed to send message";
        });
        // Mark Messages as Read
        builder.addCase(markMessagesAsRead.fulfilled, (state, action)=>{
            const conversationId = action.payload;
            const conversation = state.conversations.find((c)=>c.id === conversationId);
            if (conversation) {
                conversation.unread_count = 0;
            }
            // Mark all messages as read
            if (state.messages[conversationId]) {
                state.messages[conversationId] = state.messages[conversationId].map((m)=>({
                        ...m,
                        is_read: true
                    }));
            }
        });
        // Archive Conversation
        builder.addCase(archiveConversation.fulfilled, (state, action)=>{
            const conversationId = action.payload;
            state.conversations = state.conversations.filter((c)=>c.id !== conversationId);
            if (state.currentConversation?.id === conversationId) {
                state.currentConversation = null;
            }
        });
    }
});
const { setCurrentConversation, addMessage, clearError, setTypingIndicator, incrementUnreadCount, resetChatState } = chatSlice.actions;
const __TURBOPACK__default__export__ = chatSlice.reducer;
}),
"[project]/src/Redux/middleware/authMiddleware.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authMiddleware",
    ()=>authMiddleware
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/authSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
;
;
;
const authMiddleware = ()=>(next)=>(action)=>{
            if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["isAnyOf"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["logout"])(action)) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("You have been logged out successfully 👋");
            }
            return next(action);
        };
}),
"[project]/src/Redux/Store/Store.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "store",
    ()=>store
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$SearchSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/SearchSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$SidebarSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/SidebarSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/ApplyJobSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$AdminSIdebarSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/AdminSIdebarSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$JobDescriptionSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/JobDescriptionSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/authSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$WorkersSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/WorkersSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/jobs/jobsCategories/jobCategories.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/profileSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/jobsSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobEmployerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/jobs/jobEmployerSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$employerProfilesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/employerProfilesSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$workerProfilesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/workerProfilesSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$chatSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/chatSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$middleware$2f$authMiddleware$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/middleware/authMiddleware.tsx [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
const store = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$reduxjs$2f$toolkit$2f$dist$2f$redux$2d$toolkit$2e$modern$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["configureStore"])({
    reducer: {
        search: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$SearchSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        sidebar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$SidebarSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        applyJob: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        adminSidebar: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$AdminSIdebarSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        moreDescription: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$JobDescriptionSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        auth: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        worker: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$WorkersSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        categories: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobsCategories$2f$jobCategories$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        profile: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$profileSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        jobs: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobsSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        jobEmployer: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$jobs$2f$jobEmployerSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        employerProfiles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$employerProfilesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        workerProfiles: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$workerProfilesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].reducer,
        chat: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$chatSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"]
    },
    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$middleware$2f$authMiddleware$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["authMiddleware"]),
    devTools: ("TURBOPACK compile-time value", "development") !== "production"
});
const __TURBOPACK__default__export__ = store;
}),
"[project]/src/app/providers/Providers.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Providers",
    ()=>Providers
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Store$2f$Store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Store/Store.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/authSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$workerProfilesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/workerProfilesSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function AuthInitializer({ children }) {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // Initialize auth state from sessionStorage on app load
        __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Store$2f$Store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$authSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["loadSession"])());
        // After loading session, check if user has worker profile
        const state = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Store$2f$Store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].getState();
        if (state.auth.isAuthenticated && state.auth.userId) {
            // Fetch user's worker profile if authenticated
            __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Store$2f$Store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"].dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$workerProfilesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchUserWorkerProfile"])(state.auth.userId));
        }
    }, []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
}
function Providers({ children }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Provider"], {
        store: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Store$2f$Store$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["store"],
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(AuthInitializer, {
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                    position: "top-right",
                    richColors: true
                }, void 0, false, {
                    fileName: "[project]/src/app/providers/Providers.tsx",
                    lineNumber: 29,
                    columnNumber: 9
                }, this),
                children
            ]
        }, void 0, true, {
            fileName: "[project]/src/app/providers/Providers.tsx",
            lineNumber: 28,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/app/providers/Providers.tsx",
        lineNumber: 27,
        columnNumber: 5
    }, this);
}
}),
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/src/component/SearchModal/SearchModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$SearchSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/SearchSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const jobList = [
    "Cleaning & House Help",
    "Driving & Delivery",
    "Construction Work",
    "Shop Attendant",
    "Farm Work",
    "Cooking & Kitchen Help",
    "Security Guard",
    "Laundry & Dry Cleaning"
];
// Throttle function
const throttle = (func, delay)=>{
    let lastCall = 0;
    return (...args)=>{
        const now = new Date().getTime();
        if (now - lastCall >= delay) {
            lastCall = now;
            func(...args);
        }
    };
};
const SearchModal = ()=>{
    const [searchTerm, setSearchTerm] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [filteredJobs, setFilteredJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(jobList);
    const throttledSearch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useMemo"])(()=>throttle((term)=>{
            const results = jobList.filter((job)=>job.toLowerCase().includes(term.toLowerCase()));
            setFilteredJobs(results);
        }, 500), []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        throttledSearch(searchTerm);
    }, [
        searchTerm,
        throttledSearch
    ]);
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const onClose = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$SearchSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toggleSearch"])());
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 bg-black/40 z-40 flex items-center justify-center pt-20 px-4 sm:px-0",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white w-full max-w-7xl rounded shadow-lg relative z-50",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex justify-end p-4",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: onClose,
                        className: "text-gray-600 hover:text-red-600 transition",
                        "aria-label": "Close search modal",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                            className: "w-6 h-6"
                        }, void 0, false, {
                            fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                            lineNumber: 69,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                        lineNumber: 64,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                    lineNumber: 63,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-semibold text-gray-800 mb-2",
                            children: "Search Jobs"
                        }, void 0, false, {
                            fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "text",
                            placeholder: "e.g. plumber, writer, designer...",
                            value: searchTerm,
                            onChange: (e)=>setSearchTerm(e.target.value),
                            className: "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600"
                        }, void 0, false, {
                            fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                    lineNumber: 74,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "px-6 pb-6 max-h-72 overflow-y-auto",
                    children: filteredJobs.length > 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "space-y-2 text-sm",
                        children: filteredJobs.map((job, idx)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: "bg-gray-100 p-3 rounded hover:bg-gray-200 transition cursor-pointer",
                                children: job
                            }, idx, false, {
                                fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                                lineNumber: 92,
                                columnNumber: 17
                            }, ("TURBOPACK compile-time value", void 0)))
                    }, void 0, false, {
                        fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                        lineNumber: 90,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "text-gray-500 text-sm",
                        children: "No jobs found."
                    }, void 0, false, {
                        fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                        lineNumber: 101,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                }, void 0, false, {
                    fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
                    lineNumber: 88,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
            lineNumber: 61,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/component/SearchModal/SearchModal.tsx",
        lineNumber: 60,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = SearchModal;
}),
"[project]/src/customLayouts/Preloader/Preloader.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Preloader",
    ()=>Preloader
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
;
;
const Preloader = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 flex flex-col items-center justify-center bg-white z-50 space-y-4",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].svg, {
                className: "w-12 h-12 text-[#800000]",
                viewBox: "0 0 50 50",
                initial: {
                    rotate: 0
                },
                animate: {
                    rotate: 360
                },
                transition: {
                    repeat: Infinity,
                    duration: 1.5,
                    ease: "linear"
                },
                "aria-label": "Loading spinner",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                        className: "opacity-25",
                        cx: "25",
                        cy: "25",
                        r: "20",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        fill: "none"
                    }, void 0, false, {
                        fileName: "[project]/src/customLayouts/Preloader/Preloader.tsx",
                        lineNumber: 13,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].circle, {
                        cx: "25",
                        cy: "25",
                        r: "20",
                        stroke: "currentColor",
                        strokeWidth: "4",
                        strokeLinecap: "round",
                        fill: "none",
                        strokeDasharray: "90 150",
                        strokeDashoffset: "0",
                        animate: {
                            strokeDashoffset: [
                                0,
                                -220
                            ]
                        },
                        transition: {
                            repeat: Infinity,
                            duration: 1.5,
                            ease: "easeInOut"
                        }
                    }, void 0, false, {
                        fileName: "[project]/src/customLayouts/Preloader/Preloader.tsx",
                        lineNumber: 22,
                        columnNumber: 7
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/customLayouts/Preloader/Preloader.tsx",
                lineNumber: 5,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].h1, {
                className: "text-2xl font-bold text-[#800000] tracking-wide select-none",
                initial: {
                    opacity: 0,
                    y: 10
                },
                animate: {
                    opacity: 1,
                    y: 0
                },
                transition: {
                    delay: 0.3,
                    duration: 0.6,
                    ease: "easeOut"
                },
                children: "kazibuddy"
            }, void 0, false, {
                fileName: "[project]/src/customLayouts/Preloader/Preloader.tsx",
                lineNumber: 37,
                columnNumber: 5
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/customLayouts/Preloader/Preloader.tsx",
        lineNumber: 4,
        columnNumber: 3
    }, ("TURBOPACK compile-time value", void 0));
}),
"[project]/src/customLayouts/MainLayoutWrapper/MainLayoutWrapper.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nprogress$2f$nprogress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/nprogress/nprogress.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$SearchModal$2f$SearchModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/component/SearchModal/SearchModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$customLayouts$2f$Preloader$2f$Preloader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/customLayouts/Preloader/Preloader.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const MainLayoutWrapper = ({ children })=>{
    const isShown = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.search.isShown);
    const [loading, setLoading] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(true);
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nprogress$2f$nprogress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].start();
        setLoading(true);
        const timer = setTimeout(()=>{
            setLoading(false);
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$nprogress$2f$nprogress$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].done();
        }, 300);
        return ()=>clearTimeout(timer);
    }, [
        pathname
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        children: [
            loading ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$customLayouts$2f$Preloader$2f$Preloader$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Preloader"], {}, void 0, false, {
                fileName: "[project]/src/customLayouts/MainLayoutWrapper/MainLayoutWrapper.tsx",
                lineNumber: 38,
                columnNumber: 18
            }, ("TURBOPACK compile-time value", void 0)) : children,
            isShown && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$component$2f$SearchModal$2f$SearchModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/src/customLayouts/MainLayoutWrapper/MainLayoutWrapper.tsx",
                lineNumber: 39,
                columnNumber: 19
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Toaster"], {
                position: "top-right",
                richColors: true,
                closeButton: true
            }, void 0, false, {
                fileName: "[project]/src/customLayouts/MainLayoutWrapper/MainLayoutWrapper.tsx",
                lineNumber: 40,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/customLayouts/MainLayoutWrapper/MainLayoutWrapper.tsx",
        lineNumber: 36,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = MainLayoutWrapper;
}),
"[project]/src/Redux/Functions/jobs.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "useApplicationDetails",
    ()=>useApplicationDetails,
    "useApplicationMessages",
    ()=>useApplicationMessages,
    "useJobApplicationForm",
    ()=>useJobApplicationForm,
    "useJobApplicationModal",
    ()=>useJobApplicationModal,
    "useJobApplications",
    ()=>useJobApplications,
    "useMyApplications",
    ()=>useMyApplications,
    "useShowJobModal",
    ()=>useShowJobModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/ApplyJobSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
"use client";
;
;
;
const useJobApplicationModal = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { isModalOpen, formData, errors, isSubmitting, apiError, successMessage } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>({
            isModalOpen: state.applyJob.isModalOpen,
            formData: state.applyJob.formData,
            errors: state.applyJob.errors,
            isSubmitting: state.applyJob.isSubmitting,
            apiError: state.applyJob.apiError,
            successMessage: state.applyJob.successMessage
        }));
    const showJobModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openJobModal"])());
    }, [
        dispatch
    ]);
    const hideJobModal = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeJobModal"])());
    }, [
        dispatch
    ]);
    const updateForm = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((data)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateFormData"])(data));
    }, [
        dispatch
    ]);
    const resetFormData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resetForm"])());
    }, [
        dispatch
    ]);
    const clearFormData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearForm"])());
    }, [
        dispatch
    ]);
    return {
        isModalOpen,
        formData,
        errors,
        isSubmitting,
        apiError,
        successMessage,
        showJobModal,
        hideJobModal,
        updateForm,
        resetFormData,
        clearFormData
    };
};
const useJobApplicationForm = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { formData, errors, isSubmitting } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>({
            formData: state.applyJob.formData,
            errors: state.applyJob.errors,
            isSubmitting: state.applyJob.isSubmitting
        }));
    const setCoverLetterValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setCoverLetter"])(value));
    }, [
        dispatch
    ]);
    const setProposedRateValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setProposedRate"])(value));
    }, [
        dispatch
    ]);
    const setAvailabilityStartValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setAvailabilityStart"])(value));
    }, [
        dispatch
    ]);
    const setWorkerNotesValue = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((value)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setWorkerNotes"])(value));
    }, [
        dispatch
    ]);
    const setErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((errors)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setFormErrors"])(errors));
    }, [
        dispatch
    ]);
    const clearErrors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearFormErrors"])());
    }, [
        dispatch
    ]);
    const submitApplication = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(async (jobId)=>{
        try {
            await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyForJob"])({
                jobId,
                applicationData: formData
            })).unwrap();
            return {
                success: true
            };
        } catch (error) {
            return {
                success: false,
                error: error.message
            };
        }
    }, [
        dispatch,
        formData
    ]);
    return {
        formData,
        errors,
        isSubmitting,
        setCoverLetterValue,
        setProposedRateValue,
        setAvailabilityStartValue,
        setWorkerNotesValue,
        setErrors,
        clearErrors,
        submitApplication
    };
};
const useMyApplications = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { myApplications, isLoading, apiError, pagination } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>({
            myApplications: state.applyJob.myApplications,
            isLoading: state.applyJob.isLoading,
            apiError: state.applyJob.apiError,
            pagination: state.applyJob.pagination
        }));
    const fetchApplications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((params)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchMyApplications"])({
            ...params,
            per_page: 1000
        }));
    }, [
        dispatch
    ]);
    const updateApplicationById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((applicationId, updateData)=>{
        return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateApplication"])({
            applicationId,
            updateData
        }));
    }, [
        dispatch
    ]);
    const deleteApplicationById = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((applicationId)=>{
        return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["deleteApplication"])(applicationId));
    }, [
        dispatch
    ]);
    // Auto-fetch on mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchApplications();
    }, [
        fetchApplications
    ]);
    return {
        applications: myApplications,
        isLoading,
        apiError,
        pagination,
        fetchApplications,
        updateApplicationById,
        deleteApplicationById
    };
};
const useJobApplications = (jobId)=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { jobApplications, isLoading, apiError, stats } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>({
            jobApplications: state.applyJob.jobApplications,
            isLoading: state.applyJob.isLoading,
            apiError: state.applyJob.apiError,
            stats: state.applyJob.stats
        }));
    const fetchApplications = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((params)=>{
        if (jobId) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchJobApplications"])({
                jobId,
                params: {
                    ...params,
                    per_page: 1000
                }
            }));
        }
    }, [
        dispatch,
        jobId
    ]);
    const fetchStats = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (jobId) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchApplicationStats"])(jobId));
        }
    }, [
        dispatch,
        jobId
    ]);
    const updateApplicationStatus = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((applicationId, status)=>{
        return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateApplication"])({
            applicationId,
            updateData: {
                status
            }
        }));
    }, [
        dispatch
    ]);
    // Auto-fetch on mount and when jobId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (jobId) {
            fetchApplications();
            fetchStats();
        }
    }, [
        fetchApplications,
        fetchStats,
        jobId
    ]);
    return {
        applications: jobApplications,
        isLoading,
        apiError,
        stats,
        fetchApplications,
        fetchStats,
        updateApplicationStatus
    };
};
const useApplicationDetails = (applicationId)=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { currentApplication, isLoading, apiError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>({
            currentApplication: state.applyJob.currentApplication,
            isLoading: state.applyJob.isLoading,
            apiError: state.applyJob.apiError
        }));
    const fetchDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        if (applicationId) {
            dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchApplicationDetails"])(applicationId));
        }
    }, [
        dispatch,
        applicationId
    ]);
    const updateDetails = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((updateData)=>{
        if (applicationId) {
            return dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["updateApplication"])({
                applicationId,
                updateData
            }));
        }
    }, [
        dispatch,
        applicationId
    ]);
    // Auto-fetch on mount and when applicationId changes
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        fetchDetails();
    }, [
        fetchDetails
    ]);
    return {
        application: currentApplication,
        isLoading,
        apiError,
        fetchDetails,
        updateDetails
    };
};
const useApplicationMessages = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { successMessage, apiError } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>({
            successMessage: state.applyJob.successMessage,
            apiError: state.applyJob.apiError
        }));
    const setSuccess = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setSuccessMessage"])(message));
    }, [
        dispatch
    ]);
    const setError = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])((message)=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["setApiError"])(message));
    }, [
        dispatch
    ]);
    const clearAllMessages = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useCallback"])(()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clearMessages"])());
    }, [
        dispatch
    ]);
    return {
        successMessage,
        apiError,
        setSuccess,
        setError,
        clearAllMessages
    };
};
const useShowJobModal = ()=>{
    const { isModalOpen, showJobModal, hideJobModal } = useJobApplicationModal();
    return {
        isModalOpen,
        showJobModal,
        hideJobModal
    };
};
}),
"[project]/src/components/JobApplication/JobApplicationForm.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "JobApplicationForm",
    ()=>JobApplicationForm,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Functions$2f$jobs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Functions/jobs.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/services/jobApplicationApi.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const JobApplicationForm = ({ jobDetails, onSuccess, onCancel, className = "" })=>{
    const { formData, errors, isSubmitting, setCoverLetterValue, setProposedRateValue, setAvailabilityStartValue, setWorkerNotesValue, setErrors, clearErrors, submitApplication } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Functions$2f$jobs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useJobApplicationForm"])();
    const { clearAllMessages } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Functions$2f$jobs$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useApplicationMessages"])();
    const [localErrors, setLocalErrors] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])({});
    const [hasApplied, setHasApplied] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    // Clear any previous messages when component mounts
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        clearAllMessages();
    }, [
        clearAllMessages
    ]);
    // Check if user has already applied
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const checkApplicationStatus = async ()=>{
            try {
                const hasUserApplied = await __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].hasUserApplied(jobDetails.id);
                setHasApplied(hasUserApplied);
            } catch (error) {
                console.error("Error checking application status:", error);
            }
        };
        checkApplicationStatus();
    }, [
        jobDetails.id
    ]);
    // Set default availability date to job start date
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (!formData.availability_start && jobDetails.start_date) {
            setAvailabilityStartValue(jobDetails.start_date);
        }
    }, [
        jobDetails.start_date,
        formData.availability_start,
        setAvailabilityStartValue
    ]);
    const validateForm = ()=>{
        const validation = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$services$2f$jobApplicationApi$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].validateApplicationData(formData);
        if (!validation.isValid) {
            setLocalErrors(validation.errors);
            setErrors({
                cover_letter: validation.errors.cover_letter ? [
                    validation.errors.cover_letter
                ] : undefined,
                proposed_rate: validation.errors.proposed_rate ? [
                    validation.errors.proposed_rate
                ] : undefined,
                availability_start: validation.errors.availability_start ? [
                    validation.errors.availability_start
                ] : undefined,
                worker_notes: validation.errors.worker_notes ? [
                    validation.errors.worker_notes
                ] : undefined
            });
            return false;
        }
        setLocalErrors({});
        clearErrors();
        return true;
    };
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (hasApplied) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("You have already applied for this job");
            return;
        }
        if (!validateForm()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Please fix the errors in the form");
            return;
        }
        try {
            const result = await submitApplication(jobDetails.id);
            if (result.success) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Application submitted successfully!");
                onSuccess?.();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result.error || "Failed to submit application");
            }
        } catch (error) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(error.message || "Failed to submit application");
        }
    };
    const handleCancel = ()=>{
        clearErrors();
        setLocalErrors({});
        onCancel?.();
    };
    // Calculate character counts
    const coverLetterCount = formData.cover_letter?.length || 0;
    const workerNotesCount = formData.worker_notes?.length || 0;
    if (hasApplied) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: `bg-blue-50 border border-blue-200 rounded-lg p-6 ${className}`,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex-shrink-0",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                            className: "h-5 w-5 text-blue-400",
                            viewBox: "0 0 20 20",
                            fill: "currentColor",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                fillRule: "evenodd",
                                d: "M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z",
                                clipRule: "evenodd"
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 150,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                            lineNumber: 145,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 144,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-medium text-blue-800",
                                children: "You have already applied for this job"
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 158,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-blue-600 mt-1",
                                children: "Check your applications dashboard for updates on your application status."
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 161,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 157,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                lineNumber: 143,
                columnNumber: 9
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
            lineNumber: 140,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0));
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
        onSubmit: handleSubmit,
        className: `space-y-6 ${className}`,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-gray-50 rounded-lg p-4 border",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-medium text-gray-900 mb-2",
                        children: jobDetails.title
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 175,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Budget:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                        lineNumber: 180,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " KES",
                                    " ",
                                    jobDetails.budget_min,
                                    " - KES ",
                                    jobDetails.budget_max
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 179,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Type:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                        lineNumber: 184,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    jobDetails.job_type.replace("_", " ")
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 183,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium",
                                        children: "Location:"
                                    }, void 0, false, {
                                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                        lineNumber: 188,
                                        columnNumber: 13
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    " ",
                                    jobDetails.location_text
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 187,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 178,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                lineNumber: 174,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "cover_letter",
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Cover Letter *"
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 196,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "cover_letter",
                                rows: 6,
                                value: formData.cover_letter,
                                onChange: (e)=>setCoverLetterValue(e.target.value),
                                className: `w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${errors.cover_letter || localErrors.cover_letter ? "border-red-500 bg-red-50" : "border-gray-300"}`,
                                placeholder: "Explain why you're the perfect fit for this job. Highlight your relevant experience and skills...",
                                maxLength: 2000
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 203,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-1",
                                children: [
                                    coverLetterCount,
                                    "/2000"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 216,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 202,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    (errors.cover_letter || localErrors.cover_letter) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.cover_letter?.[0] || localErrors.cover_letter
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 221,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-gray-500",
                        children: "Minimum 50 characters. Be specific about your experience and why you're interested in this project."
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 225,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                lineNumber: 195,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "proposed_rate",
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: [
                            "Proposed Rate (KES",
                            " ",
                            jobDetails.payment_type === "hourly" ? "per hour" : "total",
                            ") *"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 233,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            type: "number",
                            id: "proposed_rate",
                            min: "1",
                            step: "0.01",
                            value: formData.proposed_rate || "",
                            onChange: (e)=>setProposedRateValue(parseFloat(e.target.value) || 0),
                            className: `w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.proposed_rate || localErrors.proposed_rate ? "border-red-500 bg-red-50" : "border-gray-300"}`,
                            placeholder: "Enter your rate"
                        }, void 0, false, {
                            fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                            lineNumber: 241,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 240,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    (errors.proposed_rate || localErrors.proposed_rate) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.proposed_rate?.[0] || localErrors.proposed_rate
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 259,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-gray-500",
                        children: [
                            "Budget range: KES ",
                            jobDetails.budget_min,
                            " - KES ",
                            jobDetails.budget_max
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 263,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                lineNumber: 232,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "availability_start",
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Available to Start *"
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 270,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        id: "availability_start",
                        value: formData.availability_start,
                        onChange: (e)=>setAvailabilityStartValue(e.target.value),
                        min: new Date().toISOString().split("T")[0],
                        className: `w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 ${errors.availability_start || localErrors.availability_start ? "border-red-500 bg-red-50" : "border-gray-300"}`
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 276,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    (errors.availability_start || localErrors.availability_start) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.availability_start?.[0] || localErrors.availability_start
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 289,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-gray-500",
                        children: [
                            "Project start date:",
                            " ",
                            new Date(jobDetails.start_date).toLocaleDateString()
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 293,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                lineNumber: 269,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                        htmlFor: "worker_notes",
                        className: "block text-sm font-medium text-gray-700 mb-2",
                        children: "Additional Notes"
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 301,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "relative",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                id: "worker_notes",
                                rows: 3,
                                value: formData.worker_notes || "",
                                onChange: (e)=>setWorkerNotesValue(e.target.value),
                                className: `w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 resize-vertical ${errors.worker_notes || localErrors.worker_notes ? "border-red-500 bg-red-50" : "border-gray-300"}`,
                                placeholder: "Any additional information you'd like to share (optional)...",
                                maxLength: 1000
                            }, void 0, false, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 308,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "absolute bottom-2 right-2 text-xs text-gray-500 bg-white px-1",
                                children: [
                                    workerNotesCount,
                                    "/1000"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                lineNumber: 321,
                                columnNumber: 11
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 307,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    (errors.worker_notes || localErrors.worker_notes) && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-sm text-red-600",
                        children: errors.worker_notes?.[0] || localErrors.worker_notes
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 326,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "mt-1 text-xs text-gray-500",
                        children: "Optional: Share any questions or additional details about your approach."
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 330,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                lineNumber: 300,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row gap-3 pt-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "submit",
                        disabled: isSubmitting,
                        className: "flex-1 bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                        children: isSubmitting ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center justify-center",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                    className: "animate-spin -ml-1 mr-2 h-4 w-4 text-white",
                                    fill: "none",
                                    viewBox: "0 0 24 24",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("circle", {
                                            className: "opacity-25",
                                            cx: "12",
                                            cy: "12",
                                            r: "10",
                                            stroke: "currentColor",
                                            strokeWidth: "4"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                            lineNumber: 350,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                                            className: "opacity-75",
                                            fill: "currentColor",
                                            d: "M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                                        }, void 0, false, {
                                            fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                            lineNumber: 358,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                                    lineNumber: 345,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)),
                                "Submitting..."
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                            lineNumber: 344,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)) : "Submit Application"
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 338,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    onCancel && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        type: "button",
                        onClick: handleCancel,
                        disabled: isSubmitting,
                        className: "flex-1 sm:flex-none bg-gray-200 text-gray-700 px-6 py-3 rounded-lg font-medium hover:bg-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors",
                        children: "Cancel"
                    }, void 0, false, {
                        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                        lineNumber: 372,
                        columnNumber: 11
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
                lineNumber: 337,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/JobApplication/JobApplicationForm.tsx",
        lineNumber: 172,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = JobApplicationForm;
}),
"[project]/src/component/ApplyJob/ApplyJob.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/ApplyJobSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JobApplication$2f$JobApplicationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/JobApplication/JobApplicationForm.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
const ApplyJob = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const { isModalOpen, selectedJob } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.applyJob);
    const handleClose = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeJobModal"])());
    };
    const handleSuccess = ()=>{
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeJobModal"])());
    };
    if (!selectedJob) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: isModalOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                opacity: 0
            },
            animate: {
                opacity: 1
            },
            exit: {
                opacity: 0
            },
            className: "fixed inset-0 bg-black/50 z-[60] flex items-center justify-center p-4",
            onClick: handleClose,
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                initial: {
                    scale: 0.9,
                    opacity: 0
                },
                animate: {
                    scale: 1,
                    opacity: 1
                },
                exit: {
                    scale: 0.9,
                    opacity: 0
                },
                transition: {
                    duration: 0.2
                },
                className: "bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-hidden shadow-2xl flex flex-col",
                onClick: (e)=>e.stopPropagation(),
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-200 bg-gray-50 flex-shrink-0",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex-1 mr-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                        className: "text-xl font-semibold text-gray-900",
                                        children: [
                                            "Apply for ",
                                            selectedJob.title
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                                        lineNumber: 47,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-sm text-gray-600 mt-1",
                                        children: "Complete the form below to submit your application."
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                                        lineNumber: 50,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                                lineNumber: 46,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0)),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: handleClose,
                                className: "p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-200 rounded-full transition-colors",
                                "aria-label": "Close modal",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    size: 20
                                }, void 0, false, {
                                    fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                                    lineNumber: 59,
                                    columnNumber: 17
                                }, ("TURBOPACK compile-time value", void 0))
                            }, void 0, false, {
                                fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                                lineNumber: 54,
                                columnNumber: 15
                            }, ("TURBOPACK compile-time value", void 0))
                        ]
                    }, void 0, true, {
                        fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                        lineNumber: 45,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "overflow-y-auto p-6",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$JobApplication$2f$JobApplicationForm$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                            jobDetails: selectedJob,
                            onSuccess: handleSuccess,
                            onCancel: handleClose
                        }, void 0, false, {
                            fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                            lineNumber: 64,
                            columnNumber: 15
                        }, ("TURBOPACK compile-time value", void 0))
                    }, void 0, false, {
                        fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                        lineNumber: 63,
                        columnNumber: 13
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
                lineNumber: 37,
                columnNumber: 11
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
            lineNumber: 30,
            columnNumber: 9
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/component/ApplyJob/ApplyJob.tsx",
        lineNumber: 28,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = ApplyJob;
}),
"[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/map-pin.js [app-ssr] (ecmascript) <export default as MapPin>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/dollar-sign.js [app-ssr] (ecmascript) <export default as DollarSign>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/star.js [app-ssr] (ecmascript) <export default as Star>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$JobDescriptionSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/JobDescriptionSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/ApplyJobSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$workerProfilesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/Redux/Features/workerProfilesSlice.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
;
const JobMoreDescription = ()=>{
    const dispatch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useDispatch"])();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const isOpen = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$JobDescriptionSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectJobDescriptionOpen"]);
    const jobData = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$JobDescriptionSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["selectSelectedJob"]);
    const { isAuthenticated, userId } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.auth);
    const { userProfile } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.workerProfiles);
    // If no job data, return null
    if (!jobData) return null;
    const rawJob = jobData;
    // Format the job data from backend
    const job = {
        id: rawJob.id,
        title: rawJob.title || "Job Title",
        jobType: rawJob.jobType || rawJob.job_type || "Full-Time",
        category: typeof rawJob.category === "string" ? rawJob.category : rawJob.category?.name || "General",
        location: rawJob.location_address || rawJob.location_text || rawJob.location || "Location not specified",
        rate: rawJob.budget_min && rawJob.budget_max ? `KSh ${rawJob.budget_min} - ${rawJob.budget_max}` : "Negotiable",
        description: rawJob.description || "No description available",
        image: rawJob.job_image || rawJob.image || "https://images.pexels.com/photos/4239016/pexels-photo-4239016.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        postedDate: rawJob.created_at ? new Date(rawJob.created_at).toLocaleDateString() : rawJob.postedDate || "Recently",
        urgency: rawJob.is_urgent || rawJob.urgency_level === "urgent" ? "Hiring Immediately" : "Open Position",
        requirements: rawJob.requirements || [
            "Please contact employer for details"
        ],
        benefits: rawJob.benefits || [
            "Competitive compensation",
            "Professional work environment"
        ]
    };
    const handleApply = async (jobTitle, jobId)=>{
        // Check if user is authenticated
        if (!isAuthenticated) {
            // Redirect to login page with return URL
            if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
            ;
            return;
        }
        // Check if user has a worker profile
        if (!userProfile && userId) {
            // Try to fetch user's worker profile
            try {
                const result = await dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$workerProfilesSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchUserWorkerProfile"])(userId)).unwrap();
                if (!result) {
                    // No worker profile exists, redirect to create one
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Please create a worker profile to apply for jobs");
                    router.push("/worker");
                    return;
                }
            } catch (error) {
                // Error fetching profile, redirect to create one
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].info("Please create a worker profile to apply for jobs");
                router.push("/worker");
                return;
            }
        }
        // User has a worker profile, open the application modal
        dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$ApplyJobSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["openJobModal"])());
    };
    if (!isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$components$2f$AnimatePresence$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AnimatePresence"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
            initial: {
                x: "100%"
            },
            animate: {
                x: 0
            },
            exit: {
                x: "100%"
            },
            transition: {
                type: "spring",
                stiffness: 100,
                damping: 20
            },
            className: "fixed top-0 right-0 w-[97%] md:w-[65%] h-screen z-40 overflow-y-auto shadow-2xl bg-white",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "relative w-full h-60 sm:h-72",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                            src: job.image,
                            alt: "Job",
                            className: "w-full h-full object-cover"
                        }, void 0, false, {
                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                            lineNumber: 123,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "absolute inset-0 bg-gradient-to-br from-red-900/80 via-red-800/70 to-gray-900/60",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute top-4 right-4",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>dispatch((0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$Redux$2f$Features$2f$JobDescriptionSlice$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["closeJobDescription"])()),
                                        className: "fixed right-[2rem] p-2 bg-red-400 hover:bg-red-500 rounded-sm backdrop-blur-sm transition-all duration-200",
                                        "aria-label": "Close job description",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                            className: "w-6 h-6 text-white"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 135,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0))
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                        lineNumber: 130,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 129,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "absolute bottom-6 left-6 right-6",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-2 mb-3 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-red-600 text-white text-sm font-medium rounded-full",
                                                    children: job.urgency
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "px-3 py-1 bg-white/20 text-white text-sm font-medium rounded-full backdrop-blur-sm",
                                                    children: job.postedDate
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                    lineNumber: 143,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 139,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                            className: "text-white text-2xl sm:text-4xl font-bold mb-2 leading-tight",
                                            children: job.title
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 147,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0)),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "flex items-center gap-4 text-white/90 flex-wrap",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$map$2d$pin$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__MapPin$3e$__["MapPin"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                            lineNumber: 152,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm",
                                                            children: job.location
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                            lineNumber: 153,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "flex items-center gap-1",
                                                    children: [
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$dollar$2d$sign$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarSign$3e$__["DollarSign"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                            lineNumber: 156,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0)),
                                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                            className: "text-sm font-semibold",
                                                            children: job.rate
                                                        }, void 0, false, {
                                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                            lineNumber: 157,
                                                            columnNumber: 19
                                                        }, ("TURBOPACK compile-time value", void 0))
                                                    ]
                                                }, void 0, true, {
                                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                    lineNumber: 155,
                                                    columnNumber: 17
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 138,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                            lineNumber: 128,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                    lineNumber: 122,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                    initial: {
                        opacity: 0,
                        y: 40
                    },
                    animate: {
                        opacity: 1,
                        y: 0
                    },
                    transition: {
                        delay: 0.1
                    },
                    className: "p-6 sm:p-8",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8",
                            children: [
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                        className: "text-red-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                        lineNumber: 175,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    label: "Job Type",
                                    value: job.jobType
                                },
                                {
                                    icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                        className: "text-red-700"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                        lineNumber: 180,
                                        columnNumber: 23
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    label: "Category",
                                    value: job.category
                                }
                            ].map((item, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                    initial: {
                                        opacity: 0,
                                        y: 20
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0
                                    },
                                    transition: {
                                        delay: 0.15 + i * 0.1
                                    },
                                    className: "bg-gray-50 p-4 rounded-sm border border-gray-200",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-3 mb-2",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "p-2 bg-red-100 rounded-lg",
                                                children: item.icon
                                            }, void 0, false, {
                                                fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                lineNumber: 193,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0)),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-sm text-gray-500 font-medium",
                                                        children: item.label
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                        lineNumber: 195,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0)),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-semibold text-gray-800",
                                                        children: item.value
                                                    }, void 0, false, {
                                                        fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                        lineNumber: 198,
                                                        columnNumber: 21
                                                    }, ("TURBOPACK compile-time value", void 0))
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                lineNumber: 194,
                                                columnNumber: 19
                                            }, ("TURBOPACK compile-time value", void 0))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                        lineNumber: 192,
                                        columnNumber: 17
                                    }, ("TURBOPACK compile-time value", void 0))
                                }, i, false, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 185,
                                    columnNumber: 15
                                }, ("TURBOPACK compile-time value", void 0)))
                        }, void 0, false, {
                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                            lineNumber: 172,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-2xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [
                                        "Job Description",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 w-12 bg-red-600 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 209,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 207,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-gray-600 leading-relaxed text-lg",
                                    children: job.description
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 211,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                            lineNumber: 206,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [
                                        "Requirements",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 w-8 bg-gray-400 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 220,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 218,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "space-y-3",
                                    children: job.requirements.map((req, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                x: -20
                                            },
                                            animate: {
                                                opacity: 1,
                                                x: 0
                                            },
                                            transition: {
                                                delay: 0.1 + index * 0.05
                                            },
                                            className: "flex items-center gap-3 p-3 bg-gray-50 rounded-lg border border-gray-200",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                    className: "w-2 h-2 bg-red-600 rounded-full flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                    lineNumber: 231,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700",
                                                    children: req
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                    lineNumber: 232,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 224,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 222,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                            lineNumber: 217,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mb-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    className: "text-xl font-bold text-gray-800 mb-4 flex items-center gap-2",
                                    children: [
                                        "Benefits & Perks",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "h-1 w-8 bg-gray-400 rounded"
                                        }, void 0, false, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 242,
                                            columnNumber: 15
                                        }, ("TURBOPACK compile-time value", void 0))
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 240,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-1 sm:grid-cols-2 gap-3",
                                    children: job.benefits.map((benefit, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                                            initial: {
                                                opacity: 0,
                                                y: 10
                                            },
                                            animate: {
                                                opacity: 1,
                                                y: 0
                                            },
                                            transition: {
                                                delay: 0.2 + index * 0.05
                                            },
                                            className: "flex items-center gap-3 p-3 bg-gradient-to-r from-red-50 to-gray-50 rounded-lg border border-red-100",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$star$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Star$3e$__["Star"], {
                                                    className: "w-4 h-4 text-red-600 flex-shrink-0"
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                    lineNumber: 253,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0)),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-gray-700 text-sm",
                                                    children: benefit
                                                }, void 0, false, {
                                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                                    lineNumber: 254,
                                                    columnNumber: 19
                                                }, ("TURBOPACK compile-time value", void 0))
                                            ]
                                        }, index, true, {
                                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                            lineNumber: 246,
                                            columnNumber: 17
                                        }, ("TURBOPACK compile-time value", void 0)))
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 244,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                            lineNumber: 239,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["motion"].div, {
                            initial: {
                                opacity: 0
                            },
                            animate: {
                                opacity: 1
                            },
                            transition: {
                                delay: 0.3
                            },
                            className: "flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "flex-1 bg-gradient-to-r from-red-700 to-red-600 hover:from-red-800 hover:to-red-700 text-white font-semibold py-4 px-6 transition-all rounded-sm duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5",
                                    onClick: ()=>handleApply(job.title, job.id),
                                    children: "Apply Now"
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 267,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0)),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    className: "px-6 py-4 border-2 border-gray-300 hover:border-red-600 text-gray-700 hover:text-red-600 font-semibold transition-all duration-200 hover:bg-red-50 rounded-sm",
                                    children: "Save Job"
                                }, void 0, false, {
                                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                    lineNumber: 273,
                                    columnNumber: 13
                                }, ("TURBOPACK compile-time value", void 0))
                            ]
                        }, void 0, true, {
                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                            lineNumber: 261,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0)),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "mt-6 p-4 bg-gradient-to-r from-gray-50 to-red-50 rounded-xl border border-gray-200",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-600 text-center",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("strong", {
                                        children: "Ready to apply?"
                                    }, void 0, false, {
                                        fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                        lineNumber: 281,
                                        columnNumber: 15
                                    }, ("TURBOPACK compile-time value", void 0)),
                                    ' Click "Apply Now" to submit your application or contact us for more information.'
                                ]
                            }, void 0, true, {
                                fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                                lineNumber: 280,
                                columnNumber: 13
                            }, ("TURBOPACK compile-time value", void 0))
                        }, void 0, false, {
                            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                            lineNumber: 279,
                            columnNumber: 11
                        }, ("TURBOPACK compile-time value", void 0))
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
                    lineNumber: 165,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
            lineNumber: 114,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/src/component/common/JobMoreDescription/JobMoreDescription.tsx",
        lineNumber: 113,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
const __TURBOPACK__default__export__ = JobMoreDescription;
}),
"[project]/src/component/Authentication/ProtectedRoute.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-redux/dist/react-redux.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
const allowedUnauthenticatedPaths = [
    "/",
    "/jobs",
    "/jobs/users/applications",
    "/jobs/users/alerts",
    "/auth/login",
    "/auth/signup",
    "/auth/signup/worker",
    "/auth/signup/employer",
    "/auth/verify-email",
    "/auth/forgot"
];
const ProtectedRoute = ({ children })=>{
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const [authorized, setAuthorized] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const { user, isAuthenticated: reduxIsAuthenticated } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$redux$2f$dist$2f$react$2d$redux$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useSelector"])((state)=>state.auth);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        // 1. Check basic authentication
        const sessionIsAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
        const isAuthenticated = reduxIsAuthenticated || sessionIsAuthenticated;
        // Check if the exact path is in the allowed list
        const isAllowed = allowedUnauthenticatedPaths.includes(pathname);
        if (!isAuthenticated && !isAllowed) {
            router.replace(`/auth/login?returnTo=${pathname}`);
            setAuthorized(false);
            return;
        }
        // 2. Role-based Access Control (RBAC)
        if (isAuthenticated && user) {
            const userRole = user.role || user.user_type;
            // Admin Routes Protection
            if (pathname.startsWith("/admin") || pathname.startsWith("/adminpanel")) {
                const isAdmin = user.is_staff || user.is_superuser || userRole === "admin";
                if (!isAdmin) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Unauthorized access. Admin privileges required.");
                    if (userRole === "employer") router.replace("/employer");
                    else if (userRole === "worker") router.replace("/worker");
                    else router.replace("/");
                    setAuthorized(false);
                    return;
                }
            }
            // Employer Routes Protection
            if (pathname.startsWith("/employer")) {
                const isEmployer = userRole === "employer" || userRole === "admin";
                if (!isEmployer) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Unauthorized access. Employer account required.");
                    if (userRole === "worker") router.replace("/worker");
                    else router.replace("/");
                    setAuthorized(false);
                    return;
                }
            }
            // Worker Routes Protection
            if (pathname.startsWith("/worker")) {
                const isWorker = userRole === "worker" || userRole === "admin";
                if (!isWorker) {
                    __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error("Unauthorized access. Worker account required.");
                    if (userRole === "employer") router.replace("/employer");
                    else router.replace("/");
                    setAuthorized(false);
                    return;
                }
            }
        }
        setAuthorized(true);
    }, [
        router,
        pathname,
        user,
        reduxIsAuthenticated
    ]);
    if (authorized === null) {
        return null;
    }
    if (authorized === false) {
        return null;
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: children
    }, void 0, false);
};
const __TURBOPACK__default__export__ = ProtectedRoute;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__7abe5d2d._.js.map