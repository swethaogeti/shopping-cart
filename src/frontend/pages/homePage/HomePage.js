import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Footer, HeroBanner, ProductCard } from "../../components";
import { getAllProducts } from "../../features/productsSlice";
import "./homePage.css";
export const HomePage = () => {
  const navigate = useNavigate();
  const { products } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllProducts());
  }, []);

  const trendingProducts = products.filter((item) => item.trending === true);
  console.log(trendingProducts);
  return (
    <div className="homePage">
      <div className="homePage__container">
        <div className="homePage__container__hero">
          <div className="homePage__container__hero__left">
            <h1>What BOOK ARE YOU LOOKING FOR?</h1>
            <p>
              Not sure What To Read Next? Explore Our Catalog of Public Domain
              Books with Our Editors
            </p>
            <button>SHOP NOW</button>
          </div>
          <div className="homePage__container__hero__right">
            <img
              src="https://149349728.v2.pressablecdn.com/wp-content/uploads/2019/05/Untitled-design-27.png"
              alt="hero-img"
            ></img>
          </div>
        </div>
        <h1>TRENDING PRODUCTS</h1>
        <div className="homePage__container__trending">
          {trendingProducts.map((product) => {
            return (
              <ProductCard
                product={product}
                key={product._id}
                className="trending__card"
              />
            );
          })}
        </div>
        <Footer />
      </div>
    </div>
  );
};
