import { AxiosResponse } from 'axios';
import { Logo } from '@/models/logo/Logo.interface';

/**
 * @Name ItemsApiClientInterface
 * @description
 * Interface for the Items api client module
 */
export interface LogoApiClientInterface {
  updateLogo: (logo: Logo) => Promise<AxiosResponse>;
}
