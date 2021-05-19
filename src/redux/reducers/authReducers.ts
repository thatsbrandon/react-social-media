import ActionTypes, { ActionPayload } from '../actions';
import { User } from '../../models/User';

interface IAuthState {
  user: User | null
}

const INITAL_AUTH_STATE = {
  user: null
}

function registerOrLoginReducer(state: IAuthState = INITAL_AUTH_STATE, action: ActionPayload) {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return { ...state, }
    default:
      return state;
  }
}

function logoutReducer(state: IAuthState = INITAL_AUTH_STATE, action: ActionPayload) {
  switch (action.type) {
    case ActionTypes.LOGOUT:
      return {...state, }
    default:
      return state;
  }
}

export default { signUpReducer };