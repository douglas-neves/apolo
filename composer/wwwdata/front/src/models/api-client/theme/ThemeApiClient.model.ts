import { HttpClient, HttpRequestParamsInterface } from '@/models/http-client';

import { ThemeApiClientUrlsInterface } from './ThemeApiClientUrls.interface';
import { ThemeApiClientInterface } from './ThemeApiClient.interface';
import { Theme } from '@/models/theme/Theme.interface';
import { Response } from '@/models/response/Response.model';

/**
 * @Name ThemeApiClientModel
 * @description
 * Implementa a interface ThemeApiClientInterface
 */
export class ThemeApiClientModel implements ThemeApiClientInterface {
  private readonly urls!: ThemeApiClientUrlsInterface;

  constructor(urls: ThemeApiClientUrlsInterface) {
    this.urls = urls;
  }

  fetchTheme(): Promise<Response<Theme>> {
    const getParameters: HttpRequestParamsInterface = {
      url: this.urls.fetchTheme,
      requiresToken: false,
    };

    return HttpClient.get<Response<Theme>>(getParameters).then((data) => {
      data.data = new Theme(data.data);

      return data;
    });
  }
}
