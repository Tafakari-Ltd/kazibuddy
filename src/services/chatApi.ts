import api from "../lib/axios";
import {
  Conversation,
  Message,
  CreateMessageData,
  User,
} from "../types/chat.types";

export class ChatApi {
  
  private static readonly BASE_URL = "/api/chat";

  /**
   
   * GET /api/chat/inbox/
   */
  static async getConversations(): Promise<Conversation[]> {
    try {
      const response = await api.get(`${this.BASE_URL}/inbox/`);
      const users: User[] = response.data;

      return users.map((user) => ({
        id: user.id, 
        participant_ids: [user.id],
        participants: [
          {
            ...user,
            avatar: user.profile_photo_url || user.avatar, // Handle field name mismatch
          },
        ],
        unread_count: 0, 
        last_message: undefined,
        updated_at: new Date().toISOString(),
      }));
    } catch (error: any) {
      console.error("Error fetching conversations:", error);
      throw new Error(error.response?.data?.error || "Failed to fetch conversations");
    }
  }

  /**
   * Fetch messages with a specific user
   * GET /api/chat/conversation/{userId}/
   */
  static async getMessages(partnerId: string): Promise<Message[]> {
    try {
      const response = await api.get(`${this.BASE_URL}/conversation/${partnerId}/`);
      const backendMessages = response.data;

      // Transform backend messages to frontend structure
      return backendMessages.map((msg: any) => ({
        id: msg.id,
        conversation_id: partnerId, 
        sender_id: msg.sender,
        sender_email: msg.sender_email,
        recipient_id: msg.receiver,
        content: msg.content,
        message_type: "text", // Default to text
        is_read: msg.is_read,
        created_at: msg.timestamp, // Map timestamp to created_at
      }));
    } catch (error: any) {
      console.error("Error fetching messages:", error);
      throw new Error(error.response?.data?.error || "Failed to fetch messages");
    }
  }

  /**
   * Send a new message
   * POST /api/chat/send/
   */
  static async sendMessage(data: CreateMessageData): Promise<Message> {
    try {
     
      const payload = {
        receiver: data.recipient_id,
        content: data.content,
      };
      
      const response = await api.post(`${this.BASE_URL}/send/`, payload);
      const msg = response.data;

      // Transform response
      return {
        id: msg.id,
        conversation_id: data.recipient_id,
        sender_id: msg.sender,
        content: msg.content,
        message_type: "text",
        is_read: false,
        created_at: msg.timestamp,
      };
    } catch (error: any) {
      console.error("Error sending message:", error);
      throw new Error(error.response?.data?.error || "Failed to send message");
    }
  }

  
  static async getOrCreateConversation(participantId: string): Promise<Conversation> {
    try {
     
      return {
        id: participantId,
        participant_ids: [participantId],
        participants: [{ id: participantId, full_name: "User", email: "" }], 
        unread_count: 0,
        updated_at: new Date().toISOString(),
      };
    } catch (error: any) {
      throw new Error("Failed to initialize conversation");
    }
  }

  static async markMessagesAsRead(conversationId: string): Promise<void> {
    
    return Promise.resolve();
  }

  static async archiveConversation(conversationId: string): Promise<void> {
    
    return Promise.resolve();
  }

  static async searchUsers(query: string): Promise<User[]> {
   
    try {
      // Example: searching workers
      const response = await api.get(`/api/workers/?search=${query}`);
      return response.data.results || [];
    } catch (error) {
      return [];
    }
  }
}

export default ChatApi;