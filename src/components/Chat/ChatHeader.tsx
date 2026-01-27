import React from "react";
import { User, MoreHorizontal, Video, Phone } from "lucide-react";
import { User as UserType } from "@/types/chat.types";

interface ChatHeaderProps {
  otherParticipant: UserType | null;
  onBack?: () => void;
}

export const ChatHeader: React.FC<ChatHeaderProps> = ({
  otherParticipant,
  onBack,
}) => {
  if (!otherParticipant) return null;

  return (
    <div className="h-16 flex-shrink-0 border-b border-gray-200 bg-white px-4 flex items-center justify-between z-10">
      <div className="flex items-center gap-3 overflow-hidden">
        {onBack && (
          <button
            onClick={onBack}
            className="md:hidden p-2 -ml-2 hover:bg-gray-100 rounded-full text-gray-600"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
        )}

        <div className="relative flex-shrink-0">
          <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-600 font-bold overflow-hidden">
            {otherParticipant.avatar ? (
              <img
                src={otherParticipant.avatar}
                alt={otherParticipant.full_name}
                className="w-full h-full object-cover"
              />
            ) : (
              <User className="w-5 h-5" />
            )}
          </div>
          {otherParticipant.is_online && (
            <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
          )}
        </div>

        <div className="min-w-0 flex-1">
          <h3 className="font-bold text-gray-900 text-base truncate leading-tight">
            {otherParticipant.full_name}
          </h3>
          <p className="text-xs text-gray-500 truncate mt-0.5">
            {otherParticipant.user_type === 'employer' ? 'Employer' : 'Worker'} 
            {otherParticipant.is_online ? ' • Active now' : ''}
          </p>
        </div>
      </div>

      <div className="flex items-center gap-1 flex-shrink-0">
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          title="Video call"
        >
          <Video className="w-5 h-5" />
        </button>
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          title="Phone call"
        >
          <Phone className="w-5 h-5" />
        </button>
        <div className="w-px h-6 bg-gray-200 mx-1"></div>
        <button
          className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-600"
          title="More options"
        >
          <MoreHorizontal className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};