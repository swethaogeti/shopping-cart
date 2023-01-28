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
      console.log(payload);
      state.sortBy = payload;
    },
    sortByRating: (state, { payload }) => {
      state.rating = payload;
    },
    getProductsByCategory: (state, { payload }) => {
      console.log(payload);
      state.categories = state.categories.some(
        (category) => category === payload
      )
        ? state.categories.filter((category) => category !== payload)
        : payload;
    },
    clearFilters: (state) => {
      state = initialState;
    },
  },
});

const { sortByPrice, sortByRating, getProductsByCategory } =
  filterSlice.actions;
const filterReducer = filterSlice.reducer;
export { filterReducer, sortByPrice, sortByRating, getProductsByCategory };
