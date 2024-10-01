import classes from './CartButton.module.css';
import { useSelector} from "react-redux";

const CartButton = () => {
  let cartProducts = useSelector((state) => state.products);
  return (
    <button className={classes.button}>
      <span>My Cart</span>
      <span className={classes.badge}>{cartProducts.cart.length}</span>
    </button>
  );
};

export default CartButton;
