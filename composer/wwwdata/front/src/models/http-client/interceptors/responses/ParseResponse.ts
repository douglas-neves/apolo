import { AxiosResponse } from 'axios';
import { ResponseInterceptor } from '.';
import { Response } from '@/models/response/Response.model';

export default class ParseResponse implements ResponseInterceptor {
  /**
   * Manipula o objeto data para retornar as respostas no padrão da API
   * @param response
   */
  public handle(response: AxiosResponse): AxiosResponse {
    const method = response.config.method as string;

    if (method.toLowerCase() === 'get') {
      response.data = new Response(response.data);
    }

    return response;
  }
}
