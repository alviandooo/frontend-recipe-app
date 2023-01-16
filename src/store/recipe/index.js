import { createSlice } from "@reduxjs/toolkit";

const recipe = createSlice({
  name: "recipe",
  initialState: {
    data: null,
    id: null,
  },
  reducers: {
    setRecipe(state, action) {
      state.data = action.payload.data;
      state.id = action.payload.id;
    },
  },
});

export const { setRecipe } = recipe.actions;
export default recipe.reducer;
