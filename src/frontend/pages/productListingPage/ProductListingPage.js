import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  CartProductCard,
  Filters,
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

  return (
    <div className="productlisting">
      <Filters />
      <div className="productlisting__products">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};
