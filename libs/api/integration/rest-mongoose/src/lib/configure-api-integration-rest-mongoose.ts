import chalk from 'chalk';
import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { configureSwagger } from '../lib/swagger/configure-swagger';

import { HttpExceptionFilter } from '@wwwsolutions/shared/utils';

// import { RestMongoose } from '@wwwsolutions/api/config/app';

// CONFIGURATION SPECIFIC TO THIS INTEGRATION
export function configureApiIntegrationRestMongoose(
  app: INestApplication,
  integration: string
) {
  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                  ENABLE CUSTOM LOGGER                      ▓
  █▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅█
  */

  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  Logger.log(
    chalk.gray(`🔒 ${chalk.bgYellow.black(integration)} start`),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );

  Logger.log(
    chalk.gray(
      `🔒 ${chalk.bgYellow.black('Custom Logger: Winston')} implemented`
    ),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                     ENABLE SWAGGER                         ▓
  █▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅█
  */

  const swagger = configureSwagger(app);

  Logger.log(
    chalk.gray(
      `🔒 ${chalk.bgYellow.black(
        `Swagger Docs: ${swagger.domain}${swagger.swaggerUIPath}`
      )} implemented`
    ),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓            ENABLE CUSTOM GLOBAL ERROR HANDLING             ▓
  █▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅█
  */

  app.useGlobalFilters(new HttpExceptionFilter());

  Logger.log(
    chalk.gray(
      `🔒 ${chalk.bgYellow.black(
        'Global Exception Filter: HttpExceptionFilter'
      )} implemented`
    ),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                  ENABLE GLOBAL PIPES                       ▓
  █▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅█
  */

  app.useGlobalPipes(new ValidationPipe());

  Logger.log(
    chalk.gray(
      `🔒 ${chalk.bgYellow.black('Global Pipes: ValidationPipe')} implemented`
    ),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );

  Logger.log(
    chalk.gray(`🔒 ${chalk.bgYellow.black(integration)} done`),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );
}
