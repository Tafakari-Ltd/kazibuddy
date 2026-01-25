// src/components/Chat/FloatingChat.tsx
"use client";

import React, { useState, useEffect, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "sonner";
import {
  MessageCircle,
  Search,
  Send,
  Phone,
  Video,
  Info,
  X,
  Minimize2,
  Maximize2,
  User,
  CheckCheck,
  Check,
  Loader2,
} from "lucide-react";

import { RootState, AppDispatch } from "@/Redux/Store/Store";
import {
  fetchConversations,
  fetchMessages,
  sendMessage,
  setCurrentConversation,
  markMessagesAsRead,
} from "@/Redux/Features/chatSlice";
import { Conversation, Message, User as UserType } from "@/types/chat.types";

const FloatingChat: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Redux state
  const { user, userId, isAuthenticated } = useSelector(
    (state: RootState) => state.auth || {}
  );
  const currentUserId = userId || user?.user_id || user?.id;

  const { conversations, currentConversation, messages, loading, sending } =
    useSelector((state: RootState) => state.chat);

  // Local state
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  // Fetch conversations on mount
  useEffect(() => {
    if (isAuthenticated && currentUserId && isOpen) {
      dispatch(fetchConversations());
    }
  }, [isAuthenticated, currentUserId, isOpen, dispatch]);

  // Fetch messages when conversation changes
  useEffect(() => {
    if (currentConversation) {
      dispatch(fetchMessages(currentConversation.id));
      dispatch(markMessagesAsRead(currentConversation.id));
    }
  }, [currentConversation, dispatch]);

  // Auto-scroll to bottom
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, currentConversation]);

  // Filter conversations
  const filteredConversations = conversations.filter((conv) => {
    const otherParticipant = conv.participants.find(
      (p) => p.id !== currentUserId
    );
    return otherParticipant?.full_name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
  });

  // Calculate total unread
  const totalUnread = conversations.reduce(
    (sum, conv) => sum + (conv.unread_count || 0),
    0
  );

  const handleSelectConversation = (conversation: Conversation) => {
    dispatch(setCurrentConversation(conversation));
  };

  const handleSendMessage = async () => {
    if (!message.trim() || !currentConversation || sending) return;

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
          content: message.trim(),
          messageType: "text",
        })
      ).unwrap();
      setMessage("");
    } catch (error: any) {
      toast.error(error || "Failed to send message");
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const formatTime = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInMs = now.getTime() - date.getTime();
    const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
    const diffInHours = Math.floor(diffInMs / (1000 * 60 * 60));

    if (diffInMinutes < 1) return "Just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInHours < 24) return `${diffInHours}h ago`;
    return date.toLocaleDateString();
  };

  const formatMessageTime = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  };

  const currentMessages = currentConversation
    ? messages[currentConversation.id] || []
    : [];

  const otherParticipant = currentConversation
    ? currentConversation.participants.find((p) => p.id !== currentUserId) ||
      null
    : null;

  if (!isAuthenticated) return null;

  return (
    <div className="fixed bottom-0 right-6 z-50 font-sans">
      {/* Chat Button (when closed) */}
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="bg-red-600 text-white p-4 rounded-full shadow-xl hover:bg-red-700 transition-all mb-4 relative animate-pulse hover:animate-none"
        >
          <MessageCircle className="w-6 h-6" />
          {totalUnread > 0 && (
            <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center animate-bounce">
              {totalUnread > 99 ? "99+" : totalUnread}
            </span>
          )}
        </button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <div
          className={`bg-white rounded-t-xl shadow-2xl border border-gray-200 flex flex-col transition-all duration-300 ${
            isMinimized ? "h-14" : "h-[600px]"
          } w-[380px] mb-0`}
        >
          {/* Header */}
          <div className="bg-gradient-to-r from-red-600 to-red-700 text-white p-4 flex items-center justify-between rounded-t-xl">
            <div className="flex items-center gap-3">
              <div className="relative">
                <MessageCircle className="w-5 h-5" />
                {totalUnread > 0 && (
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-green-400 rounded-full animate-ping"></div>
                )}
              </div>
              <h3 className="font-semibold">
                Messages {totalUnread > 0 && `(${totalUnread})`}
              </h3>
            </div>
            <div className="flex items-center gap-1">
              <button
                onClick={() => setIsMinimized(!isMinimized)}
                className="p-2 hover:bg-red-500 rounded-lg transition-colors"
                title={isMinimized ? "Maximize" : "Minimize"}
              >
                {isMinimized ? (
                  <Maximize2 className="w-4 h-4" />
                ) : (
                  <Minimize2 className="w-4 h-4" />
                )}
              </button>
              <button
                onClick={() => {
                  setIsOpen(false);
                  dispatch(setCurrentConversation(null));
                }}
                className="p-2 hover:bg-red-500 rounded-lg transition-colors"
                title="Close"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Content (hidden when minimized) */}
          {!isMinimized && (
            <div className="flex-1 flex overflow-hidden">
              {/* Conversations List */}
              <div
                className={`${
                  currentConversation ? "hidden" : "flex"
                } flex-col w-full border-r border-gray-200 bg-white`}
              >
                {/* Search */}
                <div className="p-3 border-b border-gray-200 bg-gray-50">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search conversations..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="w-full pl-9 pr-3 py-2 bg-white border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>

                {/* Conversation Items */}
                <div className="flex-1 overflow-y-auto">
                  {loading ? (
                    <div className="flex items-center justify-center h-full">
                      <Loader2 className="w-6 h-6 text-red-600 animate-spin" />
                    </div>
                  ) : filteredConversations.length === 0 ? (
                    <div className="flex flex-col items-center justify-center h-full p-6 text-center">
                      <MessageCircle className="w-12 h-12 text-gray-300 mb-3" />
                      <h4 className="text-sm font-semibold text-gray-700 mb-1">
                        {searchQuery
                          ? "No conversations found"
                          : "No messages yet"}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {searchQuery
                          ? "Try a different search"
                          : "Start chatting with employers or workers"}
                      </p>
                    </div>
                  ) : (
                    filteredConversations.map((conv) => {
                      const participant = conv.participants.find(
                        (p) => p.id !== currentUserId
                      );
                      if (!participant) return null;

                      return (
                        <button
                          key={conv.id}
                          onClick={() => handleSelectConversation(conv)}
                          className="w-full p-3 flex items-start gap-3 hover:bg-gray-50 transition-colors border-b border-gray-100 text-left"
                        >
                          <div className="relative flex-shrink-0">
                            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-semibold shadow-sm">
                              {participant.avatar ? (
                                <img
                                  src={participant.avatar}
                                  alt=""
                                  className="w-full h-full rounded-full object-cover"
                                />
                              ) : (
                                <User className="w-5 h-5" />
                              )}
                            </div>
                            {participant.is_online && (
                              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between mb-1">
                              <h4 className="font-semibold text-sm text-gray-900 truncate">
                                {participant.full_name}
                              </h4>
                              {conv.last_message && (
                                <span className="text-xs text-gray-500 flex-shrink-0 ml-2">
                                  {formatTime(conv.last_message.created_at)}
                                </span>
                              )}
                            </div>
                            <div className="flex items-center justify-between">
                              <p
                                className={`text-sm truncate ${
                                  conv.unread_count > 0
                                    ? "font-medium text-gray-900"
                                    : "text-gray-600"
                                }`}
                              >
                                {conv.last_message?.content ||
                                  "No messages yet"}
                              </p>
                              {conv.unread_count > 0 && (
                                <span className="bg-red-600 text-white text-xs font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1 flex-shrink-0 ml-2">
                                  {conv.unread_count > 99
                                    ? "99+"
                                    : conv.unread_count}
                                </span>
                              )}
                            </div>
                            <span
                              className={`text-xs px-2 py-0.5 rounded-full mt-1 inline-block ${
                                participant.user_type === "employer"
                                  ? "bg-purple-100 text-purple-700"
                                  : "bg-blue-100 text-blue-700"
                              }`}
                            >
                              {participant.user_type === "employer"
                                ? "Employer"
                                : "Worker"}
                            </span>
                          </div>
                        </button>
                      );
                    })
                  )}
                </div>
              </div>

              {/* Chat Area */}
              {currentConversation && (
                <div className="flex-1 flex flex-col bg-white">
                  {/* Chat Header */}
                  <div className="p-3 border-b border-gray-200 flex items-center justify-between bg-gray-50">
                    <div className="flex items-center gap-3">
                      <button
                        onClick={() =>
                          dispatch(setCurrentConversation(null))
                        }
                        className="p-1 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Back to conversations"
                      >
                        <X className="w-4 h-4" />
                      </button>
                      {otherParticipant && (
                        <>
                          <div className="relative">
                            <div className="w-9 h-9 rounded-full bg-gradient-to-br from-red-500 to-red-600 flex items-center justify-center text-white font-semibold shadow-sm">
                              {otherParticipant.avatar ? (
                                <img
                                  src={otherParticipant.avatar}
                                  alt=""
                                  className="w-full h-full rounded-full object-cover"
                                />
                              ) : (
                                <User className="w-4 h-4" />
                              )}
                            </div>
                            {otherParticipant.is_online && (
                              <div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 rounded-full border-2 border-white"></div>
                            )}
                          </div>
                          <div>
                            <h4 className="font-semibold text-sm text-gray-900">
                              {otherParticipant.full_name}
                            </h4>
                            <p className="text-xs text-green-600">
                              {otherParticipant.is_online
                                ? "Active now"
                                : "Offline"}
                            </p>
                          </div>
                        </>
                      )}
                    </div>
                    <div className="flex items-center gap-1">
                      <button
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Voice call"
                      >
                        <Phone className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Video call"
                      >
                        <Video className="w-4 h-4 text-gray-600" />
                      </button>
                      <button
                        className="p-2 hover:bg-gray-200 rounded-lg transition-colors"
                        title="Conversation info"
                      >
                        <Info className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
                    {loading && currentMessages.length === 0 ? (
                      <div className="flex items-center justify-center h-full">
                        <Loader2 className="w-6 h-6 text-red-600 animate-spin" />
                      </div>
                    ) : currentMessages.length === 0 ? (
                      <div className="flex flex-col items-center justify-center h-full text-center">
                        <MessageCircle className="w-12 h-12 text-gray-300 mb-3" />
                        <h4 className="text-sm font-semibold text-gray-700 mb-1">
                          No messages yet
                        </h4>
                        <p className="text-xs text-gray-500">
                          Start the conversation with{" "}
                          {otherParticipant?.full_name}
                        </p>
                      </div>
                    ) : (
                      <>
                        {currentMessages.map((msg) => {
                          const isOwn = msg.sender_id === currentUserId;
                          return (
                            <div
                              key={msg.id}
                              className={`flex ${
                                isOwn ? "justify-end" : "justify-start"
                              }`}
                            >
                              <div className="max-w-[75%]">
                                <div
                                  className={`rounded-2xl px-4 py-2 shadow-sm ${
                                    isOwn
                                      ? "bg-red-600 text-white rounded-br-sm"
                                      : "bg-white text-gray-900 border border-gray-200 rounded-bl-sm"
                                  }`}
                                >
                                  <p className="text-sm leading-relaxed break-words">
                                    {msg.content}
                                  </p>
                                </div>
                                <div
                                  className={`flex items-center gap-1 mt-1 px-2 ${
                                    isOwn ? "justify-end" : "justify-start"
                                  }`}
                                >
                                  <span className="text-xs text-gray-500">
                                    {formatMessageTime(msg.created_at)}
                                  </span>
                                  {isOwn && (
                                    <div className="text-gray-500">
                                      {msg.is_read ? (
                                        <CheckCheck className="w-3 h-3 text-blue-500" />
                                      ) : (
                                        <Check className="w-3 h-3" />
                                      )}
                                    </div>
                                  )}
                                </div>
                              </div>
                            </div>
                          );
                        })}
                        <div ref={messagesEndRef} />
                      </>
                    )}
                  </div>

                  {/* Message Input */}
                  <div className="p-3 border-t border-gray-200 bg-white">
                    <div className="flex items-end gap-2">
                      <input
                        type="text"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder="Type a message..."
                        disabled={sending}
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent disabled:bg-gray-100 disabled:cursor-not-allowed"
                      />
                      <button
                        onClick={handleSendMessage}
                        disabled={!message.trim() || sending}
                        className={`p-2 rounded-full transition-all ${
                          message.trim() && !sending
                            ? "bg-red-600 text-white hover:bg-red-700 shadow-sm"
                            : "bg-gray-200 text-gray-400 cursor-not-allowed"
                        }`}
                        title="Send message"
                      >
                        {sending ? (
                          <Loader2 className="w-5 h-5 animate-spin" />
                        ) : (
                          <Send className="w-5 h-5" />
                        )}
                      </button>
                    </div>
                    <p className="text-xs text-gray-500 mt-2 text-center">
                      Press <span className="font-semibold">Enter</span> to
                      send
                    </p>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default FloatingChat;