import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getConversationWithMyFriendRequest,
  getMessagesOfConversationRequest,
  getMyConversationsRequest,
} from "../utils/fetchData";
import { userSlice } from "./userSlice";

const initialState = {
  active: false,
  activeConversation: false,
  friendUsername: "",
  conversations: [],
  conversation: {},
  status: null,
  conversationMessages: [],
};

export const getMyConversations = createAsyncThunk(
  "messages/getMyConversations",
  async () => {
    return await getMyConversationsRequest();
  }
);

export const getMessagesOfConversation = createAsyncThunk(
  "messages/getMessagesOfConversation",
  async (conversationId) => {
    return await getMessagesOfConversationRequest(conversationId);
  }
);
export const getConversationWithMyFriend = createAsyncThunk(
  "messages/getMessagesOfConversation",
  async (friendId) => {
    const result = await getConversationWithMyFriendRequest(friendId);
    return result;
  }
);

export const messagesSlice = createSlice({
  name: "messages",
  initialState,
  reducers: {
    setActive: (state, action) => {
      state.active = action.payload;
    },
    setActiveConversation: (state, action) => {
      if (action.payload.active) {
        state.friendUsername = action.payload.friendUsername;
        state.active = action.payload.active;
      }
      state.activeConversation = action.payload.active;
    },
    setFriendUsername: (state, action) => {
      state.friendUsername = action.payload;
    },
    setConversations: (state, action) => {
      return {
        ...state,
        conversations: [...action.payload],
      };
    },
    setConversation: (state, action) => {
      return {
        ...state,
        conversation: { ...action.payload },
      };
    },
    setConversationMessages: (state, action) => {
      return {
        ...state,
        conversationMessages: [
          ...state.conversationMessages,
          ...action.payload,
        ],
      };
    },
    resetMessages: (state, action) => {
      return {
        ...state,
        conversationMessages: [],
        conversation: {},
        friendUsername: "",
      };
    },
    addMessageToConversation: (state, action) => {
      const newMessage = [...state.conversationMessages];
      newMessage.unshift({
        text: action.payload.text,
        sender: action.payload.sender,
      });
      return {
        ...state,
        conversationMessages: [...newMessage],
      };
    },
  },
  extraReducers: {
    [getMyConversations.pending]: (state, action) => {
      state.status = "pending";
    },
    [getMyConversations.fulfilled]: (state, action) => {
      state.status = "success";
      state.conversations = [...action.payload];
    },
    [getMessagesOfConversation.pending]: (state, action) => {
      state.status = "pending";
    },
    [getMessagesOfConversation.fulfilled]: (state, action) => {
      state.status = "success";
      state.conversationMessages = [...action.payload];
    },
    [getConversationWithMyFriend.pending]: (state, action) => {
      state.status = "pending";
    },
    [getConversationWithMyFriend.fulfilled]: (state, action) => {
      state.status = "success";
      state.conversation = { ...action.payload };
    },
  },
});

export const {
  setActive,
  setActiveConversation,
  setFriendUsername,
  setConversations,
  addMessageToConversation,
  resetMessages,
  setConversation,
  setConversationMessages,
} = messagesSlice.actions;
