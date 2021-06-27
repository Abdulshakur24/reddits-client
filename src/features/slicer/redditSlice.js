import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchData } from "../requests/requests";
import { includes } from "lodash";

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
  },

  reducers: {
    searchTerm: (state, action) => {
      state.searchTerm = action.payload.string;
      const string = action.payload.string;
      state.posts = state.posts.filter((object, index) => {
        if (includes(object.title, string)) return object;
        return object;
      });
    },
  },

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

export const { searchTerm, getPosts } = redditSlice.actions;
export default redditSlice.reducer;
