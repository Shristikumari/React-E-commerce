import { createSlice } from "@reduxjs/toolkit";

const WishlistSlice = createSlice({
  name: "wish",
  initialState: [],
  reducers: {
    wishadd(state, action) {
      state.push(action.payload);
    },
    wishremove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    wishupdate(state, action) {
      return state.filter((item) => item.id === action.payload);
    },
  },
});
export const { wishadd, wishremove, wishupdate } = WishlistSlice.actions;
export default WishlistSlice.reducer;
