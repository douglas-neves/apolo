import {
  LogoApiClientUrlsInterface,
  LogoApiClientInterface,
  LogoApiClientModel,
} from '@/models/api-client/logo';

import { config } from '@/config';

const urls: LogoApiClientUrlsInterface = config.logo.apiUrls;
const LogoApiClient: LogoApiClientInterface = new LogoApiClientModel(urls);
export default LogoApiClient;
