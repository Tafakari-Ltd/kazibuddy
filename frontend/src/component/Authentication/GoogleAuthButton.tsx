import React from "react";
import { useGoogleLogin } from "@react-oauth/google";
import { useDispatch } from "react-redux";
import { loginWithGoogle } from "@/Redux/Features/authSlice";
import { AppDispatch } from "@/Redux/Store/Store";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";

interface GoogleAuthButtonProps {
  userType?: "worker" | "employer";
  label?: string;
}

export const GoogleAuthButton: React.FC<GoogleAuthButtonProps> = ({ userType, label = "Continue with Google" }) => {
  const dispatch = useDispatch<AppDispatch>();
  const router = useRouter();

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const result = await dispatch(loginWithGoogle({ accessToken: tokenResponse.access_token })).unwrap();
        
        toast.success("Logged in successfully!");
        
        // Handle redirection
        if (result.userCreated) {
             if (userType === "employer") {
                 router.push("/employer?setup=1");
             } else {
                 router.push("/worker?setup=1");
             }
        } else {
            if (result.user?.user_type === "employer") {
                router.push("/employer");
            } else if (result.user?.user_type === "worker") {
                router.push("/worker");
            } else if (result.user?.is_superuser) {
                router.push("/admin");
            } else {
                 // If user type is undefined, check if we can infer it or redirect to home
                 if (userType === "worker") {
                    router.push("/worker");
                 } else if (userType === "employer") {
                    router.push("/employer");
                 } else {
                    router.push("/");
                 }
            }
        }

      } catch (error: any) {
        toast.error(typeof error === "string" ? error : "Google login failed");
      }
    },
    onError: () => {
      toast.error("Google login failed");
    },
  });

  return (
    <button
      type="button"
      onClick={() => login()}
      className="w-full flex items-center justify-center gap-2 bg-white border border-gray-300 text-gray-700 font-medium py-2.5 px-4 rounded-lg hover:bg-gray-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-maroon mb-4"
    >
      <FcGoogle className="w-5 h-5" />
      {label}
    </button>
  );
};
