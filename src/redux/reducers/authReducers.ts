import ActionTypes, { ActionPayload } from '../actions';
import { User } from '../../models/User';

interface IAuthState {
  isLoggedIn: Boolean
  user: User | null
}

const INITAL_AUTH_STATE = {
  isLoggedIn: false,
  user: null
}

export default (state: IAuthState = INITAL_AUTH_STATE, action: ActionPayload) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return { ...state, isLoggedIn: true, user: action.payload};
    case ActionTypes.LOGOUT:
      return {...state, isLoggedIn: false, user: null};
    default:
      return state;
  }
}