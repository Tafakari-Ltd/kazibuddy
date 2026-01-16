"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store/Store";
import api from "@/lib/axios";
import { toast } from "sonner";

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
                // Extract user_type from state parameter
                let userType = null;
                if (stateParam) {
                    try {
                        const stateData = JSON.parse(decodeURIComponent(stateParam));
                        userType = stateData.user_type;
                    } catch (e) {
                        console.warn("Failed to parse state parameter", e);
                    }
                }

                // Send the authorization code and user_type to your Django backend
                let url = `/v1/auth/google/callback/?code=${code}`;
                if (userType) {
                    url += `&user_type=${userType}`;
                }

                const response = await api.get(url);

                const data = response as any;

                // Check if pending approval
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

                    // Set cookie
                    document.cookie = `accessToken=${access}; path=/; max-age=86400; SameSite=Lax; Secure`;

                    toast.success("Logged in successfully!");

                    // Redirect based on user type
                    const userType = data.user_info?.user_type || data.user_type;
                    if (userType === "employer") {
                        router.push("/employer");
                    } else if (userType === "worker") {
                        router.push("/worker");
                    } else {
                        router.push("/");
                    }
                } else {
                    throw new Error("No tokens received from server");
                }
            } catch (err: any) {
                console.error("Google callback error:", err);
                const errorMessage = err?.message || "Authentication failed";

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
