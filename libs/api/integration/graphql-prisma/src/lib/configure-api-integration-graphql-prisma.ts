import { INestApplication, Logger, ValidationPipe } from '@nestjs/common';
import { WINSTON_MODULE_NEST_PROVIDER } from 'nest-winston';

import { AllExceptionsFilter } from '@wwwsolutions/shared/utils';
import { HttpAdapterHost } from '@nestjs/core';

// CONFIGURATION SPECIFIC TO THIS INTEGRATION
export function configureApiIntegrationGraphqlPrisma(
  app: INestApplication,
  integration: string
) {
  // CUSTOM LOGGER
  app.useLogger(app.get(WINSTON_MODULE_NEST_PROVIDER));

  Logger.log(
    `🔒 ${integration} start`,
    configureApiIntegrationGraphqlPrisma.name
  );

  Logger.log(
    `🔒 app.useLogger implemented`,
    configureApiIntegrationGraphqlPrisma.name
  );

  // CUSTOM GLOBAL ERROR HANDLING
  const { httpAdapter } = app.get(HttpAdapterHost);
  app.useGlobalFilters(new AllExceptionsFilter(httpAdapter as never));
  Logger.log(
    `🔒 app.useGlobalFilters implemented`,
    configureApiIntegrationGraphqlPrisma.name
  );

  // CUSTOM GLOBAL PIPES // TODO: fix
  app.useGlobalPipes(new ValidationPipe());

  Logger.log(
    `🔒 ${integration} done`,
    configureApiIntegrationGraphqlPrisma.name
  );
}
