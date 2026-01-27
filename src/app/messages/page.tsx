"use client";

import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { Home, MessageSquare } from "lucide-react";

import { RootState, AppDispatch } from "@/Redux/Store/Store";
import {
  fetchConversations,
  fetchMessages,
  sendMessage,
  setCurrentConversation,
  markMessagesAsRead,
} from "@/Redux/Features/chatSlice";
import {
  ConversationList,
  ChatHeader,
  MessageThread,
  MessageInput,
} from "@/components/Chat";
import { Conversation, ConversationListItem, User } from "@/types/chat.types";

const MessagesPage = () => {
  const router = useRouter();
  const dispatch = useDispatch<AppDispatch>();

  const { user, userId, isAuthenticated } = useSelector(
    (state: RootState) => state.auth || {}
  );
  const currentUserId = userId || user?.user_id || user?.id;

  const { conversations, currentConversation, messages, loading, sending } =
    useSelector((state: RootState) => state.chat);

  const [isClient, setIsClient] = useState(false);
  const [showMobileChat, setShowMobileChat] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (isClient && !isAuthenticated) {
      toast.error("Please log in to access messages");
      router.push("/auth/login");
    }
  }, [isClient, isAuthenticated, router]);

  useEffect(() => {
    if (isClient && isAuthenticated && currentUserId) {
      dispatch(fetchConversations());
    }
  }, [isClient, isAuthenticated, currentUserId, dispatch]);

  useEffect(() => {
    if (currentConversation) {
      dispatch(fetchMessages(currentConversation.id));
      dispatch(markMessagesAsRead(currentConversation.id));
    }
  }, [currentConversation, dispatch]);

  const conversationListItems: ConversationListItem[] = conversations.map(
    (conversation) => {
      const otherParticipant = conversation.participants.find(
        (p) => p.id !== currentUserId
      ) || {
        id: "unknown",
        full_name: "Unknown User",
        email: "",
      } as User;

      return {
        conversation,
        otherParticipant,
        lastMessage: conversation.last_message,
        unreadCount: conversation.unread_count,
      };
    }
  );

  const handleSelectConversation = (conversation: Conversation) => {
    dispatch(setCurrentConversation(conversation));
    setShowMobileChat(true);
  };

  const handleSendMessage = async (content: string) => {
    if (!currentConversation) return;

    const recipientId = currentConversation.participants.find(
      (p) => p.id !== currentUserId
    )?.id;

    if (!recipientId) {
      toast.error("Recipient not found");
      return;
    }

    try {
      await dispatch(
        sendMessage({
          conversationId: currentConversation.id,
          recipientId,
          content,
          messageType: "text",
        })
      ).unwrap();
    } catch (error: any) {
      toast.error(error || "Failed to send message");
    }
  };

  const handleBackToList = () => {
    setShowMobileChat(false);
  };

  const currentMessages = currentConversation
    ? messages[currentConversation.id] || []
    : [];

  const otherParticipant = currentConversation
    ? currentConversation.participants.find((p) => p.id !== currentUserId) ||
      null
    : null;

  if (!isClient || !isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#F8FAFC] flex items-center justify-center">
        <div className="text-center">
          <div className="w-8 h-8 border-4 border-[#CC1016] border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600 font-medium">Loading messages...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="h-screen flex flex-col bg-[#F3F2EF]">
      <div className="bg-white border-b border-gray-200 px-4 py-2 sticky top-0 z-10 shadow-sm">
        <div className="container mx-auto max-w-7xl flex items-center justify-between">
          <div className="flex items-center gap-2 text-gray-700 font-semibold">
            <MessageSquare className="w-5 h-5 text-[#CC1016]" />
            <span>Messaging</span>
          </div>
          <button
            onClick={() => router.push("/")}
            className="flex items-center gap-2 text-gray-500 hover:text-gray-900 transition-colors text-sm font-medium px-3 py-1.5 rounded-md hover:bg-gray-100"
          >
            <Home className="w-4 h-4" />
            <span className="hidden sm:inline">Back to Home</span>
          </button>
        </div>
      </div>

      <div className="flex-1 container mx-auto max-w-7xl p-0 md:p-4 overflow-hidden h-[calc(100vh-57px)]">
        <div className="bg-white md:rounded-lg shadow-sm border border-gray-300 flex h-full overflow-hidden">
          <div
            className={`w-full md:w-[320px] lg:w-[380px] flex-shrink-0 flex flex-col border-r border-gray-200 bg-white z-0 ${
              showMobileChat ? "hidden md:flex" : "flex"
            }`}
          >
            <ConversationList
              conversations={conversationListItems}
              currentConversation={currentConversation}
              currentUserId={currentUserId}
              onSelectConversation={handleSelectConversation}
              loading={loading}
            />
          </div>

          <div
            className={`flex-1 flex flex-col bg-white min-w-0 ${
              !showMobileChat ? "hidden md:flex" : "flex"
            }`}
          >
            {currentConversation ? (
              <>
                <ChatHeader
                  otherParticipant={otherParticipant}
                  onBack={handleBackToList}
                />
                <MessageThread
                  messages={currentMessages}
                  currentUserId={currentUserId}
                  otherParticipant={otherParticipant}
                  loading={loading && !!currentConversation}
                />
                <MessageInput
                  onSendMessage={handleSendMessage}
                  sending={sending}
                  disabled={!currentConversation}
                />
              </>
            ) : (
              <div className="flex-1 flex flex-col items-center justify-center bg-[#F9FAFB] p-8 text-center">
                <div className="w-32 h-32 bg-red-50 rounded-full flex items-center justify-center mb-6">
                  <MessageSquare className="w-16 h-16 text-[#CC1016] opacity-50" />
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mb-2">
                  Select a conversation
                </h2>
                <p className="text-gray-500 max-w-sm">
                  Choose a contact from the list on the left to start chatting about job opportunities.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessagesPage;