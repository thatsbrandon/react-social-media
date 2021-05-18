import ActionTypes, { ActionPayload } from '../actions';
import { User } from '../../models/User';

interface IAuthState {
  user: User | null
}

const INITAL_AUTH_STATE = {
  user: null
}

export default (state = INITAL_AUTH_STATE, action: ActionPayload) => {
  switch (action.type) {
    case ActionTypes.SIGN_IN:
      return { ...state, }
  }
}