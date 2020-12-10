import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {userLoginReducer, userRegisterReducer} from './reducers/user'
import { cartReducer } from "./reducers/cart";

const rootReducer = combineReducers({
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer,
   cart: cartReducer
})

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;