import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { GraphQLError, GraphQLFormattedError } from 'graphql';

import {
  environmentConfiguration,
  EnvironmentConfiguration,
  Env,
} from '@wwwsolutions/api/config/app';

import {
  ApiConfigIntegrationsModule,
  graphqlConfiguration,
  GraphqlConfiguration,
  apolloServerPluginsConfiguration,
  ApolloServerPluginsConfiguration,
} from '@wwwsolutions/api/config/integrations';

import { ApiConfigFeaturesModule } from '@wwwsolutions/api/config/features';

@Module({
  imports: [
    // APP CONFIG
    ApiConfigIntegrationsModule,
    ApiConfigFeaturesModule,

    // GRAPHQL CONFIG
    GraphQLModule.forRootAsync({
      useFactory: async (
        environmentConfiguration: EnvironmentConfiguration,
        graphqlConfiguration: GraphqlConfiguration,
        apolloServerPluginsConfiguration: ApolloServerPluginsConfiguration
      ) => ({
        // api/config/features/src/lib/configs/graphql.configuration.ts
        ...(environmentConfiguration.env === Env.PRODUCTION
          ? graphqlConfiguration.productionOptions
          : graphqlConfiguration.developmentOptions),

        // api/config/features/src/lib/configs/apollo-server-plugins.configuration.ts
        ...(environmentConfiguration.env === Env.PRODUCTION
          ? apolloServerPluginsConfiguration.productionPlugins
          : apolloServerPluginsConfiguration.developmentPlugins),

        // formatError: (error: GraphQLError) => {
        //   const graphQLFormattedError: GraphQLFormattedError = {
        //     message:
        //       error.extensions?.exception?.response?.message || error.message,
        //   };
        //   return graphQLFormattedError;
        // },

        // TODO: make it sure that it works as intended
        formatError: (error: GraphQLError) => {
          if (error.message === 'VALIDATION_ERROR') {
            const extensions = {
              code: 'VALIDATION_ERROR',
              errors: [],
            };

            Object.keys(error.extensions.invalidArgs).forEach((key) => {
              const constraints: unknown[] = [];
              Object.keys(
                error.extensions.invalidArgs[key].constraints
              ).forEach((_key) => {
                constraints.push(
                  error.extensions.invalidArgs[key].constraints[_key]
                );
              });

              extensions.errors.push({
                field: error.extensions.invalidArgs[key].property as never,
                errors: constraints,
              } as never);
            });

            const graphQLFormattedError: GraphQLFormattedError = {
              message: 'VALIDATION_ERROR',
              extensions: extensions,
            };

            return graphQLFormattedError;
          } else {
            return error;
          }
        },
      }),
      inject: [
        environmentConfiguration.KEY,
        graphqlConfiguration.KEY,
        apolloServerPluginsConfiguration.KEY,
      ],
    }),

    // DATA LAYER CONFIG
    // `api-data-access-prisma` project
    // libs/api/data-access/core/src/lib/prisma-data.service.ts
  ],
})
export class ApiIntegrationGraphqlPrismaModule {}
