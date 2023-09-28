import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";
import productReducer from "./ProductsSlice";
import wishReducer from "../redux/WishlistSlice";
import searchReducer from "../redux/SearchSlice";
const store = configureStore({
  reducer: {
    cart: cartReducer,
    products: productReducer,
    wish: wishReducer,
    search: searchReducer,
  },
});

export default store;
