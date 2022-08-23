import { createAsyncThunk, createSlice, current } from "@reduxjs/toolkit";
import {
  getConversationWithMyFriendRequest,
  getMessagesOfConversationRequest,
  getMyConversationsRequest,
} from "../utils/fetchData";
import { userSlice } from "./userSlice";

const initialState = {
  active: false,
  activeConversation: false,
  friendId: "",
  friendUsername: "",
  friendAvatar: "",
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
    submitMessage: (state, action) => {},
    setActiveConversation: (state, action) => {
      if (action.payload.active) {
        state.friendUsername = action.payload.friendUsername;
        if (action.payload.id) {
          state.friendId = action.payload.id;
          state.active = action.payload.active;
          state.friendAvatar = action.payload.friendAvatar;
        }
        if (!action.payload.check) {
          state.conversation = [];
          state.conversationMessages = [];
        }
      }
      state.activeConversation = action.payload.active;
    },
    setFriendUsername: (state, action) => {
      state.friendUsername = action.payload;
    },
    setFriendId: (state, action) => {
      state.friendId = action.payload;
    },
    setFriendAvatar: (state, action) => {
      state.friendAvatar = action.payload;
    },
    setConversations: (state, action) => {
      return {
        ...state,
        conversations: [...action.payload],
      };
    },
    addNewMessageToConversations: (state, action) => {
      let conversations = [];
      current(state)?.conversations.map((element) => {
        if (element._id == action.payload.conversationId) {
          const messages = [...element.messages];
          messages.unshift({
            sender: action.payload.sender.id,
            conversation: action.payload.conversationId,
            text: action.payload.text,
          });
          const ss = new Date().toDateString();
          console.log(ss);
          let conversation = { ...element, messages, updatedAt: ss };
          conversations.unshift(conversation);
        } else conversations.push(element);
      });
      console.log("conversations:", conversations);
      return {
        ...state,
        conversations: [...conversations],
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
        friendAvatar: "",
        friendid: "",
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
  setFriendAvatar,
  submitMessage,
  addNewMessageToConversations,
} = messagesSlice.actions;
