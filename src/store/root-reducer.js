import { combineReducers } from "redux";
import { userReduser } from "./user/user.reducer";
import { categoryReducer } from "./categories/category.reducer";
import { cartReducer } from "./cart/cart.reducer";

export const rootReducer = combineReducers({
  user: userReduser,
  categories: categoryReducer,
  cart: cartReducer,
});
