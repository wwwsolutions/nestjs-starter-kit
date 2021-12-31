import * as path from 'path';
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import {
  EnvironmentConfiguration,
  environmentConfiguration,
  AppConfiguration,
  appConfiguration,
} from '@wwwsolutions/api/config/app';

// DEBUG ENV VARIABLES
const envLocalPath = path.resolve('apps/api/.env.local');
const envDevelopmentPath = path.resolve('apps/api/.env.development');

async function bootstrap() {
  // DEBUG ENV VARIABLES
  Logger.log(envLocalPath, bootstrap.name);
  Logger.log(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config({
      debug: true,
      path: envLocalPath,
    }),
    bootstrap.name
  );
  Logger.log(envDevelopmentPath, bootstrap.name);
  Logger.log(
    // eslint-disable-next-line @typescript-eslint/no-var-requires
    require('dotenv').config({
      debug: true,
      path: envDevelopmentPath,
    }),
    bootstrap.name
  );

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
  // configureApiGraphqlPrismaIntegration(app, integration as string);

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
