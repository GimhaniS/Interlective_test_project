import { GET_SHOP_ITEMS } from '../actions/ActionTypes';

const initialstate = {
  shopItem: [],
};

const HomeReducer = (state = initialstate, action) => {
  switch (action.type) {
    case GET_SHOP_ITEMS: {
      return {
        ...state,
        shopItem: action.payload,
      };
    }
    default: {
      return state;
    }
  }
};

export default HomeReducer;
