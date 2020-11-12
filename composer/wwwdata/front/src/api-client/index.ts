import { ApiClientInterface } from '@/models/api-client/ApiClient.interface';
import ThemeApiClient from './theme';
import LogoApiClient from './logo';

const apiClient: ApiClientInterface = {
  theme: ThemeApiClient,
  logo: LogoApiClient,
};

export default apiClient;
