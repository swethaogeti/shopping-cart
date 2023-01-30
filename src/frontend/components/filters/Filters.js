import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../actions";
import {
  RATING_2_AND_MORE,
  RATING_3_AND_MORE,
  RATING_4_AND_MORE,
  SORT_BY_HIGH_TO_LOW,
  SORT_BY_LOW_TO_HIGH,
} from "../../constants/constants";
import {
  clearFilters,
  getProductsByCategory,
  sortByPrice,
  sortByRating,
} from "../../features/filterSlice";
import "./filters.css";
export const Filters = () => {
  const { products } = useSelector((state) => state.products);
  const { sortBy, rating, categories } = useSelector((state) => state.filters);
  console.log(clearFilters);
  const allCategories = getCategories(products);
  const dispatch = useDispatch();
  return (
    <div className="filters">
      <div className="filters__header">
        <h1>Filters</h1>
        <button
          onClick={(e) => {
            e.preventDefault();
            dispatch(clearFilters());
          }}
        >
          Clear All
        </button>
      </div>
      <h1>Sort By</h1>
      <div className="filters__filter">
        <div>
          <input
            id="high-to-low"
            name="radio"
            type="radio"
            checked={sortBy === SORT_BY_HIGH_TO_LOW}
            onChange={() => dispatch(sortByPrice(SORT_BY_HIGH_TO_LOW))}
          ></input>
          <label htmlFor="high-to-low">Price-High To Low</label>
        </div>
        <div>
          <input
            id="low-to-high"
            type="radio"
            name="radio"
            checked={sortBy === SORT_BY_LOW_TO_HIGH}
            onChange={() => dispatch(sortByPrice(SORT_BY_LOW_TO_HIGH))}
          ></input>
          <label htmlFor="low-to-high">Price-Low To High</label>
        </div>
      </div>
      <h1>Price</h1>
      <div className="filters__filter">
        <div>
          <input type="range" max="1500" min="100" id="slider"></input>
          <label htmlFor="slider">Price</label>
        </div>
      </div>
      <h1>Genre Category</h1>
      <div className="filters__filter">
        {allCategories.map((category) => {
          return (
            <div>
              <input
                id={category}
                type="checkbox"
                checked={categories.some(
                  (categoryName) => categoryName === category
                )}
                onChange={() => dispatch(getProductsByCategory(category))}
              ></input>
              <label htmlFor={category}>{category}</label>
            </div>
          );
        })}
      </div>

      <h1>Rating</h1>
      <div className="filters__filter">
        <div>
          <input
            id="four"
            type="radio"
            name="star"
            checked={rating === RATING_4_AND_MORE}
            onChange={() => dispatch(sortByRating(RATING_4_AND_MORE))}
          ></input>
          <label htmlFor="four">4 Star & above</label>
        </div>

        <div>
          <input
            id="three"
            type="radio"
            name="star"
            checked={rating === RATING_3_AND_MORE}
            onChange={() => dispatch(sortByRating(RATING_3_AND_MORE))}
          ></input>
          <label htmlFor="three">3 Star & above</label>
        </div>
        <div>
          <input
            id="two"
            type="radio"
            name="star"
            checked={rating === RATING_2_AND_MORE}
            onChange={() => dispatch(sortByRating(RATING_2_AND_MORE))}
          ></input>
          <label htmlFor="two">2 Star & above</label>
        </div>
      </div>
    </div>
  );
};
