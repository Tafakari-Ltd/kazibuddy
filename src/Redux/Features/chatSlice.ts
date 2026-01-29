"use client";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import ChatApi from "@/services/chatApi";
import {
  ChatState,
  Conversation,
  Message,
  SendMessagePayload,
} from "@/types/chat.types";

const initialState: ChatState = {
  conversations: [],
  currentConversation: null,
  messages: {},
  loading: false,
  sending: false,
  error: null,
  typingUsers: {},
};

export const fetchConversations = createAsyncThunk(
  "chat/fetchConversations",
  async (_, { rejectWithValue }) => {
    try {
      return await ChatApi.getConversations();
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchMessages = createAsyncThunk(
  "chat/fetchMessages",
  async (conversationId: string, { rejectWithValue }) => {
    try {
      // conversationId IS the partner's userId
      const messages = await ChatApi.getMessages(conversationId);
      return { conversationId, messages };
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const sendMessage = createAsyncThunk(
  "chat/sendMessage",
  async (payload: SendMessagePayload, { rejectWithValue }) => {
    try {
      const messageData = {
        recipient_id: payload.recipientId,
        content: payload.content,
      };
      return await ChatApi.sendMessage(messageData);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const getOrCreateConversation = createAsyncThunk(
  "chat/getOrCreateConversation",
  async (participantId: string, { rejectWithValue }) => {
    try {
      return await ChatApi.getOrCreateConversation(participantId);
    } catch (error: any) {
      return rejectWithValue(error.message);
    }
  }
);

export const markMessagesAsRead = createAsyncThunk(
  "chat/markMessagesAsRead",
  async (conversationId: string) => {
    await ChatApi.markMessagesAsRead(conversationId);
    return conversationId;
  }
);

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    setCurrentConversation: (state, action: PayloadAction<Conversation | null>) => {
      state.currentConversation = action.payload;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      const message = action.payload;
      const conversationId = message.conversation_id;
      
      if (!state.messages[conversationId]) {
        state.messages[conversationId] = [];
      }
      
      const exists = state.messages[conversationId].some(m => m.id === message.id);
      if (!exists) {
        state.messages[conversationId].push(message);
      }
    },
    resetChatState: () => initialState,
  },
  extraReducers: (builder) => {
    builder
      // Fetch Conversations
      .addCase(fetchConversations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchConversations.fulfilled, (state, action) => {
        state.loading = false;
        state.conversations = action.payload;
      })
      .addCase(fetchConversations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      })
      // Fetch Messages
      .addCase(fetchMessages.fulfilled, (state, action) => {
        const { conversationId, messages } = action.payload;
        state.messages[conversationId] = messages;
      })
      // Send Message
      .addCase(sendMessage.pending, (state) => {
        state.sending = true;
      })
      .addCase(sendMessage.fulfilled, (state, action) => {
        state.sending = false;
        const message = action.payload;
        const conversationId = message.conversation_id;
        
        if (!state.messages[conversationId]) {
          state.messages[conversationId] = [];
        }
        state.messages[conversationId].push(message);
        
        // Update Last Message in list
        const conv = state.conversations.find(c => c.id === conversationId);
        if (conv) {
          conv.last_message = message;
          conv.updated_at = message.created_at;
          // Move to top
          state.conversations = [
            conv,
            ...state.conversations.filter(c => c.id !== conversationId)
          ];
        }
      })
      .addCase(sendMessage.rejected, (state, action) => {
        state.sending = false;
        state.error = action.payload as string;
      });
  },
});

export const { setCurrentConversation, addMessage, resetChatState } = chatSlice.actions;
export default chatSlice.reducer;