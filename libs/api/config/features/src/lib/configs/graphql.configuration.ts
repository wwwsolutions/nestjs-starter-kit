import { join } from 'path';
import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';
import { GqlModuleOptions } from '@nestjs/graphql';
import { ConversionUtils } from '@wwwsolutions/shared/utils';

// HELPER
function parseAutoSchemaFileValue(value: string | undefined): boolean | string {
  if (value === undefined) {
    return false;
  } else if (value === 'true') {
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

  get productionOptions(): GqlModuleOptions {
    return {
      autoSchemaFile: this.autoSchemaFile,
      context: ({ req }) => ({ req }),
      playground: this.playground,
      introspection: this.introspection,
      debug: this.debug,
    };
  },

  get developmentOptions(): GqlModuleOptions {
    return {
      autoSchemaFile: this.autoSchemaFile,
      context: ({ req }) => ({ req }),
      playground: this.playground,
      introspection: this.introspection,
      debug: this.debug,
    };
  },
}));

export type GraphqlConfiguration = ConfigType<typeof graphqlConfiguration>;

export const InjectGraphqlConfig = () => Inject(graphqlConfiguration.KEY);
