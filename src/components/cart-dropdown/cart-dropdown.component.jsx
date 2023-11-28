import "./cart-dropdown.styles.scss";
import { Button } from "../button/button.component";

export const CartDropdown = () => {
  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        <Button>Go to checkout</Button>
      </div>
    </div>
  );
};
