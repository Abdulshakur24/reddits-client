import { configureStore } from "@reduxjs/toolkit";
import redditReducers from "../features/slicer/redditSlice";

export const store = configureStore({
  reducer: {
    reddits: redditReducers,
  },
});
