import { Configuration, ConfigurationParameters } from 'src/api/runtime';
import { PresetControllerApi } from 'src/api/apis';

const parameters: ConfigurationParameters = {
  basePath:
    location.protocol +
    '//' +
    location.hostname +
    (location.port ? ':' + location.port : ''),
};

const configuration = new Configuration(parameters);

export const presetApi = new PresetControllerApi(configuration);
