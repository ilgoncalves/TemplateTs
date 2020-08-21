import {
  UserTypesEnum,
  ISetUser,
  IClearUser,
  IGetUserPayload,
  IGetUserById
} from './types';

import { action } from '~/store/helpers/actionHelper';
import { IUserData } from '~/services/models/User';

const UserActions = {
  setUser: (payload: IUserData,): ISetUser => action(
    UserTypesEnum.SET_USER,
    payload
  ),
  getUserById: (payload: IGetUserPayload,): IGetUserById => action(
    UserTypesEnum.GET_USER_BY_ID_TRIGGER,
    payload
  ),
  clearState: (): IClearUser => action(
    UserTypesEnum.CLEAR_USER_STATE
  ),
};

export { UserActions };
