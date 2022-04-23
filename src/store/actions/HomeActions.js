import { GET_SHOP_ITEMS } from './ActionTypes';
import { api } from '../../../utils/api';

export const getShopItems = () => {
  return async (dispatch) => {
    try {
      const res = await api.get('/products');
      console.log('GET_SHOP_ITEMS', res);
      dispatch({
        type: GET_SHOP_ITEMS,
        payload: res.data,
      });
      return true;
    } catch (error) {
      console.log(' GET_SHOP_ITEMS error', error);
      return false;
    }
  };
};
