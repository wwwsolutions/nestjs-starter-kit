import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';

import {
  environmentConfiguration,
  EnvironmentConfiguration,
  Env,
} from '@wwwsolutions/api/config/app';

import {
  ApiGraphqlConfigFeaturesModule,
  GraphqlConfiguration,
  graphqlConfiguration,
} from '@wwwsolutions/api/config/features';

@Module({
  imports: [
    // API CONFIGURATIONS
    // ApiGraphqlConfigAppModule,
    ApiGraphqlConfigFeaturesModule,
    // GRAPHQL CONFIGURATION
    GraphQLModule.forRootAsync({
      useFactory: async (
        environmentConfiguration: EnvironmentConfiguration,
        graphqlConfiguration: GraphqlConfiguration
      ) => ({
        // api/config/features/src/lib/configs/graphql.configuration.ts
        ...(environmentConfiguration.env === Env.PRODUCTION
          ? graphqlConfiguration.prodOptions
          : graphqlConfiguration.options),
      }),
      inject: [environmentConfiguration.KEY, graphqlConfiguration.KEY],
    }),

    // DATA-LAYER CONFIGURATION
    // Prisma as data layer --> api-data-access-prisma
    // libs/api/data-access/core/src/lib/prisma-data.service.ts
  ],
})
export class ApiIntegrationGraphqlPrismaModule {}
