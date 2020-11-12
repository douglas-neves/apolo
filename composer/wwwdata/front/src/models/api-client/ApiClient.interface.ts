import { ThemeApiClientInterface } from './theme';
import { LogoApiClientInterface } from './logo';

/**
 * @Name ApiClientInterface
 * @description
 * Interface para encapsular todos os modulos da API client em um só lugar na intencão de manter o codigo organizado
 */
export interface ApiClientInterface {
  theme: ThemeApiClientInterface;
  logo: LogoApiClientInterface;
}
