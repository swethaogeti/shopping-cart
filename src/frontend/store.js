import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { cartReducer } from "./features/cartSlice";
import { productsReducer } from "./features/productsSlice";
import { wishlistReducer } from "./features/wishlistSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
  },
});

export { store };
