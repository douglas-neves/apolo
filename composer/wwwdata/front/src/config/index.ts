import { ConfigInterface } from './Config.interface';

// Configuracoes de ambiente individuais:
import configMock from './config-files/mock.json';
import configLocal from './config-files/local.json';
import configBeta from './config-files/beta.json';
import configLive from './config-files/live.json';

// A configuracão definida é baseada na variavel VUE_APP_CONFIG
let env = 'mock'; /* Por padrão o ambiente levantado será o de mock */

// Se a variável VUE_APP_CONFIG estiver definida no arquivo de env, recuperamos o valor e tratamos
if (process.env && process.env.VUE_APP_CONFIG) {
  env = process.env.VUE_APP_CONFIG.trim().toLowerCase();
}

const configsMap: { [key: string]: ConfigInterface } = {
  mock: configMock,
  local: configLocal,
  beta: configBeta,
  live: configLive,
};

if (!configsMap[env]) {
  throw Error(
    `Não foi possível encontrar configuracoes para VUE_APP_CONFIG key "${env}"`
  );
}

export const config: ConfigInterface = configsMap[env];
