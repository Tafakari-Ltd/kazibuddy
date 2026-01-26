import { useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../Store/Store";
import {
  fetchWorkerProfiles,
  fetchWorkerProfileById,
  fetchUserWorkerProfile,
  createWorkerProfile,
  updateWorkerProfile,
  clearWorkerProfiles,
  clearWorkerProfileState,
  clearCurrentProfile,
  clearUserProfile,
  setFilters,
  clearFilters,
  setPagination,
  loadWorkerProfileFromStorage,
} from "../Features/workerProfilesSlice";
import {
  WorkerProfileFilters,
  CreateWorkerProfileData,
  UpdateWorkerProfileData,
  isWorkerCurrentlyAvailable,
} from "@/types/worker.types";

export const useWorkerProfiles = () => {
  const dispatch = useDispatch<AppDispatch>();
  const {
    profiles,
    currentProfile,
    userProfile,
    loading,
    error,
    successMessage,
    filters,
    pagination,
  } = useSelector((state: RootState) => state.workerProfiles);

  const handleFetchWorkerProfiles = useCallback(
    (filters?: WorkerProfileFilters) => {
      return dispatch(fetchWorkerProfiles(filters));
    },
    [dispatch],
  );

  const handleFetchWorkerProfileById = useCallback(
    (profileId: string) => {
      return dispatch(fetchWorkerProfileById(profileId));
    },
    [dispatch],
  );

  const handleFetchUserWorkerProfile = useCallback(
    (userId: string) => {
      return dispatch(fetchUserWorkerProfile(userId));
    },
    [dispatch],
  );

  const handleLoadWorkerProfileFromStorage = useCallback(() => {
    dispatch(loadWorkerProfileFromStorage());
  }, [dispatch]);

  const handleCreateWorkerProfile = useCallback(
    (profileData: CreateWorkerProfileData) => {
      return dispatch(createWorkerProfile(profileData));
    },
    [dispatch],
  );

  const handleUpdateWorkerProfile = useCallback(
    (profileId: string, data: UpdateWorkerProfileData) => {
      return dispatch(updateWorkerProfile({ profileId, data }));
    },
    [dispatch],
  );

  const handleClearWorkerProfiles = useCallback(() => {
    dispatch(clearWorkerProfiles());
  }, [dispatch]);

  const handleClearState = useCallback(() => {
    dispatch(clearWorkerProfileState());
  }, [dispatch]);

  const handleClearCurrentProfile = useCallback(() => {
    dispatch(clearCurrentProfile());
  }, [dispatch]);

  const handleClearUserProfile = useCallback(() => {
    dispatch(clearUserProfile());
  }, [dispatch]);

  const handleSetFilters = useCallback(
    (newFilters: WorkerProfileFilters) => {
      dispatch(setFilters(newFilters));
    },
    [dispatch],
  );

  const handleClearFilters = useCallback(() => {
    dispatch(clearFilters());
  }, [dispatch]);

  const handleSetPagination = useCallback(
    (page: number, limit?: number) => {
      dispatch(setPagination({ page, limit }));
    },
    [dispatch],
  );

  const getProfileById = useCallback(
    (profileId: string) => {
      return profiles.find((profile) => profile.id === profileId) || null;
    },
    [profiles],
  );

  const hasUserProfile = useCallback(() => {
    return userProfile !== null;
  }, [userProfile]);

  const isProfileVerified = useCallback(
    (profileId?: string) => {
      const profile = profileId ? getProfileById(profileId) : userProfile;
      return profile?.verification_status === "verified";
    },
    [getProfileById, userProfile],
  );

  const isProfilePending = useCallback(
    (profileId?: string) => {
      const profile = profileId ? getProfileById(profileId) : userProfile;
      return profile?.verification_status === "pending";
    },
    [getProfileById, userProfile],
  );

  const isCurrentlyAvailable = useCallback(
    (profileId?: string) => {
      const profile = profileId ? getProfileById(profileId) : userProfile;
      return profile ? isWorkerCurrentlyAvailable(profile) : false;
    },
    [getProfileById, userProfile],
  );

  const getAvailableWorkers = useCallback(() => {
    return profiles.filter((profile) => profile.is_available);
  }, [profiles]);

  const getWorkersByLocation = useCallback(
    (location: string) => {
      return profiles.filter((profile) =>
        profile.location.toLowerCase().includes(location.toLowerCase()),
      );
    },
    [profiles],
  );

  const getWorkersByExperience = useCallback(
    (minExperience: number, maxExperience?: number) => {
      return profiles.filter((profile) => {
        const experience = profile.years_experience;
        return maxExperience
          ? experience >= minExperience && experience <= maxExperience
          : experience >= minExperience;
      });
    },
    [profiles],
  );

  const getWorkersByHourlyRate = useCallback(
    (minRate: number, maxRate?: number) => {
      return profiles.filter((profile) => {
        const rate = parseFloat(profile.hourly_rate);
        return maxRate ? rate >= minRate && rate <= maxRate : rate >= minRate;
      });
    },
    [profiles],
  );

  const searchWorkers = useCallback(
    (query: string) => {
      const lowerQuery = query.toLowerCase();
      return profiles.filter(
        (profile) =>
          profile.bio.toLowerCase().includes(lowerQuery) ||
          profile.location.toLowerCase().includes(lowerQuery) ||
          profile.location_text.toLowerCase().includes(lowerQuery),
      );
    },
    [profiles],
  );

  return {
    profiles,
    currentProfile,
    userProfile,
    loading,
    error,
    successMessage,
    filters,
    pagination,

    handleFetchWorkerProfiles,
    handleFetchWorkerProfileById,
    handleFetchUserWorkerProfile,
    handleLoadWorkerProfileFromStorage,
    handleCreateWorkerProfile,
    handleUpdateWorkerProfile,
    handleClearWorkerProfiles,
    handleClearState,
    handleClearCurrentProfile,
    handleClearUserProfile,
    handleSetFilters,
    handleClearFilters,
    handleSetPagination,

    getProfileById,
    hasUserProfile,
    isProfileVerified,
    isProfilePending,
    isCurrentlyAvailable,
    getAvailableWorkers,
    getWorkersByLocation,
    getWorkersByExperience,
    getWorkersByHourlyRate,
    searchWorkers,
  };
};