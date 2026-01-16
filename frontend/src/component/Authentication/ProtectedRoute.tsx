
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
  "/jobs/users/applications",
  "/jobs/users/alerts",
  "/auth/login",
  "/auth/signup",
  "/auth/signup/worker",    
  "/auth/signup/employer",  
  "/auth/verify-email",
  "/auth/forgot",          
];

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [authorized, setAuthorized] = useState<null | boolean>(null);
  
  const { user, isAuthenticated: reduxIsAuthenticated } = useSelector((state: RootState) => state.auth);

  useEffect(() => {
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

    // Role-based Access Control & Profile Verification
    if (isAuthenticated && user) {
      const userRole = user.role || user.user_type;
      
      
      const isProfileComplete = user.full_name && user.phone_number;
     
      const isVerified = user.is_verified || user.email_verified || user.is_active; 
      
      
      const isSetupPage = searchParams.get("setup") === "1";

     
      if (!isProfileComplete && !user.is_superuser) {
          if (!isSetupPage) {
              if (userRole === "worker") router.replace("/worker?setup=1");
              else if (userRole === "employer") router.replace("/employer?setup=1");
              else router.replace("/worker?setup=1"); // Default
              
              setAuthorized(false);
              return;
          }
         
          setAuthorized(true);
          return;
      }

      
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
           toast.error("Unauthorized access. Employer account required.");
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
           toast.error("Unauthorized access. Worker account required.");
           if (userRole === "employer") router.replace("/employer");
           else router.replace("/");
           
           setAuthorized(false);
           return;
        }
      }
    }

    setAuthorized(true);
  }, [router, pathname, user, reduxIsAuthenticated, searchParams]);

  if (authorized === null) {
    return null; 
  }

  if (authorized === false) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
