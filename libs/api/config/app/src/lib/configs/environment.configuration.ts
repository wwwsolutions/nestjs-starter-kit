import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const environmentConfiguration = registerAs('environment', () => ({
  // https://stackoverflow.com/questions/58090082/process-env-node-env-always-development-when-building-nestjs-environment-with-nrwl-nx
  env: process.env['NODE' + '_ENV'],
}));

export type EnvironmentConfiguration = ConfigType<
  typeof environmentConfiguration
>;

export const InjectEnvironmentConfig = () =>
  Inject(environmentConfiguration.KEY);
