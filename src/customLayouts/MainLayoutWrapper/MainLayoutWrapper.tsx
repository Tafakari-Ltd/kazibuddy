"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Navbar from "@/component/common/Navbar/Navbar";
import Footer from "@/component/common/Footer/Footer";

interface MainLayoutWrapperProps {
  children: React.ReactNode;
}

const MainLayoutWrapper: React.FC<MainLayoutWrapperProps> = ({ children }) => {
  const pathname = usePathname();

  // Check if the current route is an authentication route (login, signup, etc.)
  const isAuthRoute = pathname?.startsWith("/auth");
  
  // Check if the current route is an admin route
  const isAdminRoute = pathname?.startsWith("/admin");

  // Show Navbar only if NOT admin and NOT auth
  const showNavbar = !isAdminRoute && !isAuthRoute;


  const showFooter = !isAuthRoute; 

  return (
    <div className="flex flex-col min-h-screen w-full">
      {showNavbar && <Navbar />}

      <main className="flex-grow w-full">
        {children}
      </main>

      {showFooter && <Footer />}
    </div>
  );
};

export default MainLayoutWrapper;