"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";
import { toast } from "sonner";
import { 
  Users, Search, Filter, Mail, Phone, MapPin, DollarSign, Clock, Badge,
  CheckCircle, XCircle, AlertCircle, Star, TrendingUp, Briefcase, Award,
  ChevronDown, X, RefreshCw, User, Calendar
} from "lucide-react";

import { RootState } from "@/Redux/Store/Store";
import { useWorkerProfiles } from "@/Redux/Functions/useWorkerProfiles";
import { 
  WorkerProfile, WorkerProfileFilters, LOCATION_OPTIONS,
  VerificationStatus, isWorkerCurrentlyAvailable
} from "@/types/worker.types";

const WorkersListingPage = () => {
  const router = useRouter();
  const authState = useSelector((state: RootState) => state.auth || {});
  const { user, isAuthenticated } = authState;
  const {
    profiles, loading, error, handleFetchWorkerProfiles, handleClearState,
  } = useWorkerProfiles();

  const [isClient, setIsClient] = useState(false);
  const [showContactModal, setShowContactModal] = useState(false);
  const [selectedWorker, setSelectedWorker] = useState<WorkerProfile | null>(null);
  const [showFilters, setShowFilters] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [filters, setFilters] = useState<WorkerProfileFilters>({});

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient) handleFetchWorkerProfiles();
  }, [isClient]);

  useEffect(() => {
    if (error) {
      toast.error(typeof error === "string" ? error : "Failed to load workers");
      handleClearState();
    }
  }, [error]);

  const getFilteredProfiles = () => {
    let filtered = [...profiles];
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(p => {
        const userObj = typeof p.user === "string" ? undefined : p.user;
        return (
          (userObj?.full_name && userObj.full_name.toLowerCase().includes(query)) || // Search by Name
          p.bio.toLowerCase().includes(query) ||
          p.location.toLowerCase().includes(query) ||
          p.location_text.toLowerCase().includes(query)
        );
      });
    }
    if (filters.location) filtered = filtered.filter(p => p.location === filters.location);
    if (filters.min_experience !== undefined) filtered = filtered.filter(p => p.years_experience >= filters.min_experience!);
    if (filters.max_hourly_rate) filtered = filtered.filter(p => parseFloat(p.hourly_rate) <= parseFloat(filters.max_hourly_rate!));
    if (filters.is_available !== undefined) filtered = filtered.filter(p => p.is_available === filters.is_available);
    if (filters.verification_status) filtered = filtered.filter(p => p.verification_status === filters.verification_status);
    return filtered;
  };

  const filteredProfiles = getFilteredProfiles();

  const stats = {
    total: profiles.length,
    available: profiles.filter(p => p.is_available).length,
    verified: profiles.filter(p => p.verification_status === "verified").length,
    cities: new Set(profiles.map(p => p.location)).size,
    avgRate: profiles.length > 0 ? (profiles.reduce((sum, p) => sum + parseFloat(p.hourly_rate), 0) / profiles.length).toFixed(2) : "0",
    avgExperience: profiles.length > 0 ? (profiles.reduce((sum, p) => sum + p.years_experience, 0) / profiles.length).toFixed(1) : "0"
  };

  const handleFilterChange = (newFilters: Partial<WorkerProfileFilters>) => {
    setFilters({ ...filters, ...newFilters });
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery("");
  };

  const handleViewProfile = (profileId: string) => {
    router.push(`/workers/${profileId}`);
  };

  const handleContactWorker = (profile: WorkerProfile) => {
    if (!isAuthenticated) {
      toast.error("Please log in to contact workers");
      router.push("/auth/login");
      return;
    }
    setSelectedWorker(profile);
    setShowContactModal(true);
  };

  const handleSendEmail = () => {
    const email = typeof selectedWorker?.user === "string" ? undefined : selectedWorker?.user?.email;
    window.location.href = `mailto:${email || "worker@example.com"}?subject=Job Opportunity via KaziBuddy`;
    setShowContactModal(false);
  };

  const hasActiveFilters = Object.keys(filters).some(key => filters[key as keyof WorkerProfileFilters] !== undefined);

  const getVerificationIcon = (status: VerificationStatus) => {
    switch (status) {
      case VerificationStatus.VERIFIED: return <CheckCircle className="w-4 h-4 text-green-600" />;
      case VerificationStatus.REJECTED: return <XCircle className="w-4 h-4 text-red-600" />;
      case VerificationStatus.SUSPENDED: return <AlertCircle className="w-4 h-4 text-gray-600" />;
      default: return <Clock className="w-4 h-4 text-yellow-600" />;
    }
  };

  const getVerificationColor = (status: VerificationStatus) => {
    switch (status) {
      case VerificationStatus.VERIFIED: return "bg-green-50 text-green-700 border-green-200";
      case VerificationStatus.REJECTED: return "bg-red-50 text-red-700 border-red-200";
      case VerificationStatus.SUSPENDED: return "bg-gray-50 text-gray-700 border-gray-200";
      default: return "bg-yellow-50 text-yellow-700 border-yellow-200";
    }
  };

  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
        <div className="container mx-auto px-4 py-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-gray-200 rounded-lg w-1/3"></div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[...Array(4)].map((_, i) => (<div key={i} className="h-32 bg-gray-200 rounded-xl"></div>))}
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Narrowed selected user's info for modal display (keeps updates reactive)
  const selectedUser = selectedWorker ? (typeof selectedWorker.user === "string" ? undefined : selectedWorker.user) : undefined;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-red-50">
      {/* Hero Section */}
      <div className="bg-white border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <div className="inline-flex items-center gap-2 bg-red-50 text-red-700 px-3 py-1 rounded-full mb-2 border border-red-100">
                <Award className="w-3.5 h-3.5" />
                <span className="text-xs font-medium">Verified Professionals</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
                Find Your Perfect Skilled Worker
              </h1>
              <p className="text-gray-600">
                Connect with verified, experienced professionals ready to help.
              </p>
            </div>
            <div className="md:w-96 flex-shrink-0">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search by name, skills, or location..."
                  className="w-full pl-10 pr-4 py-2.5 rounded-lg text-gray-900 border border-gray-300 focus:ring-2 focus:ring-red-500 focus:border-transparent focus:outline-none"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="">
        <div className="container mx-auto px-4 py-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
            {[
              { icon: Users, value: stats.total, label: "Total Workers", iconColor: "text-red-600", borderColor: "border-red-100" },
              { icon: CheckCircle, value: stats.available, label: "Available Now", iconColor: "text-green-600", borderColor: "border-green-100" },
              { icon: Award, value: stats.verified, label: "Verified", iconColor: "text-blue-600", borderColor: "border-blue-100" },
              { icon: MapPin, value: stats.cities, label: "Cities", iconColor: "text-purple-600", borderColor: "border-purple-100" },
              { icon: DollarSign, value: `$${stats.avgRate}`, label: "Avg. Rate/hr", iconColor: "text-orange-600", borderColor: "border-orange-100" },
              { icon: TrendingUp, value: stats.avgExperience, label: "Avg. Years Exp.", iconColor: "text-indigo-600", borderColor: "border-indigo-100" }
            ].map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl shadow-sm border ${stat.borderColor} hover:shadow-md transition-all duration-300 p-5 group`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <Icon className={`w-6 h-6 ${stat.iconColor}`} />
                  </div>
                  <div className="text-center">
                    <div className={`text-2xl font-bold ${stat.iconColor} mb-1`}>
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content  */}
      <div className="container mx-auto px-4 py-12">
        {/* Filters */}
        <div className="mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <button
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
                    showFilters ? "bg-red-100 text-red-800 shadow-sm" : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  <Filter className="w-4 h-4" />Advanced Filters
                  <ChevronDown className={`w-4 h-4 transition-transform ${showFilters ? "rotate-180" : ""}`} />
                </button>
                {hasActiveFilters && (
                  <button onClick={clearFilters} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors">
                    <X className="w-4 h-4" />Clear All
                  </button>
                )}
              </div>
              <div className="flex items-center gap-3">
                <span className="text-sm text-gray-600">
                  Showing <span className="font-semibold text-gray-900">{filteredProfiles.length}</span> of <span className="font-semibold text-gray-900">{stats.total}</span> workers
                </span>
                <button onClick={() => handleFetchWorkerProfiles()} disabled={loading} className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors disabled:opacity-50">
                  <RefreshCw className={`w-4 h-4 ${loading ? "animate-spin" : ""}`} />Refresh
                </button>
              </div>
            </div>

            {showFilters && (
              <div className="pt-4 border-t border-gray-200">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <MapPin className="w-4 h-4 inline mr-1" />Location
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" value={filters.location || ""} onChange={(e) => handleFilterChange({ location: e.target.value || undefined })}>
                      <option value="">All Locations</option>
                      {LOCATION_OPTIONS.map((loc) => (<option key={loc} value={loc}>{loc}</option>))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Briefcase className="w-4 h-4 inline mr-1" />Min. Experience
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" value={filters.min_experience || ""} onChange={(e) => handleFilterChange({ min_experience: e.target.value ? parseInt(e.target.value) : undefined })}>
                      <option value="">Any Experience</option>
                      <option value="0">Entry Level</option>
                      <option value="1">1+ Years</option>
                      <option value="3">3+ Years</option>
                      <option value="5">5+ Years</option>
                      <option value="10">10+ Years</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <DollarSign className="w-4 h-4 inline mr-1" />Max Rate/hr
                    </label>
                    <input type="number" step="0.50" min="0" placeholder="100.00" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" value={filters.max_hourly_rate || ""} onChange={(e) => handleFilterChange({ max_hourly_rate: e.target.value || undefined })} />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Clock className="w-4 h-4 inline mr-1" />Availability
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" value={filters.is_available !== undefined ? filters.is_available.toString() : ""} onChange={(e) => handleFilterChange({ is_available: e.target.value ? e.target.value === "true" : undefined })}>
                      <option value="">All Workers</option>
                      <option value="true">Available Only</option>
                      <option value="false">Not Available</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      <Award className="w-4 h-4 inline mr-1" />Verification
                    </label>
                    <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500" value={filters.verification_status || ""} onChange={(e) => handleFilterChange({ verification_status: (e.target.value as VerificationStatus) || undefined })}>
                      <option value="">All Statuses</option>
                      <option value={VerificationStatus.VERIFIED}>Verified</option>
                      <option value={VerificationStatus.PENDING}>Pending</option>
                      <option value={VerificationStatus.REJECTED}>Rejected</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Workers Grid */}
        {loading ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="bg-white rounded-xl p-6 shadow-sm border border-gray-200 animate-pulse">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-16 h-16 bg-gray-200 rounded-full"></div>
                  <div className="flex-1">
                    <div className="h-5 bg-gray-200 rounded mb-2 w-3/4"></div>
                    <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : filteredProfiles.length === 0 ? (
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
            <Users className="w-16 h-16 text-gray-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-gray-900 mb-2">No Workers Found</h3>
            <p className="text-gray-600 mb-6">
              {hasActiveFilters ? "Try adjusting your filters to see more results." : "There are no workers available at the moment."}
            </p>
            {hasActiveFilters && (
              <button onClick={clearFilters} className="px-6 py-3 bg-red-600 text-white rounded-lg hover:bg-red-700 transition-colors font-medium">
                Clear All Filters
              </button>
            )}
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProfiles.map((profile) => {
              const isCurrentlyAvailable = isWorkerCurrentlyAvailable(profile);
              const completionColor = profile.profile_completion_percentage >= 80 ? "text-green-600" : profile.profile_completion_percentage >= 60 ? "text-yellow-600" : "text-red-600";
              
              // Narrow user union and extract name safely
              const userObj = typeof profile.user === "string" ? undefined : profile.user;
              const displayName = userObj?.full_name || userObj?.username || `Worker #${profile.id.substring(0, 6)}`;
              const profileImage = profile.profile_photo || null;

              return (
                <div key={profile.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-xl hover:border-red-200 transition-all duration-300 overflow-hidden group">
                  <div className="p-6 border-b border-gray-100 bg-gradient-to-br from-gray-50 to-white">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center gap-3">
                        {profileImage ? (
                          <img 
                            src={typeof profileImage === 'string' ? profileImage : URL.createObjectURL(profileImage)} 
                            alt={displayName}
                            className="w-14 h-14 rounded-full object-cover shadow-lg border-2 border-white"
                          />
                        ) : (
                          <div className="w-14 h-14 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center shadow-lg text-white font-bold text-xl">
                            {displayName.charAt(0).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <h3 className="text-lg font-bold text-gray-900 group-hover:text-red-700 transition-colors">
                            {displayName}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <span className={`inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium border ${getVerificationColor(profile.verification_status)}`}>
                              {getVerificationIcon(profile.verification_status)}
                              {profile.verification_status.charAt(0).toUpperCase() + profile.verification_status.slice(1)}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                        profile.is_available && isCurrentlyAvailable ? "bg-green-100 text-green-700 border border-green-200" :
                        profile.is_available ? "bg-blue-100 text-blue-700 border border-blue-200" : "bg-gray-100 text-gray-700 border border-gray-200"
                      }`}>
                        {profile.is_available && isCurrentlyAvailable ? "Available Now" : profile.is_available ? "Available" : "Unavailable"}
                      </div>
                    </div>
                    <div className="flex items-center justify-between text-xs">
                      <span className="text-gray-600">Profile Completion</span>
                      <span className={`font-semibold ${completionColor}`}>{profile.profile_completion_percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5 mt-1">
                      <div className={`h-1.5 rounded-full transition-all ${profile.profile_completion_percentage >= 80 ? "bg-green-500" : profile.profile_completion_percentage >= 60 ? "bg-yellow-500" : "bg-red-500"}`} style={{ width: `${profile.profile_completion_percentage}%` }} />
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-700 text-sm mb-4 line-clamp-3 leading-relaxed">{profile.bio || "No bio available"}</p>
                    <div className="grid grid-cols-2 gap-3 mb-4">
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-8 h-8 bg-blue-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <MapPin className="w-4 h-4 text-blue-600" />
                        </div>
                        <div className="min-w-0">
                          <div className="text-xs text-gray-500">Location</div>
                          <div className="font-medium text-gray-900 truncate">{profile.location}</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-8 h-8 bg-green-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <DollarSign className="w-4 h-4 text-green-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Rate</div>
                          <div className="font-medium text-gray-900">${profile.hourly_rate}/hr</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-8 h-8 bg-purple-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Briefcase className="w-4 h-4 text-purple-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Experience</div>
                          <div className="font-medium text-gray-900">{profile.years_experience} years</div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <div className="w-8 h-8 bg-orange-50 rounded-lg flex items-center justify-center flex-shrink-0">
                          <Calendar className="w-4 h-4 text-orange-600" />
                        </div>
                        <div>
                          <div className="text-xs text-gray-500">Joined</div>
                          <div className="font-medium text-gray-900">
                            {new Date(profile.created_at).toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex gap-2 pt-4 border-t border-gray-100">
                      <button onClick={() => handleViewProfile(profile.id)} className="flex-1 px-4 py-2.5 bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-lg font-medium transition-colors text-sm">
                        View Profile
                      </button>
                      {profile.is_available && (
                        <button onClick={() => handleContactWorker(profile)} className="flex-1 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-lg font-medium transition-all shadow-sm hover:shadow-md text-sm">
                          Contact
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

  {/* Contact Modal */}
  {showContactModal && selectedWorker && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-2xl w-full max-w-md shadow-2xl">
            <div className="p-6 border-b border-gray-200">
              <h3 className="text-2xl font-bold text-gray-900">Contact Worker</h3>
            </div>
            <div className="p-6">
              <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-red-500 to-red-700 rounded-full flex items-center justify-center text-white font-bold text-2xl">
                  {(selectedUser?.full_name || "W").charAt(0).toUpperCase()}
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {selectedUser?.full_name || `Worker #${selectedWorker.id.substring(0, 6)}`}
                  </h4>
                  <p className="text-sm text-gray-600">{selectedWorker.location}</p>
                </div>
              </div>
              <div className="bg-gray-50 rounded-xl p-4 space-y-3 mb-6">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Experience:</span>
                  <span className="font-semibold text-gray-900">{selectedWorker.years_experience} years</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Hourly Rate:</span>
                  <span className="font-semibold text-gray-900">${selectedWorker.hourly_rate}/hr</span>
                </div>
                <div className="flex justify-between text-sm">
                  <span className="text-gray-600">Availability:</span>
                  <span className={`font-semibold ${selectedWorker.is_available ? "text-green-600" : "text-gray-600"}`}>
                    {selectedWorker.is_available ? "Available" : "Not Available"}
                  </span>
                </div>
              </div>
              <div className="space-y-3">
                <button onClick={handleSendEmail} className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white py-3 px-4 rounded-xl font-medium transition-all shadow-sm hover:shadow-md">
                  <Mail className="w-5 h-5" />Send Email
                </button>
                <button onClick={() => toast.info("Phone contact feature coming soon!")} className="w-full flex items-center justify-center gap-2 bg-gray-100 text-gray-800 py-3 px-4 rounded-xl hover:bg-gray-200 transition-colors font-medium">
                  <Phone className="w-5 h-5" />Request Phone Call
                </button>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200">
              <button onClick={() => setShowContactModal(false)} className="w-full text-gray-600 hover:text-gray-800 transition-colors font-medium">
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WorkersListingPage;