import { AxiosResponse } from 'axios';
import { ResponseInterceptor } from './index';
import { Response } from '@/models/response/Response.model';

export default class UpdateToken implements ResponseInterceptor {
  public handle(
    response: AxiosResponse<Response>
  ): AxiosResponse<Response> {
    const token = false;
    if (token) {
      localStorage.setItem('rocket-token', token);
    }
    console.info('Atualizando o token através do middware de response');
    return response;
  }
}
