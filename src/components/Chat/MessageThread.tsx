import React, { useRef, useEffect } from "react";
import { Message, User } from "@/types/chat.types";
import { format } from "date-fns";

interface MessageThreadProps {
  messages: Message[];
  currentUserId: string;
  otherParticipant: User | null;
  loading?: boolean;
}

export const MessageThread: React.FC<MessageThreadProps> = ({
  messages,
  currentUserId,
  otherParticipant,
  loading = false,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "auto" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const groupMessagesByDate = (messages: Message[]) => {
    const groups: { [key: string]: Message[] } = {};
    messages.forEach((message) => {
      const date = new Date(message.created_at).toDateString();
      if (!groups[date]) groups[date] = [];
      groups[date].push(message);
    });
    return Object.entries(groups).map(([date, msgs]) => ({
      date: msgs[0].created_at,
      messages: msgs,
    }));
  };

  const formatMessageTime = (date: string) => format(new Date(date), "h:mm a");
  const formatSeparatorDate = (date: string) => {
    const d = new Date(date);
    const today = new Date();
    if (d.toDateString() === today.toDateString()) return "Today";
    return format(d, "EEEE, MMMM d");
  };

  if (loading) {
    return (
      <div className="flex-1 flex items-center justify-center bg-white">
        <div className="w-8 h-8 border-4 border-gray-200 border-t-[#CC1016] rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!otherParticipant) return <div className="flex-1 bg-white" />;

  const groupedMessages = groupMessagesByDate(messages);

  return (
    <div className="flex-1 overflow-y-auto bg-white px-4 py-2">
      {groupedMessages.map((group, i) => (
        <div key={i}>
          <div className="flex items-center justify-center my-6">
            <div className="bg-gray-100 h-px flex-1"></div>
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wide px-4">
              {formatSeparatorDate(group.date)}
            </span>
            <div className="bg-gray-100 h-px flex-1"></div>
          </div>

          {group.messages.map((message, idx) => {
            const isOwn = message.sender_id === currentUserId;
            const showAvatar = !isOwn && (
              idx === group.messages.length - 1 || 
              group.messages[idx + 1]?.sender_id !== message.sender_id
            );

            return (
              <div
                key={message.id}
                className={`flex mb-2 ${isOwn ? "justify-end" : "justify-start"}`}
              >
                {!isOwn && (
                  <div className="w-10 flex-shrink-0 mr-2 flex items-end">
                    {showAvatar ? (
                      <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
                         {otherParticipant.avatar && (
                           <img src={otherParticipant.avatar} alt="" className="w-full h-full object-cover" />
                         )}
                      </div>
                    ) : <div className="w-8" />}
                  </div>
                )}

                <div className={`max-w-[75%] group`}>
                   {!isOwn && idx === 0 || (idx > 0 && group.messages[idx-1].sender_id !== message.sender_id) ? (
                     <p className={`text-xs font-semibold text-gray-900 mb-1 ${isOwn ? "text-right" : "text-left"}`}>
                       {isOwn ? "You" : otherParticipant.full_name} <span className="text-gray-400 font-normal ml-1">{formatMessageTime(message.created_at)}</span>
                     </p>
                   ) : null}
                  
                  <div
                    className={`px-4 py-2.5 rounded-2xl text-[15px] leading-relaxed relative ${
                      isOwn
                        ? "bg-[#CC1016] text-white rounded-tr-none shadow-sm"
                        : "bg-[#F2F4F7] text-gray-900 rounded-tl-none border border-gray-100"
                    }`}
                  >
                    {message.content}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      ))}
      <div ref={messagesEndRef} />
    </div>
  );
};