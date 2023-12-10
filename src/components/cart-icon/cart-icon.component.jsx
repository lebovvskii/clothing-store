import {
  ShoppingIcon,
  CartItemContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";

import { setIsCartOpen } from "../../store/cart/cart.action.js";
import {
  selectIsCartOpen,
  selectCartCount,
} from "../../store/cart/cart.selector.js";
import { useDispatch, useSelector } from "react-redux";

export const CartIcon = () => {
  const dispatch = useDispatch();

  const isCartOpen = useSelector(selectIsCartOpen);
  const cartCount = useSelector(selectCartCount);

  const toggleIsCartOpen = () => {
    dispatch(setIsCartOpen(!isCartOpen));
  };
  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  );
};
