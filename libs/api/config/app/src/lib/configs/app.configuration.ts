import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

import {
  ApiPrefix,
  graphqlPrismaIntegration,
  restMongooseIntegration,
} from '@wwwsolutions/api/common/types';

export const generateGlobalPrefix = (apiType: string): ApiPrefix =>
  apiType === restMongooseIntegration.type
    ? restMongooseIntegration.prefix
    : graphqlPrismaIntegration.prefix;

export const generateLabel = (apiIntegration: string): string =>
  apiIntegration
    .split('-')
    .map((word: string) => word.charAt(0))
    .join('');

export const generateApiType = (apiIntegration: string): string =>
  apiIntegration.split('-')[0];

export const appConfiguration = registerAs('app', () => ({
  integration: process.env.API_INTEGRATION,
  protocol: process.env.API_PROTOCOL,
  hostname: process.env.API_HOSTNAME,
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
    return generateLabel(`${this.integration}`);
  },
}));

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
