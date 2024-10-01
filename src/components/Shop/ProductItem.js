import Card from "../UI/Card";
import classes from "./ProductItem.module.css";
import actions from "../../actions";
import { useSelector, useDispatch } from "react-redux";
import { useMemo } from "react";

const ProductItem = (props) => {
  const { title, id, price, description } = props;
  let products = useSelector((state) => state.products);

  let dispatch = useDispatch();

  let addProductToCart = () => {
    //dispatch
    dispatch(
      actions.addProductCart({
        id: id,
        title: title,
        quantity: 1,
        price: price,
        total: price,
        description: description,
      })
    );
  };
  const isProductThere = () =>
    products.cart.some((product) => product.id === id);

  const deleteIcon = useMemo(() => isProductThere(), [id,products]);

  let deleteProductToCart = () => {
    dispatch(actions.deleteProductCart(id));
  };

  return (
    <li className={classes.item}>
      <Card>
        <header>
          <h3>{title}</h3>
          <div className={classes.price}>₹{price.toFixed(2)}</div>
        </header>
        <p>{description}</p>
        <div className={classes.actions}>
          {deleteIcon ? (
            <button onClick={deleteProductToCart}>Delete</button>
          ) : (
            <button onClick={addProductToCart}>Add to Cart</button>
          )}
        </div>
      </Card>
    </li>
  );
};

export default ProductItem;
