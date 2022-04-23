import { ADD_TO_CART, REMOVE_FROM_CART } from '../actions/ActionTypes';
const initialstate = {
  cartItem: [],
  totalAmount: 0,
};

const CartReducer = (state = initialstate, action) => {
  let total;
  switch (action.type) {
    case ADD_TO_CART: {
      const cartAddedItem = action.payload;

      const totalAmount = 0;
      total = cartAddedItem.reduce(
        (accumulator, current) => accumulator + current.price,
        totalAmount
      );

      return {
        ...state,
        cartItem: action.payload,
        totalAmount: total,
      };
    }
    case REMOVE_FROM_CART: {
      const removedItem = action.payload;

      const newTot = state.totalAmount - removedItem.price;
      const ar = state.cartItem.filter((el) => el.id !== action.payload.id);

      return {
        ...state,
        cartItem: ar,
        totalAmount: newTot,
      };
    }

    default: {
      return state;
    }
  }
};

export default CartReducer;
