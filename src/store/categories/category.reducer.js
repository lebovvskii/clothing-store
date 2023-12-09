import { CATEGORIES_MAP_ACTION_TYPES } from "./category.type";
const CATEGORIES_INITIAL_STATE = {
  categoriesMap: {},
};

export const categoryReducer = (state = CATEGORIES_INITIAL_STATE, action) => {
  const { type, payload } = action;
  switch (type) {
    case CATEGORIES_MAP_ACTION_TYPES.SET_CATEGORIES_MAP   :
      return {
        ...state,
        categoriesMap: payload,
      };
    default:
      return state;
  }
};
