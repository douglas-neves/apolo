import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { HttpRequestParamsInterface } from './HttpRequestParams.interface';
import { HttpClientInterface } from './HttpClient.interface';
import { config } from '@/config';
import { RequestInterceptor, Sample } from './interceptors/requests';
import {
  ResponseInterceptor,
  ParseResponse,
  Auth,
} from './interceptors/responses';
import { Response } from '@/models/response/Response.model';

/**
 * @name HttpClientModel
 * @description
 * Encapsula o cliente http para não utilizar diretamente um pacote third party como o axios
 * e simplifica a substituicão em um futuro caso o pacote pare de receber atualizacṍes/suporte
 */
export class HttpClientModel implements HttpClientInterface {
  private requestInterceptors: RequestInterceptor[] = [];
  private responseInterceptors: ResponseInterceptor[] = [];
  private options: AxiosRequestConfig = {};

  /**
   * Recupera o token de autenticacao
   */
  private getToken(): string {
    const TOKEN_KEY = config.httpClient.tokenKey || 'rocket-token';
    const token = localStorage.getItem(TOKEN_KEY) || '';
    return token;
  }

  /**
   * Inlcui os manipuladores de requisicões nas configuracoes do axios
   * @return {void}
   */
  private handleRequests(): void {
    this.requestInterceptors.push(new Sample());
    axios.interceptors.request.use((config: AxiosRequestConfig) => {
      this.requestInterceptors.forEach((interceptor: RequestInterceptor) => {
        config = interceptor.handle(config);
      });

      return config;
    });
  }

  /**
   * Inlcui os manipuladores de resposta nas configuracões do axios
   * @return {void}
   */
  private handleResponses(): void {
    this.responseInterceptors.push(new ParseResponse(), new Auth());
    axios.interceptors.response.use((response: AxiosResponse<Response>) => {
      this.responseInterceptors.forEach((interceptor: ResponseInterceptor) => {
        response = interceptor.handle(response);
      });

      return response;
    });
  }

  /**
   * Inclui os interceptors definidos
   * @return {void}
   */
  private setInterceptors(): void {
    this.handleRequests();
    this.handleResponses();
  }

  constructor() {
    this.setInterceptors();
  }

  /**
   * Retorna as opcoes para definir
   * @param requiresToken
   */
  private setOptions(requiresToken: boolean): void {
    const options: AxiosRequestConfig = {
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
    };

    if (requiresToken) {
      const token = this.getToken();
      options.headers.Authorization = `Bearer ${token}`;
    }

    this.options = options;
  }

  get<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken } = parameters;
      this.setOptions(requiresToken);

      axios
        .get(url, this.options)
        .then((response: AxiosResponse) => {
          resolve(response.data as T);
        })
        .catch((error: AxiosResponse) => {
          console.info('------ rejecting ----');
          reject(error);
        });
    });
  }

  public post<T>(parameters: HttpRequestParamsInterface): Promise<T> {
    return new Promise<T>((resolve, reject) => {
      const { url, requiresToken, payload } = parameters;
      this.setOptions(requiresToken);

      axios
        .post(url, payload, this.options)
        .then((response: AxiosResponse) => {
          /* eslint-disable @typescript-eslint/no-explicit-any */
          resolve(response as any);
        })
        .catch((error: AxiosResponse) => {
          console.info('------ rejecting ----');
          reject(error);
        });
    });
  }
}
