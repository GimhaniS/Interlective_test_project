import { ADD_TO_CART, REMOVE_FROM_CART } from './ActionTypes';

export const addItemToCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: ADD_TO_CART,
      payload: product,
    });
    console.log('cart actions', product);
    return product;
  };
};
export const removeItemFromCart = (product) => {
  return (dispatch) => {
    dispatch({
      type: REMOVE_FROM_CART,
      payload: product,
    });
    console.log('cart remove actions', product);
    return product;
  };
};
