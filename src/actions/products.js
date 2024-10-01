import * as actionTypes from "../constants/action-types";


export const fetchProducts = () => ({
  type: actionTypes.FETCH_PRODUCTS,
});

export const addProductCart = (newProduct) => ({
  type: actionTypes.ADD_PRODUCT_CART,
  payload: newProduct,
});

export const updateProductCart = (updateProduct) => ({
  type: actionTypes.UPDATE_PRODUCT_CART,
  payload: updateProduct,
});

export const deleteProductCart = (productId) => ({
  type: actionTypes.DELETE_PRODUCT_CART,
  payload: productId,
});


