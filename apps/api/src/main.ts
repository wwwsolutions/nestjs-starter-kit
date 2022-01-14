import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app/app.module';

import {
  EnvironmentConfiguration,
  environmentConfiguration,
  AppConfiguration,
  appConfiguration,
  Env,
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
  environment && app.enableCors();

  // SET GLOBAL PREFIX
  prefix && app.setGlobalPrefix(prefix);

  // ENABLE/CONFIGURE API INTEGRATION
  integrationType && configureApiIntegrationGraphqlPrisma(app, integrationType);

  // PRODUCTION SERVER
  environment &&
    (await app.listen(port, () => {
      Logger.log(`🚀 Server ready at: ${domain}/${path}`, bootstrap.name);
      Logger.log(
        `🚀 Running ${type} API, in ${environment} mode`,
        bootstrap.name
      );
    }));
}

bootstrap();
