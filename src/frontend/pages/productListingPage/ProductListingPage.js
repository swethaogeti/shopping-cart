import React from "react";
import {
  CartProductCard,
  Footer,
  ProductCard,
  WishlistProductCard,
} from "../../components";

import "./productListingPage.css";
export const ProductListingPage = () => {
  return (
    <div className="productlisting">
      <ProductCard />
      <CartProductCard />
      <WishlistProductCard />
      <Footer />
    </div>
  );
};
