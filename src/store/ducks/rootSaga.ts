import { all, AllEffect, ForkEffect } from 'redux-saga/effects';
import { userSaga } from './user';

export default function* rootSaga(): Generator<AllEffect<Generator<ForkEffect<never>, void, unknown>>> {
  yield all([
    userSaga(),
  ]);
}
