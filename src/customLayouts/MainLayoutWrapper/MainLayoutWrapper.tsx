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

  // Hide the global/common navbar on admin routes to avoid duplicate headers
  const showGlobalNavbar = !(pathname && pathname.startsWith("/admin"));

  return (
    <div className="flex flex-col min-h-screen w-full">
      {showGlobalNavbar && <Navbar />}

      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default MainLayoutWrapper;