import { configureStore } from "@reduxjs/toolkit";
import { completeProfileSlice } from "./completeProfileSlice";
import { messagesSlice } from "./messagesSlice";
import { registerSlice } from "./registerSlice";
import { userSlice } from "./userSlice";

export const store = configureStore({
  reducer: {
    completeProfile: completeProfileSlice.reducer,
    register: registerSlice.reducer,
    user: userSlice.reducer,
    messages: messagesSlice.reducer,
  },
});
