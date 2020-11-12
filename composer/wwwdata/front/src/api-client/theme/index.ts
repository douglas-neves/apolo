import {
  ThemeApiClientUrlsInterface,
  ThemeApiClientInterface,
  ThemeApiClientModel,
} from '@/models/api-client/theme';

import { config } from '@/config';

const urls: ThemeApiClientUrlsInterface = config.theme.apiUrls;
const ThemeApiClient: ThemeApiClientInterface = new ThemeApiClientModel(urls);
export default ThemeApiClient;
