import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  getWishlistService,
  moveProductToWishlistService,
  removeProductFromWishlistService,
} from "../services";

const initialState = {
  wishlist: [],
  isloading: false,
  error: "",
};
const getWishlistProducts = createAsyncThunk(
  "wishlist/getWishlistProducts",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await getWishlistService(token);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const moveProductToWishlist = createAsyncThunk(
  "move/moveProductToWishlist",
  async (token, product, { rejectWithValue }) => {
    try {
      const { data } = await moveProductToWishlistService(token, product);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const removeProductFromWishlist = createAsyncThunk(
  "remove/removeProductFromWishlist",
  async (token, productId, { rejectWithValue }) => {
    try {
      const { data } = await removeProductFromWishlistService(token, productId);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const wishlistSlice = createSlice({
  name: "wishlist",
  initialState,
  extraReducers: {
    [getWishlistProducts.pending]: (state, { payload }) => {
      state.isloading = true;
    },
    [getWishlistProducts.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.wishlist = payload;
      state.error = "";
    },
    [getWishlistProducts.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },

    [moveProductToWishlist.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.wishlist = payload;
    },
    [moveProductToWishlist.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },

    [removeProductFromWishlist.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.wishlist = payload;
    },
    [removeProductFromWishlist.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
  },
});

export const wishlistReducer = wishlistSlice.reducer;
export {
  getWishlistProducts,
  moveProductToWishlist,
  removeProductFromWishlist,
};
