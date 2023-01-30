import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  getCategoriesProducts,
  getRatedProducts,
  getSortedProducts,
} from "../../actions";
import { Filters, ProductCard } from "../../components";
import { getAllProducts } from "../../features/productsSlice";
import "./productListingPage.css";

export const ProductListingPage = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { rating, sortBy, categories } = useSelector((state) => state.filters);

  const categoryProducts = getCategoriesProducts(products, categories);
  const ratingProducts = getRatedProducts(categoryProducts, rating);
  const finalProducts = getSortedProducts(ratingProducts, sortBy) || products;
  console.log(finalProducts);
  return (
    <div className="productlisting">
      <Filters />
      <div className="productlisting__products">
        {/* {finalProducts.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })} */}

        {finalProducts.length > 0
          ? finalProducts.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })
          : "No products available"}
      </div>
    </div>
  );
};
