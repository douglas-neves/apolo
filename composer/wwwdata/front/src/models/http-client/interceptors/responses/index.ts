import { AxiosResponse } from 'axios';
import ParseResponse from './ParseResponse';
import Auth from './Auth';
import { Response } from '@/models/response/Response.model';

export interface ResponseInterceptor {
  /**
   * Intercepta a requisicao.
   *
   * @param {AxiosRequestConfig} config
   * @return {AxiosRequestConfig}
   */
  handle(response: AxiosResponse): AxiosResponse<Response>;
}

export { ParseResponse, Auth };
