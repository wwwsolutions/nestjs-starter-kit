import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import { ApiType, GlobalPrefix } from '../constants/app.constants';

const generateGlobalPrefix = (apiType: string): GlobalPrefix =>
  apiType === ApiType.REST_API ? GlobalPrefix.API : GlobalPrefix.GRAPHQL;

export const appConfiguration = registerAs('app', () => ({
  type: process.env.API_TYPE,
  integrationType: process.env.API_INTEGRATION_TYPE,

  protocol: process.env.API_PROTOCOL,
  host: process.env.API_HOSTNAME,
  port: Number(process.env.API_PORT),

  get domain(): string {
    return `${this.protocol}://${this.host}:${this.port}`;
  },

  get prefix(): string {
    return generateGlobalPrefix(`${this.type}`);
  },

  get path(): string {
    return this.prefix;
  },
}));

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
