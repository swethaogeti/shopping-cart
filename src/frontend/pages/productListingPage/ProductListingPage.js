import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CartProductCard,
  Footer,
  ProductCard,
  WishlistProductCard,
} from "../../components";
import { getAllProducts } from "../../features/productsSlice";

import "./productListingPage.css";
export const ProductListingPage = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(products);
  return (
    <div className="productlisting">
      <button onClick={() => navigate("/signup")}>kshdhfls</button>
      <ProductCard />
      <CartProductCard />
      <WishlistProductCard />
    </div>
  );
};
