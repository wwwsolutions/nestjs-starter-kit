import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import chalk from 'chalk';

import { AppModule } from './app/app.module';

import {
  EnvironmentConfiguration,
  environmentConfiguration,
  AppConfiguration,
  appConfiguration,
  Env,
  Integration,
  // configureApiGraphqlPrismaIntegration,
} from '@wwwsolutions/api/config/app';

import { configureApiIntegrationGraphqlPrisma } from '@wwwsolutions/api/integration/graphql-prisma';

import { DebugUtils } from '@wwwsolutions/shared/utils';

// HELPER --> DEBUG ENV VARIABLES
// const envLocalPath = path.resolve('apps/api/.env.local');
// const envDevelopmentPath = path.resolve('apps/api/.env.development');

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
  const { integrationType, type, domain, path, prefix, port } =
    app.get<AppConfiguration>(appConfiguration.KEY);

  // MIDDLEWARE

  // ENABLE CORS
  if (environment) {
    app.enableCors();
  }

  // SET GLOBAL PREFIX
  if (prefix) {
    app.setGlobalPrefix(prefix);
  }

  // ENABLE/CONFIGURE API INTEGRATION
  if (integrationType === Integration.GRAPHQL_PRISMA)
    configureApiIntegrationGraphqlPrisma(app, integrationType);

  // PRODUCTION SERVER
  await app.listen(port, () => {
    Logger.log(
      chalk.gray(
        `🚀 Server ready at: ${chalk.bgYellow.black(domain + '/' + path)}`
      ),
      chalk.gray(bootstrap.name)
    );

    Logger.log(
      chalk.gray(
        `🚀 Running ${type} API, in ${chalk.bgYellow.black(environment)} mode`
      ),
      chalk.gray(bootstrap.name)
    );
  });
}

bootstrap();
