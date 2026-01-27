import React from "react";
import Footer from "@/component/common/Footer/Footer";
import Navbar from "@/component/common/Navbar/Navbar";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen w-full">
      <Navbar />
      
     
      <div className="flex-grow pt-[40px]">
        {children}
      </div>
      
      <Footer />
    </div>
  );
};

export default layout;