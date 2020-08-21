import { Alert } from 'react-native';
import { AxiosResponse } from 'axios';
import { takeLatest, put, call } from 'redux-saga/effects';
import { IGetUserPayload, IGetUserById, UserTypesEnum } from './types';
import { UserActions } from './actions';
import callApi from '~/services/api';
import { IUserData } from '~/services/models/User';
import { HttpMethodEnum } from '~/services/interfaces/Request';

function* getUserById({ payload: { USR_Id } }: IGetUserById) {
  try {
    const params: IGetUserPayload = {
      USR_Id
    };
    const { data }: AxiosResponse<IUserData> = yield call(callApi, {
      endpoint: '/SomeEndpoint',
      method: HttpMethodEnum.get,
      params,
    });
    yield put(UserActions.setUser(data));

  } catch (err) {
    Alert.alert('Error', 'Algo de errado aconteceu !');
  }
}

export default function* userSaga() {
  yield takeLatest(UserTypesEnum.GET_USER_BY_ID_TRIGGER, getUserById);
}
