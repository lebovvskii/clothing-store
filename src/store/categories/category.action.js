import { createAction } from "../../utils/reducer/reducer.utils";
import { CATEGORIES_MAP_ACTION_TYPES } from "./category.type";

export const setCategoriesMap = (categoriesMap) => {
  return createAction(
    CATEGORIES_MAP_ACTION_TYPES.SET_CATEGORIES_MAP,
    categoriesMap,
  );
};
