import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../requests/requests";

export const fetchDataAction = createAsyncThunk("reddit/fetchData", (slug) =>
  fetchData(`https://www.reddit.com${slug}`)
);

const redditSlice = createSlice({
  name: "reddit",
  initialState: {
    posts: [],
    isLoading: false,
    error: false,
    searchTerm: "",
    selectedSubreddits: "/r/pics/.json",
  },

  reducers: {},

  extraReducers: {
    [fetchDataAction.pending]: (state) => {
      state.isLoading = true;
      state.error = false;
    },
    [fetchDataAction.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.error = false;
      const data = action.payload.data.children;
      const posts = data.map(({ data }) => data);
      state.posts = posts;
    },
    [fetchDataAction.rejected]: (state) => {
      state.isLoading = false;
      state.error = true;
    },
  },
});

export const { setSearchTerm, getPosts } = redditSlice.actions;
export default redditSlice.reducer;
