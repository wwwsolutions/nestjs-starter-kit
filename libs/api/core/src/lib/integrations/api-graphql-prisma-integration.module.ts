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

// import { WinstonModule } from 'nest-winston';

@Module({
  imports: [
    // API CONFIGURATIONS
    // ApiGraphqlConfigAppModule,
    ApiGraphqlConfigFeaturesModule,

    // // WINSTON CONFIGURATION
    // WinstonModule.forRootAsync({
    //   useFactory: async (winstonConfiguration: WinstonConfiguration) => ({
    //     // api/config/features/src/lib/configs/winston.configuration.ts
    //     ...winstonConfiguration.options,
    //   }),
    //   inject: [winstonConfiguration.KEY],
    // }),

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

    // TODO: refactor cacheConfiguration, fix this config - make it work.
    // TODO: WARNING: this only works for REST apis.
    // TODO: For GRAPHQL api implement Deterministic approach to caching
    // TODO: For GRAPHQL caching inspect apollo plugin cache
    // CacheModule.registerAsync({
    //   // https://dev.to/secmohammed/nestjs-caching-globally-neatly-1e17
    //   useFactory: async (cacheConfiguration: CacheConfiguration) => {
    //     // Later, if needed, create a cache factory to instantiate different drivers based on config.
    //     if (cacheConfiguration.redis.driver === 'redis') {
    //       return {
    //         ttl: ms(cacheConfiguration.redis.ttl), // using ms package to parse 15m to timestamp.
    //         store: require('cache-manager-redis-store'),
    //         host: cacheConfiguration.redis.host,
    //         port: cacheConfiguration.redis.port,
    //       };
    //     } else
    //       return {
    //         ttl: ms(cacheConfiguration.ttl),
    //       };
    //   },
    //   inject: [cacheConfiguration.KEY],
    // }),

    // DATA-LAYER CONFIGURATION
    // Prisma as data layer --> api-graphql-data-access-prisma
    // libs/api/graphql/data-access/core/src/lib/prisma-data.service.ts
  ],
})
export class ApiGraphqlPrismaIntegrationModule {}
