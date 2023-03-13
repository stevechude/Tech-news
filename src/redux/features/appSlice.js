import { createSlice } from "@reduxjs/toolkit";
// articles, currentPage, isLoading
const initialState = {
  articles: [],
  currentPage: 0,
  isLoading: true,
  registerEmail: "",
  registerPassword: "",
  loginEmail: "",
  loginPassword: "",
};

export const appSlice = createSlice({
  name: "newsArticles",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    setIsLoading: (state, action) => {
      state.isLoading = action.payload;
    },
    setRegisterEmail: (state, action) => {
      state.registerEmail = action.payload;
    },
    setRegisterPassword: (state, action) => {
      state.registerPassword = action.payload;
    },
    setLoginEmail: (state, action) => {
      state.loginEmail = action.payload;
    },
    setLoginPassword: (state, action) => {
      state.loginPassword = action.payload;
    },
  },
});

export const {
  setArticles,
  setCurrentPage,
  setIsLoading,
  setRegisterEmail,
  setRegisterPassword,
  setLoginEmail,
  setLoginPassword,
} = appSlice.actions;

export default appSlice.reducer;
