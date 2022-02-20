import { ConfigFactory, ConfigObject } from '@nestjs/config';

export type Configs = ConfigFactory<ConfigObject>[] | undefined;
