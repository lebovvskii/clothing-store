export const selectCategoriesMap = (store) =>
  store.categories.categories.reduce((acc, category) => {
    const { title, items } = category;
    acc[title.toLowerCase()] = items;   
    return acc;
  }, {});
