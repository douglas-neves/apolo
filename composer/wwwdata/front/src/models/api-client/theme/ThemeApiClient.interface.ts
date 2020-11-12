import { Theme } from '@/models/theme/Theme.interface';
import { Response } from '@/models/response/Response.model';

/**
 * @Name ItemsApiClientInterface
 * @description
 * Interface for the Items api client module
 */
export interface ThemeApiClientInterface {
  fetchTheme: () => Promise<Response<Theme>>;
}
