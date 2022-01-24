import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

import { ApiType, GlobalPrefix } from '@wwwsolutions/api/config/app';

const generateGlobalPrefix = (apiType: string): GlobalPrefix =>
  apiType === ApiType.REST_API ? GlobalPrefix.API : GlobalPrefix.GRAPHQL;

export const swaggerConfiguration = registerAs('swagger', () => ({
  type: process.env.API_TYPE,
  protocol: process.env.API_PROTOCOL,
  host: process.env.API_HOSTNAME,
  port: Number(process.env.API_PORT),
  swaggerUiDir: process.env.SWAGGER_UI_DIR,

  get domain(): string {
    return `${this.protocol}://${this.host}:${this.port}`;
  },

  get prefix(): string {
    return generateGlobalPrefix(`${this.type}`);
  },

  get swaggerUIPath(): string {
    return `/${this.prefix}/${this.swaggerUiDir}`;
  },
}));

export type SwaggerConfiguration = ConfigType<typeof swaggerConfiguration>;

export const InjectSwaggerConfig = () => Inject(swaggerConfiguration.KEY);
