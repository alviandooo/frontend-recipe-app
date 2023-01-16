import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    data: null,
    id: null,
    token: null,
    isLogin: null,
  },
  reducers: {
    setAuth(state, action) {
      state.data = action.payload.data;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.isLogin = action.payload.isLogin;
    },
  },
});

export const { setAuth } = auth.actions;
export default auth.reducer;
