import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { AllExceptionsFilter } from '@wwwsolutions/shared/utils';
import { HttpAdapterHost } from '@nestjs/core';
import chalk from 'chalk';

// CONFIGURATION SPECIFIC TO THIS INTEGRATION
export function configureApiIntegrationRestMongoose(
  app: INestApplication,
  integrationType: string
) {
  /******************************************************
   *            ENABLE CUSTOM LOGGER                    *
   ******************************************************/
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  Logger.log(
    chalk.gray(`🔒 ${chalk.bgYellow.black(integrationType)} start`),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );

  Logger.log(
    chalk.gray(`🔒 ${chalk.bgYellow.black('Custom Logger')} implemented`),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );

  /******************************************************
   *      ENABLE CUSTOM GLOBAL ERROR HANDLING           *
   ******************************************************/
  // TODO: fix --> to work with graphql
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter as never));

  Logger.log(
    chalk.gray(`🔒 ${chalk.bgYellow.black('Global Filters')} implemented`),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );

  /******************************************************
   *              ENABLE GLOBAL PIPES                   *
   ******************************************************/
  app.useGlobalPipes(new ValidationPipe());

  Logger.log(
    chalk.gray(`🔒 ${chalk.bgYellow.black(integrationType)} done`),
    chalk.gray(configureApiIntegrationRestMongoose.name)
  );
}
