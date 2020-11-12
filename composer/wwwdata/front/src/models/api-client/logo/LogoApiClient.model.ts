import { AxiosResponse } from 'axios';
import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client';
import { LogoApiClientUrlsInterface } from './LogoApiClientUrls.interface';
import { LogoApiClientInterface } from './LogoApiClient.interface';
import { Logo } from '@/models/logo/Logo.interface';

/**
 * @Name ThemeApiClientModel
 * @description
 * Implementa a interface ThemeApiClientInterface
 */
export class LogoApiClientModel implements LogoApiClientInterface {
  private readonly urls!: LogoApiClientUrlsInterface;

  constructor(urls: LogoApiClientUrlsInterface) {
    this.urls = urls;
  }

  updateLogo(logo: Logo): Promise<AxiosResponse> {
    const params: HttpRequestParamsInterface = {
      url: this.urls.updateLogo,
      requiresToken: false,
      payload: logo,
    };

    return HttpClient.post(params);
  }
}
