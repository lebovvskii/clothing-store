import "./product-card.styles.scss";
import { Button, BUTTON_TYPES_CLASSES } from "../button/button.component";
import { useSelector } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.action";
import { useDispatch } from "react-redux";

export const ProductCard = ({ product }) => {
  const dispatch = useDispatch();

  const { name, price, imageUrl } = product;
  const cartItems = useSelector(selectCartItems);

  const addProductToCart = () => {
    dispatch(addItemToCart(cartItems, product));
  };

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={name} />
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button type={BUTTON_TYPES_CLASSES.inverted} onClick={addProductToCart}>
        Add to card
      </Button>
    </div>
  );
};
