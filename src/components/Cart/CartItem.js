import classes from "./CartItem.module.css";
import actions from "../../actions";
import { useSelector, useDispatch } from "react-redux";

const CartItem = (props) => {
  const { title, quantity, total, price } = props.item;
  let products = useSelector((state) => state.products);

  let dispatch = useDispatch();

  const updateProduct = (product) => {
    let index = products.cart.findIndex((cart) => cart.id === product.id);

    products.cart[index] = {...product,total:product.price*product.quantity};

    dispatch(
      actions.updateProductCart(products.cart)
    );
  };

  let increaseQty = (product) => {
    //dispatch
    updateProduct({
      ...product,
      quantity: product.quantity + 1,
      
    });
  };

  let deleteProductToCart = (id) => {
    dispatch(actions.deleteProductCart(id));
  };

  let decreaseQty = (product) => {
    //dispatch
    if (product.quantity === 1) {
      deleteProductToCart(product.id);
    } else {
      updateProduct({
        ...product,
        quantity: product.quantity - 1,
      });
    }
  };

  return (
    <li className={classes.item}>
      <header>
        <h3>{title}</h3>
        <div className={classes.price}>
          ₹{total?.toFixed(2)}{" "}
          <span className={classes.itemprice}>(₹{price?.toFixed(2)}/item)</span>
        </div>
      </header>
      <div className={classes.details}>
        <div className={classes.quantity}>
          x <span>{quantity}</span>
        </div>
        <div className={classes.actions}>
          <button onClick={()=>decreaseQty(props.item)}>-</button>
          <button onClick={()=>increaseQty(props.item)}>+</button>
          <button onClick={()=>deleteProductToCart(props.item.id)}>Delete</button>
        </div>
      </div>
    </li>
  );
};

export default CartItem;
