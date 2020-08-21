export interface IRequest {
  headers?: {};
  method: HttpMethodEnum;
  endpoint: string;
  params?: {};
  body?: {};
  showRequestLog?: boolean;
}

export enum HttpMethodEnum {
  post = 'POST',
  put = 'PUT',
  get = 'GET',
  delete = 'DELETE'
}
