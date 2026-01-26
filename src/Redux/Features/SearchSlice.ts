import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface SearchState {
  query: string;
  isShown: boolean;
}

const initialState: SearchState = {
  query: "",
  isShown: false,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setQuery: (state, action: PayloadAction<string>) => {
      state.query = action.payload;
      // If there is text, show the results
      state.isShown = action.payload.length > 0;
    },
    clearQuery: (state) => {
      state.query = "";
      state.isShown = false;
    },
    toggleSearch: (state) => {
      state.isShown = !state.isShown;
    },
    setSearchVisibility: (state, action: PayloadAction<boolean>) => {
      state.isShown = action.payload;
    }
  },
});

export const { setQuery, clearQuery, toggleSearch, setSearchVisibility } = searchSlice.actions;

export default searchSlice;