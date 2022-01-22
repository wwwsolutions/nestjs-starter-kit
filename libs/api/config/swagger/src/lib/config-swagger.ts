import chalk from 'chalk';
import { INestApplication, Logger } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import {
  swaggerConfiguration,
  SwaggerConfiguration,
} from '@wwwsolutions/api/config/app';

export function configureSwagger(app: INestApplication) {
  const { domain, swaggerUIPath } = app.get<SwaggerConfiguration>(
    swaggerConfiguration.KEY
  );

  const swaggerDocOptions = new DocumentBuilder()
    .setTitle('Nx Article API')
    .setDescription('Nx Article API Docs')
    .setVersion('1.0.0')
    .addServer(domain, 'development')
    .build();

  const swaggerDoc = SwaggerModule.createDocument(app, swaggerDocOptions);

  SwaggerModule.setup(swaggerUIPath, app, swaggerDoc);

  return { configFnName: configureSwagger.name, domain, swaggerUIPath };
}
