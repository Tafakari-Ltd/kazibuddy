import React, { useState } from "react";
import { Search, Edit, MoreHorizontal, Filter, Loader2 } from "lucide-react";
import { ConversationListItem, Conversation, User } from "@/types/chat.types";
import { ConversationItem } from "./ConversationItem";
import ChatApi from "@/services/chatApi";
import { toast } from "sonner";

interface ConversationListProps {
  conversations: ConversationListItem[];
  currentConversation: Conversation | null;
  currentUserId: string;
  onSelectConversation: (conversation: Conversation) => void;
  loading?: boolean;
}

export const ConversationList: React.FC<ConversationListProps> = ({
  conversations,
  currentConversation,
  currentUserId,
  onSelectConversation,
  loading = false,
}) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterType, setFilterType] = useState<"all" | "unread">("all");
  const [showNewChatModal, setShowNewChatModal] = useState(false);
  const [userSearchQuery, setUserSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<User[]>([]);
  const [searching, setSearching] = useState(false);
  const [creating, setCreating] = useState(false);

  const filteredConversations = conversations.filter((item) => {
    const matchesSearch = item.otherParticipant.full_name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    
    if (filterType === "unread") {
      return matchesSearch && item.unreadCount > 0;
    }
    return matchesSearch;
  });

  const handleSearchUsers = async (query: string) => {
    if (query.length < 2) {
      setSearchResults([]);
      return;
    }

    setSearching(true);
    try {
      const users = await ChatApi.searchUsers(query);
      const filteredUsers = users.filter((u) => u.id !== currentUserId);
      setSearchResults(filteredUsers);
    } catch (error: any) {
      toast.error(error.message || "Failed to search users");
    } finally {
      setSearching(false);
    }
  };

  const handleCreateConversation = async (user: User) => {
    setCreating(true);
    try {
      const conversation = await ChatApi.getOrCreateConversation(user.id);
      onSelectConversation(conversation);
      setShowNewChatModal(false);
      setUserSearchQuery("");
      setSearchResults([]);
      toast.success(`Chat started with ${user.full_name}`);
    } catch (error: any) {
      toast.error(error.message || "Failed to create conversation");
    } finally {
      setCreating(false);
    }
  };

  return (
    <>
      <div className="flex flex-col h-full">
        <div className="px-4 pt-3 pb-2 border-b border-gray-100">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-base font-semibold text-gray-900">Messaging</h2>
            <div className="flex items-center gap-1">
              <button 
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                title="Settings"
              >
                <MoreHorizontal className="w-5 h-5" />
              </button>
              <button
                onClick={() => setShowNewChatModal(true)}
                className="p-2 text-gray-600 hover:bg-gray-100 rounded-full transition-colors"
                title="New Message"
              >
                <Edit className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="relative mb-3">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search messages"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-1.5 bg-[#EEF3F8] border-none rounded text-sm text-gray-900 placeholder-gray-500 focus:ring-1 focus:ring-[#CC1016] focus:bg-white transition-all"
            />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setFilterType("all")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterType === "all"
                  ? "bg-[#CC1016] text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              All
            </button>
            <button
              onClick={() => setFilterType("unread")}
              className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors ${
                filterType === "unread"
                  ? "bg-[#CC1016] text-white"
                  : "bg-white border border-gray-300 text-gray-600 hover:bg-gray-50"
              }`}
            >
              Unread
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-y-auto">
          {loading ? (
            <div className="flex items-center justify-center h-32">
              <Loader2 className="w-6 h-6 text-[#CC1016] animate-spin" />
            </div>
          ) : filteredConversations.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-64 px-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mb-3">
                <Filter className="w-6 h-6 text-gray-400" />
              </div>
              <h3 className="text-sm font-semibold text-gray-900 mb-1">
                No messages found
              </h3>
              <p className="text-xs text-gray-500">
                {filterType === "unread" 
                  ? "You have no unread messages" 
                  : "Start a conversation to connect with workers or employers"}
              </p>
            </div>
          ) : (
            <div className="divide-y divide-gray-50">
              {filteredConversations.map((item) => (
                <ConversationItem
                  key={item.conversation.id}
                  item={item}
                  isActive={currentConversation?.id === item.conversation.id}
                  onClick={() => onSelectConversation(item.conversation)}
                />
              ))}
            </div>
          )}
        </div>
      </div>

      {showNewChatModal && (
        <div className="fixed inset-0 bg-black/60 flex items-start justify-center pt-20 z-50">
          <div className="bg-white rounded-lg w-full max-w-lg shadow-xl overflow-hidden animate-in fade-in zoom-in duration-200">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200">
              <h3 className="font-semibold text-gray-900">New Message</h3>
              <button
                onClick={() => {
                  setShowNewChatModal(false);
                  setUserSearchQuery("");
                  setSearchResults([]);
                }}
                className="text-gray-500 hover:text-gray-700 p-1 hover:bg-gray-100 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="p-2 border-b border-gray-100">
              <div className="flex items-center gap-2 px-2">
                <span className="text-sm font-medium text-gray-700">To:</span>
                <input
                  type="text"
                  placeholder="Type a name..."
                  value={userSearchQuery}
                  onChange={(e) => {
                    setUserSearchQuery(e.target.value);
                    handleSearchUsers(e.target.value);
                  }}
                  className="flex-1 py-2 text-sm focus:outline-none placeholder-gray-400"
                  autoFocus
                />
              </div>
            </div>

            <div className="h-80 overflow-y-auto">
              {searching ? (
                <div className="flex items-center justify-center h-full">
                  <Loader2 className="w-6 h-6 text-[#CC1016] animate-spin" />
                </div>
              ) : searchResults.length === 0 ? (
                userSearchQuery.length > 0 && (
                  <div className="text-center py-12">
                    <p className="text-sm text-gray-500">No people found</p>
                  </div>
                )
              ) : (
                <div className="py-2">
                  {searchResults.map((user) => (
                    <button
                      key={user.id}
                      onClick={() => handleCreateConversation(user)}
                      disabled={creating}
                      className="w-full flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors text-left"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center text-[#CC1016] font-semibold overflow-hidden">
                        {user.avatar ? (
                          <img src={user.avatar} alt="" className="w-full h-full object-cover" />
                        ) : (
                          user.full_name.charAt(0).toUpperCase()
                        )}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-sm text-gray-900">
                          {user.full_name}
                        </h4>
                        <p className="text-xs text-gray-500 capitalize">
                          {user.user_type}
                        </p>
                      </div>
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};