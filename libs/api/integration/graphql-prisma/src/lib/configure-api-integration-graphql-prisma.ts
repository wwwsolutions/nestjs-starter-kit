import {
  INestApplication,
  Logger,
  ValidationError,
  ValidationPipe,
} from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';
import { HttpAdapterHost } from '@nestjs/core';
import { UserInputError } from 'apollo-server-express';
import chalk from 'chalk';

import { AllExceptionsFilter } from '@wwwsolutions/shared/utils';

// CONFIGURATION SPECIFIC TO THIS INTEGRATION
export function configureApiIntegrationGraphqlPrisma(
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
    chalk.gray(configureApiIntegrationGraphqlPrisma.name)
  );

  Logger.log(
    chalk.gray(
      `🔒 ${chalk.bgYellow.black('Custom Logger: Winston')} implemented`
    ),
    chalk.gray(configureApiIntegrationGraphqlPrisma.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓            ENABLE CUSTOM GLOBAL ERROR HANDLING             ▓
  █▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅█
  */

  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter as never));

  Logger.log(
    chalk.gray(
      `🔒 ${chalk.bgYellow.black(
        'Global Exception Filter: AllExceptionsFilter'
      )} implemented`
    ),
    chalk.gray(configureApiIntegrationGraphqlPrisma.name)
  );

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                  ENABLE GLOBAL PIPES                       ▓
  █▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅▅█
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
    chalk.gray(
      `🔒 ${chalk.bgYellow.black('Global Pipes: ValidationPipe')} implemented`
    ),
    chalk.gray(configureApiIntegrationGraphqlPrisma.name)
  );

  Logger.log(
    chalk.gray(`🔒 ${chalk.bgYellow.black(integration)} done`),
    chalk.gray(configureApiIntegrationGraphqlPrisma.name)
  );
}
