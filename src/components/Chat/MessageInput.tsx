import React, { useState, useRef, KeyboardEvent } from "react";
import { Image as ImageIcon, Paperclip, Smile } from "lucide-react";

interface MessageInputProps {
  onSendMessage: (content: string) => void;
  sending?: boolean;
  disabled?: boolean;
}

export const MessageInput: React.FC<MessageInputProps> = ({
  onSendMessage,
  sending = false,
  disabled = false,
}) => {
  const [message, setMessage] = useState("");
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!message.trim() || sending || disabled) return;
    onSendMessage(message.trim());
    setMessage("");
    if (textareaRef.current) textareaRef.current.style.height = "auto";
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const handleInput = (e: React.FormEvent<HTMLTextAreaElement>) => {
    const target = e.currentTarget;
    setMessage(target.value);
    target.style.height = "auto";
    target.style.height = Math.min(target.scrollHeight, 150) + "px";
  };

  return (
    <div className="border-t border-gray-200 bg-white p-4">
      <div className="bg-[#F8FAFC] border border-gray-300 rounded-xl p-2 focus-within:ring-2 focus-within:ring-red-100 focus-within:border-[#CC1016] transition-all">
        <textarea
          ref={textareaRef}
          value={message}
          onChange={handleInput}
          onKeyDown={handleKeyDown}
          placeholder="Write a message..."
          disabled={disabled || sending}
          rows={1}
          className="w-full resize-none bg-transparent border-none px-2 py-1 text-sm focus:ring-0 max-h-[150px] placeholder-gray-500 text-gray-900"
        />
        
        <div className="flex items-center justify-between mt-2 px-1">
          <div className="flex items-center gap-1">
            <button
              className="p-2 text-gray-500 hover:bg-gray-200 rounded-full transition-colors"
              title="Add Image"
              disabled={disabled}
            >
              <ImageIcon className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-500 hover:bg-gray-200 rounded-full transition-colors"
              title="Add Attachment"
              disabled={disabled}
            >
              <Paperclip className="w-5 h-5" />
            </button>
            <button
              className="p-2 text-gray-500 hover:bg-gray-200 rounded-full transition-colors"
              title="Add Emoji"
              disabled={disabled}
            >
              <Smile className="w-5 h-5" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handleSend}
              disabled={!message.trim() || sending || disabled}
              className={`px-4 py-1.5 rounded-full text-sm font-semibold transition-all ${
                message.trim() && !sending && !disabled
                  ? "bg-[#CC1016] text-white hover:bg-[#B71C1C]"
                  : "bg-gray-200 text-gray-400 cursor-not-allowed"
              }`}
            >
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};