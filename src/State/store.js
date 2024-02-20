import { legacy_createStore, applyMiddleware } from 'redux';
import {thunk} from 'redux-thunk'; // Import thunk as a named export
import authReducer from '../State/Auth/Reducer';
import { combineReducers } from 'redux';

const rootReducers = combineReducers({
  auth: authReducer,
});

export const store = legacy_createStore(rootReducers, applyMiddleware(thunk));
