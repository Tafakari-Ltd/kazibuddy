"use client";

import { useEffect, useState, Suspense } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store/Store";
import { toast } from "sonner";
import api from "@/lib/axios";

export const dynamic = "force-dynamic";

function GoogleSuccessContent() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const [processing, setProcessing] = useState(true);

    useEffect(() => {
        const handleSuccess = async () => {
            const accessToken = searchParams.get("access_token");
            const refreshToken = searchParams.get("refresh_token");
            const userId = searchParams.get("user_id");
            const userType = searchParams.get("user_type");

            if (!accessToken) {
                toast.error("Authentication failed - no token received");
                router.push("/auth/login");
                return;
            }

            try {
                // Store tokens first
                sessionStorage.setItem("accessToken", accessToken);
                if (refreshToken) sessionStorage.setItem("refreshToken", refreshToken);
                if (userId) sessionStorage.setItem("userId", userId);
                sessionStorage.setItem("isAuthenticated", "true");

                // Set cookie
                document.cookie = `accessToken=${accessToken}; path=/; max-age=86400; SameSite=Lax; Secure`;

                // Fetch user profile to update Redux state
                const userProfile = await api.get("/v1/auth/user/");

                // Store user data
                sessionStorage.setItem("user", JSON.stringify(userProfile));

                toast.success("Logged in successfully!");

                // Small delay to ensure state is updated
                await new Promise(resolve => setTimeout(resolve, 100));

                // Redirect based on user_type
                if (userType === "employer") {
                    router.push("/employer");
                } else if (userType === "worker") {
                    router.push("/worker");
                } else {
                    router.push("/worker");
                }
            } catch (error: any) {
                console.error("Error fetching user profile:", error);
                toast.error("Failed to load user profile");
                router.push("/auth/login");
            } finally {
                setProcessing(false);
            }
        };

        handleSuccess();
    }, [searchParams, router, dispatch]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-maroon border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-700 text-lg">Completing sign in...</p>
            </div>
        </div>
    );
}

export default function GoogleSuccessPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <GoogleSuccessContent />
        </Suspense>
    );
}
