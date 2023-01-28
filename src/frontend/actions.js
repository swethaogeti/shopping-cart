export const getCategories = (products) => {
  const allCategories = products.map((product) => product.genre);
  const ans = [...new Set(allCategories)];
  return ans;
};
