"use client";
import { Provider } from "react-redux";
import React, { useEffect } from "react";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { store } from "@/Redux/Store/Store";
import { loadSession } from "@/Redux/Features/authSlice";
import { fetchUserWorkerProfile } from "@/Redux/Features/workerProfilesSlice";
import { Toaster } from "sonner";

function AuthInitializer({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    store.dispatch(loadSession());

    const state = store.getState();
    if (state.auth.isAuthenticated && state.auth.userId) {
      store.dispatch(fetchUserWorkerProfile(state.auth.userId));
    }
  }, []);

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