import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  CartProductCard,
  Footer,
  ProductCard,
  WishlistProductCard,
} from "../../components";
import { getAllProducts } from "../../features/productsSlice";

import "./productListingPage.css";
export const ProductListingPage = () => {
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  console.log(products);
  return (
    <div className="productlisting">
      <ProductCard />
      <CartProductCard />
      <WishlistProductCard />
    </div>
  );
};
