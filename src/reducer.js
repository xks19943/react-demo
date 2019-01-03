import {auth} from './auth.redux';
import {counter} from "./index.redux";
import {combineReducers} from 'redux';

export default combineReducers({
  auth,
  counter
});