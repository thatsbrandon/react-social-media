import { combineReducers } from 'redux';
import authenticationReducer from './reducers/authReducers';

export default combineReducers({
  auth: authenticationReducer
})