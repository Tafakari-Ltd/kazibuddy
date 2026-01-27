import React from "react";
import { User } from "lucide-react";
import { ConversationListItem } from "@/types/chat.types";
import { format } from "date-fns";

interface ConversationItemProps {
  item: ConversationListItem;
  isActive: boolean;
  onClick: () => void;
}

export const ConversationItem: React.FC<ConversationItemProps> = ({
  item,
  isActive,
  onClick,
}) => {
  const { otherParticipant, lastMessage, unreadCount } = item;

  const getFormattedDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    
    if (date.toDateString() === now.toDateString()) {
      return format(date, "h:mm a");
    }
    
    if (date.getFullYear() === now.getFullYear()) {
      return format(date, "MMM d");
    }
    
    return format(date, "MM/dd/yy");
  };

  return (
    <div
      onClick={onClick}
      className={`relative flex items-center gap-3 p-4 cursor-pointer hover:bg-red-50 transition-colors ${
        isActive ? "bg-[#FEF2F2] border-l-[3px] border-[#CC1016]" : "border-l-[3px] border-transparent"
      }`}
    >
      <div className="relative flex-shrink-0">
        <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold text-lg overflow-hidden border border-gray-100">
          {otherParticipant.avatar ? (
            <img
              src={otherParticipant.avatar}
              alt={otherParticipant.full_name}
              className="w-full h-full object-cover"
            />
          ) : (
            <User className="w-6 h-6" />
          )}
        </div>
        {otherParticipant.is_online && (
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 rounded-full border-2 border-white"></div>
        )}
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-0.5">
          <h3 className={`text-[15px] truncate ${
            unreadCount > 0 ? "font-bold text-black" : "font-semibold text-gray-900"
          }`}>
            {otherParticipant.full_name}
          </h3>
          {lastMessage && (
            <span className={`text-xs flex-shrink-0 ml-2 ${
              unreadCount > 0 ? "font-semibold text-black" : "text-gray-500"
            }`}>
              {getFormattedDate(lastMessage.created_at)}
            </span>
          )}
        </div>

        <div className="flex items-center justify-between">
          <p className={`text-sm truncate pr-2 ${
            unreadCount > 0 ? "font-semibold text-black" : "text-gray-500"
          }`}>
            {lastMessage?.sender_id === otherParticipant.id ? "" : "You: "}
            {lastMessage?.content || "No messages yet"}
          </p>
          {unreadCount > 0 && (
            <div className="flex-shrink-0 bg-[#CC1016] text-white text-[11px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-1">
              {unreadCount > 99 ? "99" : unreadCount}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};