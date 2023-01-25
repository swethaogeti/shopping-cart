import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  addProductToCartService,
  getCartService,
  removeProductFromCartService,
  updateQuantityOfProductInCartService,
} from "../services";

const initialState = {
  cart: [],
  isloading: false,
  error: "",
};
const getCartProducts = createAsyncThunk(
  "cartProducts/getCartProducts",
  async (token, { rejectWithValue }) => {
    try {
      const { data } = await getCartService(token);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const addProductToCart = createAsyncThunk(
  "add/addProductToCart",
  async ({ token, product }, { rejectWithValue }) => {
    try {
      const { data } = await addProductToCartService(token, product);
      console.log(product);
      console.log(data);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const removeProductFromCart = createAsyncThunk(
  "remove/removeProductFromCart",
  async ({ token, productId }, { rejectWithValue }) => {
    try {
      const { data } = await removeProductFromCartService(token, productId);
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);

const updateQuantityOfProductInCart = createAsyncThunk(
  "update/updateQuantityOfProductInCart",
  async (token, productId, type, { rejectWithValue }) => {
    try {
      const data = await updateQuantityOfProductInCartService(
        token,
        productId,
        type
      );
      return data;
    } catch (error) {
      rejectWithValue(error);
    }
  }
);
const cartSlice = createSlice({
  name: "cart",
  initialState,

  extraReducers: {
    [getCartProducts.pending]: (state) => {
      state.isloading = true;
    },

    [getCartProducts.fulfilled]: (state, { payload }) => {
      console.log(payload);
      state.isloading = false;
      state.cart = payload.cart;
      state.error = "";
    },

    [getCartProducts.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },

    [addProductToCart.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.cart = payload.cart;
      state.error = "";
    },
    [addProductToCart.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
    [removeProductFromCart.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.cart = payload.cart;
      state.error = "";
    },
    [removeProductFromCart.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },

    [updateQuantityOfProductInCart.fulfilled]: (state, { payload }) => {
      state.isloading = false;
      state.cart = payload.cart;
      state.error = "";
    },
    [updateQuantityOfProductInCart.rejected]: (state, { payload }) => {
      state.isloading = false;
      state.error = payload;
    },
  },
});

export const cartReducer = cartSlice.reducer;
export {
  addProductToCart,
  getCartProducts,
  removeProductFromCart,
  updateQuantityOfProductInCart,
};
