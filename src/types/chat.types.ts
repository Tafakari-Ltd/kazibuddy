export interface User {
  id: string;
  full_name: string;
  email: string;
  user_type?: "worker" | "employer" | "admin";
  profile_photo_url?: string; 
  avatar?: string; 
  is_online?: boolean;
}

export interface Message {
  id: string | number;
  conversation_id: string; 
  sender_id: string | number;
  sender_email?: string;
  recipient_id?: string | number;
  content: string;
  message_type: "text" | "file" | "image" | "system";
  attachment_url?: string;
  is_read: boolean;
  created_at: string; 
}

export interface Conversation {
  id: string; 
  participant_ids: string[];
  participants: User[];
  last_message?: Message;
  unread_count: number;
  created_at?: string;
  updated_at?: string;
}

export interface CreateMessageData {
  recipient_id: string;
  content: string;
  message_type?: "text" | "file" | "image";
}

export interface ConversationListItem {
  conversation: Conversation;
  otherParticipant: User;
  lastMessage?: Message;
  unreadCount: number;
}

export interface ChatState {
  conversations: Conversation[];
  currentConversation: Conversation | null;
  messages: Record<string, Message[]>;
  loading: boolean;
  sending: boolean;
  error: string | null;
  typingUsers: Record<string, string[]>;
}

export interface SendMessagePayload {
  conversationId?: string; 
  recipientId: string;
  content: string;
  messageType?: "text" | "file" | "image";
}