import { HttpRequestParamsInterface } from './HttpRequestParams.interface';

/**
 * @Name HttpClientInterface
 * @description
 * Interface para o nosso HttpClient wrapper
 */
export interface HttpClientInterface {
  get<T>(parameters: HttpRequestParamsInterface): Promise<T>;
  post<T>(parameters: HttpRequestParamsInterface): Promise<T>;
}
