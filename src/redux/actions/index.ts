/**
 * All actions that will be used in global reducers
 */

enum ActionTypes {
  SIGN_IN = 'SIGN_IN',
  LOGOUT = 'LOGOUT',
  CREATE_POST = 'CREATE_POST'
};

export interface ActionPayload {
  type: ActionTypes,
  payload: any
}

export default ActionTypes;