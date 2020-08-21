import axios, { AxiosPromise } from 'axios';
import { IRequest } from '../interfaces/Request';
import { BASE_URL } from './config';

function callApi<T>({
  endpoint,
  method,
  body,
  headers,
  params,
  showRequestLog,
}: IRequest) {
  const url = BASE_URL + endpoint;
  const finalParams = {
    ...params,
  };

  if (showRequestLog) {
    console.log(`[${endpoint} - CALL API]`, {
      headers,
      method,
      url,
      params,
      body,
    });
  }

  const promise: AxiosPromise<T> = axios(url, {
    data: body,
    params: finalParams,
    headers,
    method,
  });
  return promise;
}

export default callApi;
