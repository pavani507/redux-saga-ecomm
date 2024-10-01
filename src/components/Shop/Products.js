import ProductItem from "./ProductItem";
import classes from "./Products.module.css";
import { useEffect, useMemo, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import actions from "../../actions";

const Products = () => {
  const [searchInput, setSearchInput] = useState("");

  let products = useSelector((state) => state.products);

  //dispatch
  let dispatch = useDispatch();

  const searchProducts = (items) => {
    return items.filter((item) =>
      item.title.toUpperCase().includes(searchInput.toUpperCase())
    );
  };

  const processedItems = useMemo(
    () => searchProducts(products.data),
    [products.data, searchInput]
  );

  useEffect(() => {
    dispatch(actions.fetchProducts());
  }, [dispatch]);

  const onhandleChange = (e) => {
    setSearchInput(e.target.value);
  };

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <div style={{ marginLeft: "36%" }}>
        <input
          placeholder="Search Products"
          style={{
            width: "43%",
            padding: "20px 10px 10px 20px",
            borderRadius: "5px",
          }}
          onChange={onhandleChange}
        />
      </div>

      {processedItems.map((product) => (
        <ul>
          <ProductItem
            id={product.id}
            quantity={product.quantity}
            title={product.title}
            price={product.price}
            description="This is a first product - amazing!"
          />
        </ul>
      ))}
    </section>
  );
};

export default Products;
