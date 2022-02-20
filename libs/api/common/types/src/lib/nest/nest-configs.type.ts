import { ConfigFactory, ConfigObject } from '@nestjs/config';

export type NestConfigs = ConfigFactory<ConfigObject>[] | undefined;
