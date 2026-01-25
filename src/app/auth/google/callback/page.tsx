"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store/Store";
import { loadSession } from "@/Redux/Features/authSlice"; // Import loadSession
import api from "@/lib/axios";
import { toast } from "sonner";

export const dynamic = "force-dynamic";

export default function GoogleCallbackPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const dispatch = useDispatch<AppDispatch>();
    const [error, setError] = useState<string>("");

    useEffect(() => {
        const handleCallback = async () => {
            const code = searchParams.get("code");
            const errorParam = searchParams.get("error");
            const stateParam = searchParams.get("state");

            if (errorParam) {
                setError("Google authentication was cancelled or failed");
                toast.error("Google authentication failed");
                setTimeout(() => router.push("/auth/login"), 3000);
                return;
            }

            if (!code) {
                setError("No authorization code received");
                toast.error("Authentication failed");
                setTimeout(() => router.push("/auth/login"), 3000);
                return;
            }

            try {
                // 1. PRIMARY CHECK: Read from Session Storage (The most reliable method)
                let userType = sessionStorage.getItem('google_auth_intent');

                // 2. BACKUP CHECK: Extract from state parameter if storage is empty
                if (!userType && stateParam) {
                    try {
                        const stateData = JSON.parse(decodeURIComponent(stateParam));
                        if (stateData.user_type) {
                            userType = stateData.user_type;
                        }
                    } catch (e) {
                        console.warn("Failed to parse state parameter", e);
                    }
                }

                // 3. Construct URL with user_type
                // explicitly append it to the backend call
                let url = `/v1/auth/google/callback/?code=${code}`;
                if (userType) {
                    url += `&user_type=${userType}`;
                }

                const response = await api.get(url);
                const data = response as any;

                // Clear the intent now that it has been used
                sessionStorage.removeItem('google_auth_intent');

                // Check for pending approval or newly created user
                if (data.pending_approval || data.user_created) {
                    toast.success(
                        data.message || "Account created! Pending admin approval.",
                        { duration: 6000 }
                    );
                    router.push("/auth/login");
                    return;
                }

                // Success - user is approved and logged in
                if (data.tokens) {
                    const { access, refresh } = data.tokens;
                    
                    // Store tokens
                    sessionStorage.setItem("accessToken", access);
                    if (refresh) sessionStorage.setItem("refreshToken", refresh);
                    sessionStorage.setItem("userId", data.user_id);
                    sessionStorage.setItem("user", JSON.stringify(data.user_info || {}));
                    sessionStorage.setItem("isAuthenticated", "true");

                    // Set cookie for middleware/server-side checks
                    document.cookie = `accessToken=${access}; path=/; max-age=86400; SameSite=Lax; Secure`;

                    // Sync Redux State so the UI updates immediately
                    dispatch(loadSession());

                    toast.success("Logged in successfully!");

                    // Redirect based on the ACTUAL user type returned from backend
                    // This handles the case where an existing user logs in (ignoring the intent)
                    const finalUserType = data.user_info?.user_type || data.user_type;
                    
                    if (finalUserType === "employer") {
                        router.push("/employer");
                    } else if (finalUserType === "worker") {
                        router.push("/worker");
                    } else if (data.user_info?.is_superuser) {
                        router.push("/admin");
                    } else {
                        router.push("/");
                    }
                } else {
                    throw new Error("No tokens received from server");
                }
            } catch (err: any) {
                console.error("Google callback error:", err);
                const errorMessage = err?.message || "Authentication failed";

                // Handle pending approval error gracefully
                if (errorMessage.toLowerCase().includes("pending") ||
                    errorMessage.toLowerCase().includes("approval")) {
                    toast.success(errorMessage, { duration: 6000 });
                } else {
                    toast.error(errorMessage);
                }

                setError(errorMessage);
                setTimeout(() => router.push("/auth/login"), 3000);
            }
        };

        handleCallback();
    }, [searchParams, router, dispatch]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                {error ? (
                    <>
                        <div className="text-red-600 text-xl mb-4">❌ {error}</div>
                        <p className="text-gray-600">Redirecting to login...</p>
                    </>
                ) : (
                    <>
                        <div className="w-16 h-16 border-4 border-maroon border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                        <p className="text-gray-700 text-lg">Completing Google sign in...</p>
                    </>
                )}
            </div>
        </div>
    );
}