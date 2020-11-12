import { ThemeApiClientInterface } from './api-client/theme';

/**
 * @Name ApiClientInterface
 * @description
 * Interface encapsula todos os modulos da API organizados em um só lugar
 */
export interface ApiClientInterface {
  theme: ThemeApiClientInterface;
}
