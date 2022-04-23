import { combineReducers } from 'redux';
import HomeReducer from './HomeReducer';
import CartReducer from './CartReducer';
const rootReducer = combineReducers({
  homeReducer: HomeReducer,
  cartReducer: CartReducer,
});
export default rootReducer;
