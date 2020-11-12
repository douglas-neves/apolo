import { AxiosRequestConfig } from 'axios';
import { RequestInterceptor } from '.';

export default class Sample implements RequestInterceptor {
  public handle(requestConfig: AxiosRequestConfig): AxiosRequestConfig {
    const authToken = localStorage.getItem('rocket-token');
    if (authToken) {
      requestConfig.headers.Authorization = `Bearer ${authToken}`;
    }

    return requestConfig;
  }
}
