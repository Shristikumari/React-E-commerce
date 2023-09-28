import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    add(state, action) {
      state.push(action.payload);
    },
    remove(state, action) {
      return state.filter((item) => item.id !== action.payload);
    },
    resetCart: (state) => {
      return []; // Reset the cart to an empty array
    },
  },
});

export const { add, remove, resetCart } = CartSlice.actions;
export default CartSlice.reducer;
