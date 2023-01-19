import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getProductsServices } from "../services";

const initialState = {
  products: [],
  isloading: false,
  error: "",
};
const getAllProducts = createAsyncThunk(
  "products/getAllProducts",
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await getProductsServices();
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue("error occured in get all products");
    }
  }
);
const productsSlice = createSlice({
  name: "products",
  initialState,
  extraReducers: {
    [getAllProducts.pending]: (state) => {
      state.isloading = true;
    },
    [getAllProducts.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.products = payload.products;
      state.error = "";
    },
    [getAllProducts.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
  },
});

const productsReducer = productsSlice.reducer;
export { getAllProducts, productsReducer };
