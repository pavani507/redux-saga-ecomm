import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';
import { useSelector} from "react-redux";

const Cart = () => {
  let cartProducts = useSelector((state) => state.products);
  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {cartProducts.cart.map(product=><ul key={product.id}>
        <CartItem
       item={product}
        />
      </ul>)}
      
    </Card>
  );
};

export default Cart;
