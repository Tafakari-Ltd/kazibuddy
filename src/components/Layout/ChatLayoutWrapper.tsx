"use client";

import React from "react";
import FloatingChat from "@/components/Chat/FloatingChat";

interface ChatLayoutWrapperProps {
  children: React.ReactNode;
}

const ChatLayoutWrapper: React.FC<ChatLayoutWrapperProps> = ({ children }) => {
  return (
    <>
      {children}
      <FloatingChat />
    </>
  );
};

export default ChatLayoutWrapper;