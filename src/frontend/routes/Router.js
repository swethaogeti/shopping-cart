import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Route, Routes } from "react-router-dom";
import RequireAuth from "../components/RequireAuth";
import PrivateRoute from "../components/RequireAuth";
import {
  CartPage,
  HomePage,
  LoginPage,
  ProductListingPage,
  SignUpPage,
  WishlistPage,
} from "../pages";

export const Router = () => {
  const { token } = useSelector((state) => state.auth);
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/products" element={<ProductListingPage />}></Route>

      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/signup" element={<SignUpPage />}></Route>
      <Route element={<RequireAuth />}>
        <Route path="/cart" element={<CartPage />}></Route>
        <Route path="/wishlist" element={<WishlistPage />}></Route>
      </Route>
    </Routes>
  );
};
