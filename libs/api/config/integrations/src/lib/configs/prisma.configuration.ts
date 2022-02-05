// https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference
import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

import { PrismaProvider } from '../constants/prisma.constants';

const composePrismaDatasourceUrl = (prismaProvider: PrismaProvider): string => {
  // 'PRISMA: Connection URL including authentication info. Most connectors use the syntax provided by the database.'
  switch (prismaProvider) {
    case PrismaProvider.SQLITE:
      return 'sqlite_connection_string'; // TODO: create connection string

    case PrismaProvider.POSTGRESQL: {
      return `${PrismaProvider.POSTGRESQL}://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOSTNAME}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB_NAME}`;
    }

    case PrismaProvider.MYSQL:
      return 'mysql_connection_string'; // TODO: create connection string

    case PrismaProvider.SQLSERVER:
      return 'sqlserver_connection_string'; // TODO: create connection string

    case PrismaProvider.MONGODB:
      return 'mongodb_connection_'; // TODO: create connection string

    case PrismaProvider.COCKROACHDB:
      return 'cockroachdb_connection_'; // TODO: create connection string

    default:
      throw 'No Prisma Providers passed to composePrismaDatasourceUrl fn!';
  }
};

export const prismaConfiguration = registerAs('prisma', () => ({
  provider: process.env.PRISMA_DATASOURCE_PROVIDER as PrismaProvider,
  shadowDatabaseUrl: process.env.PRISMA_DATASOURCE_SHADOW_URL,
  referentialIntegrity: process.env.PRISMA_DATASOURCE_REF_INTEGRITY,

  get prodSchemaDatasourcesUrlOverride() {
    if (!this.provider)
      throw 'Prisma provider in PRODUCTION mode is not defined';
    else {
      return {
        [this.provider]: {
          url: composePrismaDatasourceUrl(this.provider),
        },
      };
    }
  },

  get devSchemaDatasourcesUrlOverride() {
    if (!this.provider)
      throw 'Prisma provider in DEVELOPMENT mode is not defined';
    else {
      return {
        [this.provider]: {
          url: composePrismaDatasourceUrl(this.provider),
        },
      };
    }
  },
}));

export type PrismaConfiguration = ConfigType<typeof prismaConfiguration>;

export const InjectPrismaConfig = () => Inject(prismaConfiguration.KEY);
