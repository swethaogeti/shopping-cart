import React from "react";
import { ProductCard } from "../../components/productCard/ProductCard";
import "./productListingPage.css";
export const ProductListingPage = () => {
  return (
    <div className="productlisting">
      <ProductCard />
      <ProductCard />
      <ProductCard />
      <ProductCard />
    </div>
  );
};
