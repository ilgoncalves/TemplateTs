/**
 * Types definitions
 */

import { IUserData } from "~/services/models/User";

export enum UserTypesEnum {
  SET_USER = 'SET_USER',
  GET_USER_BY_ID_TRIGGER = 'GET_USER_BY_ID_TRIGGER',

  CLEAR_USER_STATE = 'CLEAR_USER_STATE',
}

/**
 * State interface
 */
export interface IUserState {
  readonly user: IUserData | null
}

/**
 * Payloads for sagas
 */
export interface IGetUserPayload {
  USR_Id: number
}

/**
 * Actions types interfaces for reducers
 */
export interface ISetUser {
  type: typeof UserTypesEnum.SET_USER
  payload: IUserData
}

export interface IClearUser {
  type: typeof UserTypesEnum.CLEAR_USER_STATE
}

/**
 * Actions types interfaces for sagas
 */
export interface IGetUserById {
  type: typeof UserTypesEnum.GET_USER_BY_ID_TRIGGER
  payload: IGetUserPayload
}

/**
 * Actions type
 */

export type UserActionsType =
  ISetUser |
  IClearUser |
  IGetUserById
