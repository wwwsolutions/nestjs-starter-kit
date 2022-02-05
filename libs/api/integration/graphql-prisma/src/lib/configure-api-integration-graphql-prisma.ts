import {
  INestApplication,
  Logger,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { HttpAdapterHost } from '@nestjs/core';
import { UserInputError } from 'apollo-server-express';

import {
  chalkConfiguration,
  ChalkConfiguration,
} from '@wwwsolutions/api/config/app';

import { AllExceptionsFilter } from '@wwwsolutions/shared/utils';

// CONFIGURATION SPECIFIC TO THIS INTEGRATION
export function configureApiIntegrationGraphqlPrisma(
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
    chalk.info(configureApiIntegrationGraphqlPrisma.name)
  );

  Logger.log(
    chalk.success(`🔒 ${chalk.warning('Custom Logger: Winston')} implemented`),
    chalk.info(configureApiIntegrationGraphqlPrisma.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓            ENABLE CUSTOM GLOBAL ERROR HANDLING             ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter as never));

  Logger.log(
    chalk.success(
      `🔒 ${chalk.warning(
        'Global Exception Filter: AllExceptionsFilter'
      )} implemented`
    ),
    chalk.info(configureApiIntegrationGraphqlPrisma.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                  ENABLE GLOBAL PIPES                       ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      exceptionFactory: (errors: ValidationError[]) => {
        return new UserInputError('VALIDATION_ERROR', {
          invalidArgs: errors,
        });
      },
    })
  );

  Logger.log(
    chalk.success(
      `🔒 ${chalk.warning('Global Pipes: ValidationPipe')} implemented`
    ),
    chalk.info(configureApiIntegrationGraphqlPrisma.name)
  );

  Logger.log(
    chalk.success(`🔒 ${chalk.warning(integration)} done`),
    chalk.info(configureApiIntegrationGraphqlPrisma.name)
  );
}
