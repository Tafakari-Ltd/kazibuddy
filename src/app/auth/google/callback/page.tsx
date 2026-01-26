"use client";

import { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useDispatch } from "react-redux";
import { AppDispatch } from "@/Redux/Store/Store";
import { loadSession } from "@/Redux/Features/authSlice";
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
            
            const userType = sessionStorage.getItem('google_auth_intent');

            if (errorParam) {
                setError("Google authentication failed");
                setTimeout(() => router.push("/auth/login"), 3000);
                return;
            }

            if (!code) {
                setError("No authorization code received");
                setTimeout(() => router.push("/auth/login"), 3000);
                return;
            }

            try {
                let url = `/v1/auth/google/callback/?code=${code}`;
                if (userType) {
                    url += `&user_type=${userType}`;
                }

                const response = await api.get(url);
                const data = response as any;
                
                sessionStorage.removeItem('google_auth_intent');

                if (data.pending_approval || data.user_created) {
                    toast.success(data.message || "Account created! Pending approval.");
                    router.push("/auth/login");
                    return;
                }

                if (data.tokens) {
                    const { access, refresh } = data.tokens;
                    
                    sessionStorage.setItem("accessToken", access);
                    if (refresh) sessionStorage.setItem("refreshToken", refresh);
                    sessionStorage.setItem("userId", data.user_id);
                    sessionStorage.setItem("user", JSON.stringify(data.user_info || {}));
                    sessionStorage.setItem("isAuthenticated", "true");

                    document.cookie = `accessToken=${access}; path=/; max-age=86400; SameSite=Lax; Secure`;

                    dispatch(loadSession());
                    toast.success("Logged in successfully!");

                    const type = data.user_info?.user_type || data.user_type || userType;
                    
                    if (type === "employer") router.push("/employer");
                    else if (type === "worker") router.push("/worker");
                    else if (data.user_info?.is_superuser) router.push("/admin");
                    else router.push("/"); 
                }
            } catch (err: any) {
                console.error("Callback error:", err);
                setError(err?.message || "Authentication failed");
                setTimeout(() => router.push("/auth/login"), 3000);
            }
        };

        handleCallback();
    }, [searchParams, router, dispatch]);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
             {error ? (
                <div className="text-red-600 text-xl">❌ {error}</div>
             ) : (
                <div className="w-16 h-16 border-4 border-maroon border-t-transparent rounded-full animate-spin"></div>
             )}
        </div>
    );
}