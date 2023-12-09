import { combineReducers } from "redux";
import { userReduser } from "./user/user.reducer";
import { categoryReducer } from "./categories/category.reducer";

export const rootReducer = combineReducers({
  user: userReduser,
  categories: categoryReducer,    
});
