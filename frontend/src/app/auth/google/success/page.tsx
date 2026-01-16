"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";

export default function GoogleSuccessPage() {
    const router = useRouter();
    const searchParams = useSearchParams();

    useEffect(() => {
        const accessToken = searchParams.get("access_token");
        const refreshToken = searchParams.get("refresh_token");
        const userId = searchParams.get("user_id");

        if (accessToken) {
            // Store tokens
            sessionStorage.setItem("accessToken", accessToken);
            if (refreshToken) sessionStorage.setItem("refreshToken", refreshToken);
            if (userId) sessionStorage.setItem("userId", userId);
            sessionStorage.setItem("isAuthenticated", "true");

            // Set cookie
            document.cookie = `accessToken=${accessToken}; path=/; max-age=86400; SameSite=Lax; Secure`;

            toast.success("Logged in successfully!");

            // Redirect to appropriate dashboard
            // You can add user_type to the query params from backend to redirect correctly
            router.push("/worker");
        } else {
            toast.error("Authentication failed");
            router.push("/auth/login");
        }
    }, [searchParams, router]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
            <div className="text-center">
                <div className="w-16 h-16 border-4 border-maroon border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
                <p className="text-gray-700 text-lg">Completing sign in...</p>
            </div>
        </div>
    );
}
