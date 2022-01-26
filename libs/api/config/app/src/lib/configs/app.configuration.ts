import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import {
  ApiConfiguration,
  ApiType,
  GlobalPrefix,
  Label,
} from '../constants/app.constants';

export const generateGlobalPrefix = (apiType: string): GlobalPrefix =>
  apiType === ApiType.REST_API ? GlobalPrefix.API : GlobalPrefix.GRAPHQL;

export const appConfiguration = registerAs(
  'app',
  () =>
    ({
      type: process.env.API_TYPE,
      integration: process.env.API_INTEGRATION,
      label: process.env.API_INTEGRATION_LABEL,
      protocol: process.env.API_PROTOCOL,
      hostname: process.env.API_HOSTNAME,
      port: Number(process.env.API_PORT),

      get domain() {
        return `${this.protocol}://${this.hostname}:${this.port}`;
      },

      get globalPrefix() {
        return generateGlobalPrefix(`${this.type}`);
      },

      get path() {
        return this.globalPrefix;
      },
    } as ApiConfiguration)
);

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
