import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchProducts = createAsyncThunk(
  "products/fetchProducts",
  async () => {
    try {
      console.log("Fetching products...");
      const res = await fetch("https://fakestoreapi.com/products");
      const data = await res.json();
      return data;
    } catch (error) {
      throw error;
    }
  }
);

const ProductSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
    status: "idle", // Make sure this is initially set to "idle"
  },
  reducers: {
    // These reducers can be used to directly update the state,
    // but they are not used in this example
    setproducts: (state, action) => {
      state.list = action.payload;
    },
    setstatus: (state, action) => {
      state.status = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.list = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = "failed";
      });
  },
});
export const { setproducts, setstatus } = ProductSlice.actions;
export default ProductSlice.reducer;
