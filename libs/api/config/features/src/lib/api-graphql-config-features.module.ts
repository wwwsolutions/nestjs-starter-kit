// https://docs.nestjs.com/techniques/configuration

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { graphqlConfiguration } from './configs/graphql.configuration';
import { prismaConfiguration } from './configs/prisma.configuration';
import { postgresConfiguration } from './configs/postgresql.configuration';
import { jwtConfiguration } from './configs/jwt.configuration';

import { validationSchema } from './validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        'apps/api/.env.local',
        `apps/api/.env.${process.env['NODE' + '_ENV']}`,
      ],
      validationSchema,
      load: [
        graphqlConfiguration,
        prismaConfiguration,
        postgresConfiguration,
        // jwtConfiguration,
      ],
    }),
  ],
})
export class ApiGraphqlConfigFeaturesModule {}
