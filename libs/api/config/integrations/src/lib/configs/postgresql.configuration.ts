import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const postgresConfiguration = registerAs('postgresql', () => ({
  user: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  hostname: process.env.POSTGRES_HOSTNAME,
  dbName: process.env.POSTGRES_DB_NAME,
  port: Number(process.env.POSTGRES_PORT),

  get url(): string {
    return `postgresql://${this.user}:${this.password}@${this.hostname}:${this.port}/${this.dbName}`;
  },
}));

export type PostgresConfiguration = ConfigType<typeof postgresConfiguration>;

export const InjectPostgresConfig = () => Inject(postgresConfiguration.KEY);
