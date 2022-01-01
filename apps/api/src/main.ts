import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import {
  EnvironmentConfiguration,
  environmentConfiguration,
  AppConfiguration,
  appConfiguration,
  // configureApiGraphqlPrismaIntegration,
} from '@wwwsolutions/api/config/app';

import { configureApiGraphqlPrismaIntegration } from '@wwwsolutions/api/core';

import { DebugUtils } from '@wwwsolutions/shared/utils';

// DEBUG ENV VARIABLES
// const envLocalPath = path.resolve('apps/api/.env.local');
// const envDevelopmentPath = path.resolve('apps/api/.env.development');

async function bootstrap() {
  // DEBUG ENV VARIABLES
  DebugUtils.debugEnvVariables('apps/api/.env.local', bootstrap.name);
  DebugUtils.debugEnvVariables('apps/api/.env.development', bootstrap.name);

  // APPLICATION
  const app = await NestFactory.create(AppModule);

  // APPLICATION CONFIGURATION
  const { env: environment } = app.get<EnvironmentConfiguration>(
    environmentConfiguration.KEY
  );

  const { integration, type, domain, path, prefix, port } =
    app.get<AppConfiguration>(appConfiguration.KEY);

  // MIDDLEWARE
  app.setGlobalPrefix(prefix as string);

  app.enableCors();

  // INTEGRATIONS
  configureApiGraphqlPrismaIntegration(app, integration as string);

  // SERVER
  await app.listen(port, () => {
    Logger.log(`🚀 Server ready at: ${domain}/${path}`, bootstrap.name);
    Logger.log(
      `🚀 Running ${type} API, in ${environment} mode`,
      bootstrap.name
    );
  });
}

bootstrap();
