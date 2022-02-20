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
  // graphqlPrismaIntegration,
  // restMongooseIntegration,
} from '@wwwsolutions/api/config/app';

import {
  graphqlPrismaIntegration,
  restMongooseIntegration,
} from '@wwwsolutions/api/common/types';

import { configureApiIntegrationGraphqlPrismaPostgres } from '@wwwsolutions/api/integration/graphql-prisma-postgres/feature';
import { configureApiIntegrationRestMongoose } from '@wwwsolutions/api/integration/rest-mongoose';

import { DebugUtils } from '@wwwsolutions/shared/utils';

async function bootstrap() {
  // HELPER --> DEBUG ENV VARIABLES
  // DebugUtils.debugEnvVariables('apps/api/.env.local', bootstrap.name);
  // DebugUtils.debugEnvVariables('apps/api/.env.development', bootstrap.name);

  // APPLICATION
  const app = await NestFactory.create(AppModule);

  // CHALK CONFIGURATION
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
    configureApiIntegrationGraphqlPrismaPostgres(
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
    console.log(`
    
    [${chalk.info(bootstrap.name)}]
    
    🚀 Running ${chalk.warning(type)} API /w ${chalk.warning(
      integration
    )}, in ${chalk.warning(environment)} mode

    🚀 Server ready at: ${chalk.warningClickable(domain + '/' + path)}

    `);
  });
}

bootstrap();
