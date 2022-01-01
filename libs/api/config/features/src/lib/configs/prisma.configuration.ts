// https://www.prisma.io/docs/reference/api-reference/prisma-schema-reference
import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const prismaConfiguration = registerAs('prisma', () => ({
  provider: process.env.PRISMA_DATASOURCE_PROVIDER,
  url: process.env.PRISMA_DATASOURCE_URL,
  shadowDatabaseUrl: process.env.PRISMA_DATASOURCE_SHADOW_URL,
  referentialIntegrity: process.env.PRISMA_DATASOURCE_REF_INTEGRITY,

  get schemaDatasourcesUrlOverride() {
    return {
      [this.provider as string]: {
        url: this.url,
      },
    };
  },
}));

export type PrismaConfiguration = ConfigType<typeof prismaConfiguration>;

export const InjectPrismaConfig = () => Inject(prismaConfiguration.KEY);
