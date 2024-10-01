import { initialProducts,InitialCartProducts } from "../data/products";
import * as actionTypes from "../constants/action-types";

//reducer is a function that receives an action and returns new state.
let initialState = { data: initialProducts, cart:InitialCartProducts, loading: false, error: "" };

export const productsReducer = (state = initialState, action) => {
  switch (action.type)
  {
    case actionTypes.FETCH_PRODUCTS_PENDING:
      return {...state, data: [], loading: true, error: ""};

    case actionTypes.FETCH_PRODUCTS_FULFILLED:
      return {...state, data: action.payload, loading: false, error: ""};
  
    case actionTypes.FETCH_PRODUCTS_REJECTED:
      return {...state, data: state, loading: false, error: action.payload};

    // Add product to cart
      case actionTypes.ADD_PRODUCT_CART:
        return {...state, cart: [...state.cart,action.payload], loading: false, error: ""};

        // Update product to cart
      case actionTypes.UPDATE_PRODUCT_CART:
        return {...state, cart: action.payload, loading: false, error: ""};

    //Delete product
    case actionTypes.DELETE_PRODUCT_CART:
        return {...state, cart: state.cart.filter(product => product.id !== action.payload), loading: false, error: ""};

    
    case actionTypes.DELETE_PRODUCT_CART_PENDING:
      return { data: state.data, loading: true, error: "" };
    
    case actionTypes.DELETE_PRODUCT_CART_FULFILLED:
    {
      return { data: state.data.filter(task => task.id !== action.payload), loading: false, error: "" };
    }
      
    case actionTypes.DELETE_PRODUCT_CART_REJECTED:
      return { data: state.data, loading: false, error: action.payload };
    
    default:
      return state;
  }
};
