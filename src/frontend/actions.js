import {
  RATING_3_AND_MORE,
  RATING_4_AND_MORE,
  SORT_BY_HIGH_TO_LOW,
  SORT_BY_LOW_TO_HIGH,
} from "./constants/constants";

export const getCategories = (products) => {
  const allCategories = products.map((product) => product.genre);
  const ans = [...new Set(allCategories)];
  return ans;
};

export const getSortedProducts = (products, sortBy) => {
  if (sortBy === SORT_BY_LOW_TO_HIGH) {
    return [...products].sort((a, b) => a.discountedPrice - b.discountedPrice);
  } else if (sortBy === SORT_BY_HIGH_TO_LOW) {
    return [...products].sort((a, b) => b.discountedPrice - a.discountedPrice);
  }
};

export const getRatedProducts = (products, rating) => {
  if (rating === RATING_4_AND_MORE) {
    return products.filter((product) => product.rating >= 4);
  } else if (rating === RATING_3_AND_MORE) {
    return products.filter((product) => product.rating >= 3);
  }
  return products;
};

export const getCategoriesProducts = (products, categories) => {
  if (categories.length === 0) {
    return products;
  }
  return products.filter((product) => categories.includes(product.genre));
};
