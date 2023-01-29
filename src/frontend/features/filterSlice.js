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
      // const newCategory = state.categories.some(
      //   (category) => category === payload
      // )
      //   ? state.categories.pop((category) => category !== payload)
      //   : payload;
      // state.categories.push(newCategory);

      if (state.categories.some((category) => category === payload)) {
        state.categories.pop((category) => category !== payload);
      } else {
        state.categories.push(payload);
      }
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
