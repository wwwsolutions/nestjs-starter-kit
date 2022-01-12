// https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference
import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

enum PrismaProvider {
  SQLITE = 'sqlite',
  POSTGRESQL = 'postgresql',
  MYSQL = 'mysql',
  SQLSERVER = 'sqlserver',
  MONGODB = 'mongodb',
}
// interface OptionRequirement {
//   provider: string;
// }

// type OptionRequirements = {
//   [key in Options]: OptionRequirement; // Note that "key in".
// };

const composeDatabaseConnectionUrl = (
  prismaProvider: PrismaProvider
): string => {
  console.log('composeDatabaseConnectionUrl()');
  // 'PRISMA: Connection URL including authentication info. Most connectors use the syntax provided by the database.'
  switch (prismaProvider) {
    case PrismaProvider.SQLITE:
      return 'sqlite connection string'; // TODO: create connection string

    case PrismaProvider.POSTGRESQL: {
      const postgresConnectionStringUrl = `${PrismaProvider.POSTGRESQL}://${process.env.POSTGRES_USER}:${process.env.POSTGRES_PASSWORD}@${process.env.POSTGRES_HOSTNAME}:${process.env.POSTGRES_PORT}/${process.env.POSTGRES_DB_NAME}`;
      console.log(
        postgresConnectionStringUrl,
        typeof postgresConnectionStringUrl
      );
      return postgresConnectionStringUrl;
    }

    case PrismaProvider.MYSQL:
      return 'mysql connection string'; // TODO: create connection string

    case PrismaProvider.SQLSERVER:
      return 'sqlserver connection string'; // TODO: create connection string

    case PrismaProvider.MONGODB:
      return 'mongodb connection string'; // TODO: create connection string
    // default:
    //   return 'default_connection_string';
  }
};

export const prismaConfiguration = registerAs('prisma', () => ({
  provider: process.env.PRISMA_DATASOURCE_PROVIDER as PrismaProvider,
  // url: process.env.PRISMA_DATASOURCE_URL,
  // url: 'xxxx',
  shadowDatabaseUrl: process.env.PRISMA_DATASOURCE_SHADOW_URL,
  referentialIntegrity: process.env.PRISMA_DATASOURCE_REF_INTEGRITY,

  get schemaDatasourcesUrlOverride() {
    if (!this.provider) throw 'Prisma provider is not defined';
    else {
      return {
        [this.provider]: {
          url: composeDatabaseConnectionUrl(this.provider),
        },
      };
    }
  },
}));

export type PrismaConfiguration = ConfigType<typeof prismaConfiguration>;

export const InjectPrismaConfig = () => Inject(prismaConfiguration.KEY);
