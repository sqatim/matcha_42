import { configureStore } from "@reduxjs/toolkit";
import { completeProfileSlice } from "./completeProfileSlice";

export const store = configureStore({
  reducer: {
    completeProfile: completeProfileSlice.reducer,
  },
});
