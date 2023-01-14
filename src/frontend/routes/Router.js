import React from "react";
import { Route, Routes } from "react-router-dom";
import {
  CartPage,
  HomePage,
  LoginPage,
  ProductListingPage,
  SignUpPage,
  WishlistPage,
} from "../pages";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductListingPage />}></Route>
      <Route path="/cart" element={<CartPage />}></Route>
      <Route path="/wishlist" element={<WishlistPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route path="/login" element={<LoginPage />}></Route>
    </Routes>
  );
};
