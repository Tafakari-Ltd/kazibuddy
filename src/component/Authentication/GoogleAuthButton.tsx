import React from "react";
import { FcGoogle } from "react-icons/fc";
import { initiateGoogleLogin } from "@/lib/googleOAuth";

interface GoogleAuthButtonProps {
  userType?: "worker" | "employer";
  label?: string;
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ userType, label = "Continue with Google" }) => {
  const handleClick = () => {
    // 1. Save the intent before redirecting to Google
    if (userType) {
      sessionStorage.setItem("google_auth_intent", userType);
    } else {
      // Clear any stale intent if on a generic login page
      sessionStorage.removeItem("google_auth_intent");
    }

    // 2. Initiate the redirect
    initiateGoogleLogin(userType);
  };

  return (
    <button
      type="button"
      onClick={handleClick}
      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon mb-4"
    >
      <FcGoogle className="w-5 h-5" />
      {label}
    </button>
  );
};