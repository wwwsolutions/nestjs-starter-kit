import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import {
  ChalkConfiguration,
  chalkConfiguration,
  EnvironmentConfiguration,
  environmentConfiguration,
  AppConfiguration,
  appConfiguration,
  graphqlPrismaIntegration,
  restMongooseIntegration,
} from '@wwwsolutions/api/config/app';

import { configureApiIntegrationGraphqlPrisma } from '@wwwsolutions/api/integration/graphql-prisma';
import { configureApiIntegrationRestMongoose } from '@wwwsolutions/api/integration/rest-mongoose';

import { DebugUtils } from '@wwwsolutions/shared/utils';

async function bootstrap() {
  // HELPER --> DEBUG ENV VARIABLES
  // DebugUtils.debugEnvVariables('apps/api/.env.local', bootstrap.name);
  // DebugUtils.debugEnvVariables('apps/api/.env.development', bootstrap.name);

  // APPLICATION
  const app = await NestFactory.create(AppModule);

  // ENVIRONMENT CONFIGURATION
  const chalk = app.get<ChalkConfiguration>(chalkConfiguration.KEY);

  // ENVIRONMENT CONFIGURATION
  const { env: environment } = app.get<EnvironmentConfiguration>(
    environmentConfiguration.KEY
  );

  // APPLICATION CONFIGURATION
  const { integration, type, domain, path, globalPrefix, port } =
    app.get<AppConfiguration>(appConfiguration.KEY);

  /* 
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                     ENABLE CORS                            ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  if (environment) {
    app.enableCors();
  }

  /*
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓                  SET GLOBAL PREFIX                         ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  if (globalPrefix) {
    app.setGlobalPrefix(globalPrefix);
  }

  /*
  █▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀█
  ▓             ENABLE/CONFIGURE API INTEGRATION               ▓
  ▓▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▓
  */

  if (integration === graphqlPrismaIntegration.integration)
    configureApiIntegrationGraphqlPrisma(
      app,
      graphqlPrismaIntegration.integration
    );

  if (integration === restMongooseIntegration.integration)
    configureApiIntegrationRestMongoose(
      app,
      restMongooseIntegration.integration
    );

  // SERVER
  await app.listen(port, () => {
    Logger.log(
      chalk.success(
        `🚀 Server ready at: ${chalk.warning(domain + '/' + path)}`
      ),
      chalk.info(bootstrap.name)
    );

    Logger.log(
      chalk.success(
        `🚀 Running ${chalk.warning(type)} API, in ${chalk.warning(
          environment
        )} mode`
      ),
      chalk.info(bootstrap.name)
    );
  });
}

bootstrap();
