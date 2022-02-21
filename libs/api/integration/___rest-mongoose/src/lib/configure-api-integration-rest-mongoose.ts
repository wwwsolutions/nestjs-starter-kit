import chalk from 'chalk';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { configureSwagger } from '../lib/swagger/configure-swagger';

import {
  chalkConfiguration,
  ChalkConfiguration,
} from '@wwwsolutions/api/config/app';

import { HttpExceptionFilter } from '@wwwsolutions/shared/utils';

// CONFIGURATION SPECIFIC TO THIS INTEGRATION
export function configureApiIntegrationRestMongoose(
  app: INestApplication,
  integration: string
) {
  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓             ENABLE COLORING CONSOLE OUTPUT                 ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  const chalk = app.get<ChalkConfiguration>(chalkConfiguration.KEY);

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                  ENABLE CUSTOM LOGGER                      ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  Logger.log(
    chalk.success(`🔒 ${chalk.warning(integration)} start`),
    chalk.info(configureApiIntegrationRestMongoose.name)
  );

  Logger.log(
    chalk.success(`🔒 ${chalk.warning('Custom Logger: Winston')} implemented`),
    chalk.info(configureApiIntegrationRestMongoose.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                     ENABLE SWAGGER                         ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  const swagger = configureSwagger(app);

  Logger.log(
    chalk.success(
      `🔒 ${chalk.warning(
        `Swagger Docs: ${chalk.warningClickable(
          swagger.domain + swagger.swaggerUIPath
        )}`
      )} implemented`
    ),
    chalk.info(configureApiIntegrationRestMongoose.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓            ENABLE CUSTOM GLOBAL ERROR HANDLING             ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  app.useGlobalFilters(new HttpExceptionFilter());

  Logger.log(
    chalk.success(
      `🔒 ${chalk.warning(
        'Global Exception Filter: HttpExceptionFilter'
      )} implemented`
    ),
    chalk.info(configureApiIntegrationRestMongoose.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                  ENABLE GLOBAL PIPES                       ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  app.useGlobalPipes(new ValidationPipe());

  Logger.log(
    chalk.success(
      `🔒 ${chalk.warning('Global Pipes: ValidationPipe')} implemented`
    ),
    chalk.info(configureApiIntegrationRestMongoose.name)
  );

  Logger.log(
    chalk.success(`🔒 ${chalk.warning(integration)} done`),
    chalk.info(configureApiIntegrationRestMongoose.name)
  );
}
