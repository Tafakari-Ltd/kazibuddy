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

  // Condition: Only show Navbar and Footer if the current path is exactly the homepage "/"
  const isHomepage = pathname === "/";

  return (
    <div className="flex flex-col min-h-screen w-full">
      {/* Show Common Navbar ONLY on Homepage */}
      {isHomepage && <Navbar />}

      <main className="flex-grow w-full">
        {children}
      </main>

      {/* Show Footer ONLY on Homepage */}
      {isHomepage && <Footer />}
    </div>
  );
};

export default MainLayoutWrapper;