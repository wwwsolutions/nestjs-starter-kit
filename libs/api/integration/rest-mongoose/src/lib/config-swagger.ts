import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import { AppConfiguration } from '../configs/app.configuration';

export function configureSwagger(
  app: INestApplication,
  appConfig: AppConfiguration
) {
  const { domain, swaggerUIPath } = appConfig.api;

  const swaggerDocOptions = new DocumentBuilder()
    .setTitle('Nx Article API')
    .setDescription('Nx Article API Docs')
    .setVersion('1.0.0')
    .addServer(appConfig.api.domain, 'development')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerDocOptions);

  SwaggerModule.setup(swaggerUIPath, app, swaggerDoc);

  Logger.log(
    `🔶 Swagger Docs enabled: ${domain}${swaggerUIPath}`,
    'ApiRestConfiguration'
  );
}
