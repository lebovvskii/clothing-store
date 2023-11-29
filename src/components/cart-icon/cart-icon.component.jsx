import "./cart-icon.styles.scss";
import { useContext, useState } from "react";
import { CartContext } from "../../contexts/cart.context";

import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";

export const CartIcon = () => {
  const { setIsCartOpen, isCartOpen } = useContext(CartContext);
  const toggleIsCartOpen = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count ">0</span>
    </div>
  );
};