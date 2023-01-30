import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  categories: [],
  sortBy: null,
  rating: null,
};
export const filterSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    sortByPrice: (state, { payload }) => {
      state.sortBy = payload;
    },
    sortByRating: (state, { payload }) => {
      console.log(payload);
      state.rating = payload;
    },
    getProductsByCategory: (state, { payload }) => {
      console.log(payload);

      if (state.categories.some((category) => category === payload)) {
        state.categories.pop((category) => category !== payload);
      } else {
        state.categories.push(payload);
      }
    },
    clearFilters: (state) => Object.assign(state, initialState),
  },
});

const { sortByPrice, sortByRating, getProductsByCategory, clearFilters } =
  filterSlice.actions;
const filterReducer = filterSlice.reducer;
export {
  filterReducer,
  sortByPrice,
  sortByRating,
  getProductsByCategory,
  clearFilters,
};
