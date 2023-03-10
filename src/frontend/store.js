import { configureStore } from "@reduxjs/toolkit";
import { authReducer } from "./features/authSlice";
import { cartReducer } from "./features/cartSlice";
import { filterReducer } from "./features/filterSlice";
import { productsReducer } from "./features/productsSlice";
import { wishlistReducer } from "./features/wishlistSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
    products: productsReducer,
    cart: cartReducer,
    wishlist: wishlistReducer,
    filters: filterReducer,
  },
});

export { store };
