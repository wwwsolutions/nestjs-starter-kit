/* eslint-disable no-constant-condition */
import { join } from 'path';
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

const apolloServerPluginLandingPageLocalDefaultOptions: ApolloServerPluginLandingPageLocalDefaultOptions =
  {
    version:
      process.env.APOLLO_SERVER_PLUGIN_LANDING_PAGE_LOCAL_DEFAULT_VERSION,
    footer: ConversionUtils.convertToBoolean(
      process.env
        .APOLLO_SERVER_PLUGIN_LANDING_PAGE_LOCAL_DEFAULT_FOOTER as string
    ),
  };

const apolloServerPluginLandingPageProductionDefaultOptions: ApolloServerPluginLandingPageProductionDefaultOptions =
  {
    version:
      process.env.APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_VERSION,
    footer: ConversionUtils.convertToBoolean(
      process.env
        .APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_FOOTER as string
    ),
    graphRef:
      process.env
        .APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_GRAPH_REF,
    document:
      process.env.APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_DOCUMENT,
  };

const devPlugins = [
  ApolloServerPluginLandingPageLocalDefault(
    apolloServerPluginLandingPageLocalDefaultOptions
  ),
];

const prodPlugins = [
  ApolloServerPluginLandingPageProductionDefault(
    apolloServerPluginLandingPageProductionDefaultOptions
  ),
];

// HELPER
function parseAutoSchemaFileValue(value: string | undefined): boolean | string {
  if (value === undefined) {
    return false;
  }

  if (value === 'true') {
    return true;
  } else if (value === 'false') {
    return false;
  } else return join(process.cwd(), value);
}

export const graphqlConfiguration = registerAs('graphql', () => ({
  debug: ConversionUtils.convertToBoolean(process.env.GRAPHQL_DEBUG as string),
  autoSchemaFile: parseAutoSchemaFileValue(
    process.env.GRAPHQL_AUTO_SCHEMA_FILE
  ),
  playground: ConversionUtils.convertToBoolean(
    process.env.GRAPHQL_PLAYGROUND as string
  ),
  introspection: ConversionUtils.convertToBoolean(
    process.env.GRAPHQL_INTROSPECTION as string
  ),

  get prodOptions(): GqlModuleOptions {
    return {
      autoSchemaFile: this.autoSchemaFile,
      context: ({ req }) => ({ req }),
      playground: this.playground,
      introspection: this.introspection,
      debug: this.debug,
      plugins: [...prodPlugins],
    };
  },

  get options(): GqlModuleOptions {
    return {
      autoSchemaFile: this.autoSchemaFile,
      context: ({ req }) => ({ req }),
      playground: this.playground,
      introspection: this.introspection,
      debug: this.debug,
      plugins: [...devPlugins],
    };
  },
}));

export type GraphqlConfiguration = ConfigType<typeof graphqlConfiguration>;

export const InjectGraphqlConfig = () => Inject(graphqlConfiguration.KEY);
