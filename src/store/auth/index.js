import { createSlice } from "@reduxjs/toolkit";

const auth = createSlice({
  name: "auth",
  initialState: {
    data: null,
    id: null,
  },
  reducers: {
    setAuth(state, action) {
      state.data = action.payload.data;
      state.id = action.payload.id;
    },
  },
});

export const { setAuth } = auth.actions;
export default auth.reducer;
