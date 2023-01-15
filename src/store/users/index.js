import { createSlice } from "@reduxjs/toolkit";

const user = createSlice({
  name: "user",
  initialState: {
    data: null,
    id: null,
  },
  reducers: {
    setUser(state, action) {
      console.log(state);
      console.log(action);
    },
  },
});

export const { setUser } = user.actions;
export default user.reducer;
