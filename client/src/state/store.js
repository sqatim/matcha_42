import { configureStore } from "@reduxjs/toolkit";
import { completeProfileSlice } from "./completeProfileSlice";
import { registerSlice } from "./registerSlice";

export const store = configureStore({
  reducer: {
    completeProfile: completeProfileSlice.reducer,
    register: registerSlice.reducer,
  },
});
