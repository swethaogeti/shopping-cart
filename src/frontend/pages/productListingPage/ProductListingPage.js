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
import {
  SORT_BY_LOW_TO_HIGH,
  RATING_2_AND_MORE,
} from "../../constants/constants";
export const ProductListingPage = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);
  const { rating, sortBy, categories } = useSelector((state) => state.filters);

  const sortProducts = getSortedProducts(
    products,
    sortBy || SORT_BY_LOW_TO_HIGH
  );
  const ratingProducts = getRatedProducts(
    sortProducts,
    rating || RATING_2_AND_MORE
  );
  const finalProducts = getCategoriesProducts(ratingProducts, categories);

  return (
    <div className="productlisting">
      <Filters />
      <div className="productlisting__products">
        {finalProducts.length > 0
          ? finalProducts.map((product) => {
              return <ProductCard key={product._id} product={product} />;
            })
          : "No products available"}
      </div>
    </div>
  );
};
