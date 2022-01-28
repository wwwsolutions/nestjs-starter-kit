import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import chalk from 'chalk';

import { AppModule } from './app/app.module';

import {
  EnvironmentConfiguration,
  environmentConfiguration,
  AppConfiguration,
  appConfiguration,
  graphqlPrisma,
  restMongoose,
} from '@wwwsolutions/api/config/app';

import { configureApiIntegrationGraphqlPrisma } from '@wwwsolutions/api/integration/graphql-prisma';
import { configureApiIntegrationRestMongoose } from '@wwwsolutions/api/integration/rest-mongoose';

import { DebugUtils } from '@wwwsolutions/shared/utils';

async function bootstrap() {
  // HELPER --> DEBUG ENV VARIABLES
  DebugUtils.debugEnvVariables('apps/api/.env.local', bootstrap.name);
  DebugUtils.debugEnvVariables('apps/api/.env.development', bootstrap.name);

  // APPLICATION
  const app = await NestFactory.create(AppModule);

  // ENVIRONMENT CONFIGURATION
  const { env: environment } = app.get<EnvironmentConfiguration>(
    environmentConfiguration.KEY
  );

  // APPLICATION CONFIGURATION
  const { integration, type, domain, path, globalPrefix, port } =
    app.get<AppConfiguration>(appConfiguration.KEY);

  /******************************************************
   *                  ENABLE CORS                       *
   ******************************************************/
  if (environment) {
    app.enableCors();
  }

  /******************************************************
   *              SET GLOBAL PREFIX                     *
   ******************************************************/
  if (globalPrefix) {
    app.setGlobalPrefix(globalPrefix);
  }

  /******************************************************
   *        ENABLE/CONFIGURE API INTEGRATION            *
   ******************************************************/
  if (integration === graphqlPrisma.integration)
    configureApiIntegrationGraphqlPrisma(app, graphqlPrisma.integration);

  if (integration === restMongoose.integration)
    configureApiIntegrationRestMongoose(app, restMongoose.integration);

  // SERVER
  await app.listen(port, () => {
    Logger.log(
      chalk.gray(
        `🚀 Server ready at: ${chalk.bgYellow.black(domain + '/' + path)}`
      ),
      chalk.gray(bootstrap.name)
    );

    Logger.log(
      chalk.gray(
        `🚀 Running ${chalk.bgYellow.black(
          type
        )} API, in ${chalk.bgYellow.black(environment)} mode`
      ),
      chalk.gray(bootstrap.name)
    );
  });
}

bootstrap();
