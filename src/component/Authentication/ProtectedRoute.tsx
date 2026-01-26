"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useSelector } from "react-redux";
import { RootState } from "@/Redux/Store/Store";
import { toast } from "sonner";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const allowedUnauthenticatedPaths = [
  "/",
  "/jobs",
  "/workers", // Explicitly allow the public workers listing
  "/auth/login",
  "/auth/signup",
  "/auth/signup/worker",
  "/auth/signup/employer",
  "/auth/verify-email",
  "/auth/forgot",
  "/auth/google/success",
  "/auth/google/callback",
];

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [authorized, setAuthorized] = useState<null | boolean>(null);

  const { user, isAuthenticated: reduxIsAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
    const sessionIsAuthenticated = sessionStorage.getItem("isAuthenticated") === "true";
    const isAuthenticated = reduxIsAuthenticated || sessionIsAuthenticated;

    // 1. Public Path Check
    const isExactPublicPath = allowedUnauthenticatedPaths.includes(pathname);
    
    // Dynamic Public Routes:
   
    const isPublicJobPage = pathname.startsWith("/jobs/") && 
                            !pathname.includes("/users") && 
                            !pathname.includes("/create");

   
    const isPublicWorkerProfile = pathname.startsWith("/workers/");

    const isAllowed = isExactPublicPath || isPublicJobPage || isPublicWorkerProfile;

    if (!isAuthenticated && !isAllowed) {
      router.replace(`/auth/login?returnTo=${encodeURIComponent(pathname)}`);
      setAuthorized(false);
      return;
    }

    // 2. Authenticated Checks
    if (isAuthenticated && user) {
      const userRole = user.role || user.user_type;
      
     
      const isProfileComplete = !!user.full_name; 
      
      const isVerified = user.is_verified || user.email_verified || user.is_active;
      const isSetupPage = searchParams.get("setup") === "1";

      // Profile Completion Check
      if (!isProfileComplete && !user.is_superuser) {
        if (!isSetupPage) {
          if (userRole === "worker") router.replace("/worker?setup=1");
          else if (userRole === "employer") router.replace("/employer?setup=1");
          else router.replace("/?setup=1"); // Generic fallback
          setAuthorized(false);
          return;
        }
        setAuthorized(true);
        return;
      }

      // Verification Check
      if (!isVerified && !user.is_superuser && !isSetupPage) {
        toast.info("Account pending approval. Please wait for verification.");
        if (userRole === "worker") router.replace("/worker?setup=1");
        else if (userRole === "employer") router.replace("/employer?setup=1");
        setAuthorized(false);
        return;
      }

      // Admin Routes Protection
      if (pathname.startsWith("/admin") || pathname.startsWith("/adminpanel")) {
        const isAdmin = user.is_staff || user.is_superuser || userRole === "admin";
        if (!isAdmin) {
          toast.error("Unauthorized access. Admin privileges required.");
          router.replace(userRole === "employer" ? "/employer" : "/worker");
          setAuthorized(false);
          return;
        }
      }

      // Employer Routes Protection
      if (pathname.startsWith("/employer")) {
        const isEmployer = userRole === "employer" || userRole === "admin";
        if (!isEmployer) {
          toast.error("Unauthorized access. Employer account required.");
          router.replace(userRole === "worker" ? "/worker" : "/");
          setAuthorized(false);
          return;
        }
      }


      if (pathname === "/worker" || (pathname.startsWith("/worker/") && !pathname.startsWith("/workers"))) {
        const isWorker = userRole === "worker" || userRole === "admin";
        if (!isWorker) {
          toast.error("Unauthorized access. Worker account required.");
          router.replace(userRole === "employer" ? "/employer" : "/");
          setAuthorized(false);
          return;
        }
      }
    }

    setAuthorized(true);
  }, [router, pathname, user, reduxIsAuthenticated, searchParams]);

  if (authorized === null || authorized === false) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;