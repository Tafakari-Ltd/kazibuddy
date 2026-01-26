"use client";
import { Provider, useDispatch } from "react-redux";
import React, { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store, AppDispatch } from "@/Redux/Store/Store";
import { loadSession, fetchUserProfile, setAuthLoaded } from "@/Redux/Features/authSlice";
import { fetchUserWorkerProfile } from "@/Redux/Features/workerProfilesSlice";
import { Toaster } from "sonner";

function AuthInitializer({ children }: { children: React.ReactNode }) {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(loadSession());

    const token = sessionStorage.getItem("accessToken");
    if (token) {
      dispatch(fetchUserProfile()).then((action) => {
         if (fetchUserProfile.fulfilled.match(action)) {
            const user = action.payload;
            if (user?.user_type === 'worker') {
               dispatch(fetchUserWorkerProfile(user.id));
            }
         }
         // Signal that auth initialization completed (successful or not)
         dispatch(setAuthLoaded());
      });
    }
    else {
      // No token — mark auth as loaded so ProtectedRoute can proceed.
      dispatch(setAuthLoaded());
    }
  }, [dispatch]);

  return <>{children}</>;
}

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <Provider store={store}>
      <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID || ""}>
        <AuthInitializer>
          <Toaster position="top-right" richColors />
          {children}
        </AuthInitializer>
      </GoogleOAuthProvider>
    </Provider>
  );
}