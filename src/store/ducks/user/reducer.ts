import { Reducer } from 'redux';
import { IUserState, UserActionsType, UserTypesEnum } from './types';

const INITIAL_STATE: IUserState = {
  user: null
};

const userReducer: Reducer<IUserState, UserActionsType> = (
  state = INITIAL_STATE,
  action,
) => {
  switch (action.type) {
    case UserTypesEnum.SET_USER:
      return { ...state, user: action.payload };
    case UserTypesEnum.CLEAR_USER_STATE:
      return { ...INITIAL_STATE };
    default:
      return state;
  }
};

export { userReducer };
