import { legacy_createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import thunk as a named export
import authReducer from '../State/Auth/Reducer';
import { combineReducers } from 'redux';
import customerProductReducer from "../State/customers/product/Reducer";
import productReducer from "./Admin/Product/Reducer";

const rootReducers=combineReducers({

  auth:authReducer,
  customersProduct:customerProductReducer,
  // cart:cartReducer,
  // order:orderReducer,
  // review:ReviewReducer,

  // admin
  adminsProduct:productReducer,
  // adminsOrder:adminOrderReducer,


});

export const store = legacy_createStore(rootReducers,applyMiddleware(thunk));
