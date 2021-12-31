import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const appConfiguration = registerAs('app', () => ({
  type: process.env.API_TYPE,
  protocol: process.env.API_PROTOCOL,
  host: process.env.API_HOST,
  port: Number(process.env.API_PORT),
  prefix: process.env.API_PREFIX,
  integration: process.env.API_INTEGRATION,

  get domain(): string {
    return `${this.protocol}://${this.host}:${this.port}`;
  },

  get path(): string {
    return `${this.prefix}`;
  },
}));

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
