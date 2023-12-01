import "./checkout.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext, useEffect } from "react";
import { CheckoutItem } from "../../components/checkout-item/checkout-item.component";

export const Checkout = () => {
  const { cartItems, addItemToCart, removeItemFromCart, cartCount } =
    useContext(CartContext);
  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <div className="header-block">
          <span>Product</span>
        </div>
        <div className="header-block">
          <span>Desctiption</span>
        </div>
        <div className="header-block">
          <span>Quantity</span>
        </div>
        <div className="header-block">
          <span>Price</span>
        </div>
        <div className="header-block">
          <span>Remove </span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <span className="total">Total: {cartCount}</span>
    </div>
  );
};
