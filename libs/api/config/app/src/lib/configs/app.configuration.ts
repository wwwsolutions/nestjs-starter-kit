import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import { ApiType, GlobalPrefix } from '../constants/api.constants';

// const generateGlobalPrefix = (apiType: string): GlobalPrefix => {
//   if (apiType === ApiType.REST_API) return GlobalPrefix.API;
//   return GlobalPrefix.GRAPHQL;
// };

const generateGlobalPrefix = (apiType: string): GlobalPrefix =>
  apiType === ApiType.REST_API ? GlobalPrefix.API : GlobalPrefix.GRAPHQL;

export const appConfiguration = registerAs('app', () => ({
  type: process.env.API_TYPE,
  integration: process.env.API_INTEGRATION,
  protocol: process.env.API_PROTOCOL,
  host: process.env.API_HOST,
  port: Number(process.env.API_PORT),

  get domain(): string {
    return `${this.protocol}://${this.host}:${this.port}`;
  },

  get prefix(): string {
    return generateGlobalPrefix(`${this.type}`);
  },

  get path(): string {
    return `${this.prefix}`;
  },
}));

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
