import { ThemeApiClientUrlsInterface } from '@/models/api-client/theme';
import { LogoApiClientUrlsInterface } from '@/models/api-client/logo';
import { LocaleInfoInterface } from '@/models/localization/LocaleInfo.interface';

/**
 * @Name ConfigInterface
 * @description
 *
 */
export interface ConfigInterface {
  global: {
    // ... Coisas globais que nao sao especificas do dominio da aplicacao
  };

  locales: LocaleInfoInterface[];

  httpClient: {
    tokenKey: string;
  };

  theme: {
    apiUrls: ThemeApiClientUrlsInterface;
  };

  logo: {
    apiUrls: LogoApiClientUrlsInterface;
  };
}
