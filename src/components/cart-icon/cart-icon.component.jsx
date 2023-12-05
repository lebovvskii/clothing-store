import {
  ShoppingIcon,
  CartItemContainer,
  ItemCount,
} from "./cart-icon.styles.jsx";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";   

export const CartIcon = () => {
  const { setIsCartOpen, isCartOpen, cartCount } = useContext(CartContext);
  //
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <CartItemContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon />
      <ItemCount>{cartCount}</ItemCount>
    </CartItemContainer>
  );
};
