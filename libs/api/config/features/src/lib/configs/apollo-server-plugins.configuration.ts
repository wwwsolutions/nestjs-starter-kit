import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import { GqlModuleOptions } from '@nestjs/graphql';
import { ConversionUtils } from '@wwwsolutions/shared/utils';

// APOLLO SERVER PLUGINS
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
  ApolloServerPluginLandingPageLocalDefaultOptions,
  ApolloServerPluginLandingPageProductionDefaultOptions,
} from 'apollo-server-core';

export const apolloServerPluginsConfiguration = registerAs(
  'apolloServerPlugins',
  () => ({
    apolloServerPluginLandingPageLocalDefaultOptions: {
      version:
        process.env.APOLLO_SERVER_PLUGIN_LANDING_PAGE_LOCAL_DEFAULT_VERSION,
      footer: ConversionUtils.convertToBoolean(
        process.env
          .APOLLO_SERVER_PLUGIN_LANDING_PAGE_LOCAL_DEFAULT_FOOTER as string
      ),
    } as ApolloServerPluginLandingPageLocalDefaultOptions,

    apolloServerPluginLandingPageProductionDefaultOptions: {
      version:
        process.env
          .APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_VERSION,
      footer: ConversionUtils.convertToBoolean(
        process.env
          .APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_FOOTER as string
      ),
      graphRef:
        process.env
          .APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_GRAPH_REF,
      document:
        process.env
          .APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_DOCUMENT,
    } as ApolloServerPluginLandingPageProductionDefaultOptions,

    get productionPlugins(): GqlModuleOptions {
      return {
        plugins: [
          ApolloServerPluginLandingPageProductionDefault(
            this.apolloServerPluginLandingPageProductionDefaultOptions
          ),
        ],
      };
    },

    get developmentPlugins(): GqlModuleOptions {
      return {
        plugins: [
          ApolloServerPluginLandingPageLocalDefault(
            this.apolloServerPluginLandingPageLocalDefaultOptions
          ),
        ],
      };
    },
  })
);

export type ApolloServerPluginsConfiguration = ConfigType<
  typeof apolloServerPluginsConfiguration
>;

export const InjectApolloServerPluginsConfig = () =>
  Inject(apolloServerPluginsConfiguration.KEY);
