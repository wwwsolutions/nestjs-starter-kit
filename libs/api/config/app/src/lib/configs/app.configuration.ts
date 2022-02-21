import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

import {
  ApiHostname,
  ApiIntegration,
  ApiPrefix,
  ApiProtocol,
  ApiType,
  ApiPort,
  graphqlPrismaPostgresIntegration,
  restMongooseIntegration,
} from '@wwwsolutions/api/common/types';

// API_INTEGRATION='GraphQL-Prisma-Postgres-Integration'
// API_INTEGRATION='Rest-Mongoose-Integration'

export const generateApiType = (integration: ApiIntegration): ApiType =>
  integration.split('-')[0] as ApiType;

export const generateGlobalPrefix = (apiType: string): ApiPrefix | string =>
  apiType === graphqlPrismaPostgresIntegration.type
    ? graphqlPrismaPostgresIntegration.prefix
    : 'api';

export const generateLabel = (integration: ApiIntegration): string =>
  integration
    .split('-')
    .map((word: string) => word.charAt(0))
    .join('');

export const appConfiguration = registerAs('app', () => ({
  integration: process.env.API_INTEGRATION as ApiIntegration,
  protocol: process.env.API_PROTOCOL as ApiProtocol,
  hostname: process.env.API_HOSTNAME as ApiHostname,
  port: Number(process.env.API_PORT),

  get apiType() {
    if (!this.integration) throw `env variable 'API_INTEGRATION' is undefined`;
    return generateApiType(this.integration);
  },

  get globalPrefix() {
    return generateGlobalPrefix(this.apiType);
  },

  get path() {
    return this.globalPrefix;
  },

  get domain() {
    return `${this.protocol}://${this.hostname}:${this.port}`;
  },

  get label() {
    if (!this.integration) throw `env variable 'API_INTEGRATION' is undefined`;
    return generateLabel(this.integration);
  },
}));

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
