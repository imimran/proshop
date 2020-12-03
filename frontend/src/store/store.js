import {createStore, combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {userLoginReducer, userRegisterReducer} from './reducers/user'

const rootReducer = combineReducers({
   userLogin: userLoginReducer,
   userRegister: userRegisterReducer
})

const initialState = {};
const middleware = [thunk];

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;