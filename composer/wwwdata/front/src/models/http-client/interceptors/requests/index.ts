import { AxiosRequestConfig } from 'axios';
import Sample from './Sample';

export interface RequestInterceptor {
  /**
   * Intercepta a request.
   *
   * @param {AxiosRequestConfig} config
   * @return {AxiosRequestConfig}
   * */
  handle(config: AxiosRequestConfig): AxiosRequestConfig;
}

export { Sample };
