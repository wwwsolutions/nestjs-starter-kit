/* eslint-disable @typescript-eslint/no-explicit-any */
import { environmentConfiguration } from './configs/environment.configuration';
import { appConfiguration } from './configs/app.configuration';
import { winstonConfiguration } from './configs/winston.configuration';
import { chalkConfiguration } from './configs/chalk.configuration';

import { NestConfigs } from '@wwwsolutions/shared/types';

/*
█▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
▒	                                                                                               ▒
▒	 This is a configuration library powered by @nestjs/config and Joi.                            ▒
▒	 It loads environment variables from `.env.*` files and uses validation.schema for validation  ▒
▒	 which is also used to set default values. Finally, it exposes `ApiConfigAppModule` and        ▒
▒	 different configurations which can be consumed in different ways by the application.          ▒
▒	                                                                                               ▒
▒	 This library is required and encapsulates configurations for core application functionality.  ▒
▒	                                                                                               ▒
▒	 Register app configs.                                                                         ▒
▒	                                                                                               ▒
▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
*/

export const appConfigs: NestConfigs = [
  environmentConfiguration,
  appConfiguration,
  winstonConfiguration,
  chalkConfiguration,
];
