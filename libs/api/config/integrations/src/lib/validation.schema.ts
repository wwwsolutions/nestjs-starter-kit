import * as Joi from 'joi';
import joiPassword from 'joi-password';

import { PrismaProvider, ApiHostname } from '@wwwsolutions/api/common/types';

// VALIDATES ENVIRONMENT VARIABLES SET IN `.env` FILE
// SET DEFAULT VALUES HERE
export const validationSchema = Joi.object({
  /* --------------------------------------------------------------
  GRAPHQL
  api/config/integrations/src/lib/configs/graphql.configuration.ts
  --------------------------------------------------------------- */

  // OPTIONAL

  //  true | false | string (location where `schema.graphql` file will be generated)
  GRAPHQL_AUTO_SCHEMA_FILE: Joi.alternatives()
    .try(
      Joi.boolean().valid(true),
      // Joi.boolean().valid(false),
      Joi.string().regex(
        /^[a-z0-9]([a-z0-9-]*[a-z0-9])?(\/[a-z0-9]([a-z0-9-]*[a-z0-9])?)*(\/[a-z0-9]([a-z0-9-.]*[a-z0-9])?)?$/s
      )
    )
    .default('libs/api/data-access/models/src/lib/generated/schema.graphql')
    .description('GRAPHQL auto schema file value'),

  // true (default playground) | false (Apollo Sandbox)
  GRAPHQL_PLAYGROUND: Joi.boolean()
    .default(false)
    .description('GRAPHQL playground'),

  GRAPHQL_DEBUG: Joi.boolean().default(false).description('GRAPHQL debug'),

  GRAPHQL_INTROSPECTION: Joi.boolean()
    .default(true)
    .description('GRAPHQL introspection'),

  /* --------------------------------------------------------------
  APOLLO SERVER PLUGINS
  api/config/integrations/src/lib/configs/apollo-server-plugins.configuration.ts
  --------------------------------------------------------------- */

  // OPTIONAL
  APOLLO_SERVER_PLUGIN_LANDING_PAGE_LOCAL_DEFAULT_VERSION: Joi.string()
    // .default('ea933a30723b44b9b2672f7222ed3cb8fbefa71f') // target specific
    .description(
      'APOLLO_SERVER_PLUGIN_LANDING_PAGE_LOCAL_DEFAULT_VERSION: version'
    )
    .empty(), // set latest

  APOLLO_SERVER_PLUGIN_LANDING_PAGE_LOCAL_DEFAULT_FOOTER: Joi.boolean()
    .default(false)
    .description(
      'APOLLO_SERVER_PLUGIN_LANDING_PAGE_LOCAL_DEFAULT_VERSION: footer'
    ),

  // OPTIONAL
  APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_VERSION: Joi.string()
    // .default('ea933a30723b44b9b2672f7222ed3cb8fbefa71f') // target specific
    .description(
      'APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_VERSION: version'
    )
    .empty(), // set latest

  APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_FOOTER: Joi.boolean()
    .default(false)
    .description(
      'APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_VERSION: footer'
    ),

  APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_GRAPH_REF: Joi.string()
    .default('my-graph@my-variant')
    .description(
      'APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_VERSION: graph ref'
    ),

  // APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_DOCUMENT:
  //   Joi.string().description(
  //     'ApolloServerPluginLandingPageProductionDefault: DOCUMENT'
  //   ).empty,

  // APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_VARIABLES:
  //   Joi.object().description(
  //     'ApolloServerPluginLandingPageProductionDefault: VARIABLES'
  //   ).empty,

  // APOLLO_SERVER_PLUGIN_LANDING_PAGE_PRODUCTION_DEFAULT_HEADERS:
  //   Joi.object().description(
  //     'ApolloServerPluginLandingPageProductionDefault: HEADERS'
  //   ).empty,

  /* --------------------------------------------------------------
  PRISMA
  api/config/integrations/src/lib/configs/postgres.configuration.ts
  --------------------------------------------------------------- */

  // OPTIONAL
  PRISMA_DATASOURCE_PROVIDER: Joi.string()
    .lowercase()
    .valid(
      PrismaProvider.SQLITE,
      PrismaProvider.POSTGRESQL,
      PrismaProvider.MYSQL,
      PrismaProvider.SQLSERVER,
      PrismaProvider.MONGODB,
      PrismaProvider.COCKROACHDB
    )
    .default(PrismaProvider.POSTGRESQL)
    .description('PRISMA: Describes which data source connectors to use.'),
  PRISMA_DATASOURCE_SHADOW_URL: Joi.string()
    .description(
      'PRISMA: Connection URL to the shadow database used by Prisma Migrate. Allows you to use a cloud-hosted database as the shadow database.'
    )
    .empty(),
  PRISMA_DATASOURCE_REF_INTEGRITY: Joi.string()
    .description('PRISMA: Allows setting the referential integrity.')
    .empty(),

  /* --------------------------------------------------------------
  POSTGRES
  api/config/integrations/src/lib/configs/postgres.configuration.ts
  --------------------------------------------------------------- */

  // OPTIONAL
  POSTGRES_USER: Joi.string().default('root').description('POSTGRES user'),
  POSTGRES_PASSWORD: joiPassword
    .string()
    .noWhiteSpaces()
    .default('root')
    .description('POSTGRES password'),
  POSTGRES_DB_NAME: Joi.string()
    .default('demo')
    .description('POSTGRES database name'),
  POSTGRES_HOSTNAME: Joi.string()
    .hostname()
    .default(ApiHostname.LOOPBACK)
    .description('POSTGRES database hostname'),
  POSTGRES_PORT: Joi.number().default(5432).port().description('POSTGRES port'),

  /* --------------------------------------------------------------
  PGADMIN
  --------------------------------------------------------------- */

  // OPTIONAL
  PGADMIN_CONFIG_SERVER_MODE: Joi.string()
    .default('False')
    .description('PGADMIN server mode'),
  PGADMIN_DEFAULT_EMAIL: Joi.string()
    .email()
    .default('pgadmin4@pgadmin.org')
    .description('PGADMIN default email'),
  PGADMIN_DEFAULT_PASSWORD: Joi.string()
    .default('postgres')
    .description('PGADMIN default password'),
  PGADMIN_LISTEN_PORT: Joi.number()
    .default(5050)
    .port()
    .description('PGADMIN listen port'),

  /* --------------------------------------------------------------
  REDIS
  --------------------------------------------------------------- */

  // OPTIONAL
  REDIS_PORT: Joi.number().default(6379).port().description('REDIS port'),

  /* --------------------------------------------------------------
  MONGO
  api/config/integrations/src/lib/configs/mongo.configuration.ts
  --------------------------------------------------------------- */

  // OPTIONAL
  // MONGO_URI: Joi.string().default('mongodb://localhost:27017'),

  MONGO_INITDB_ROOT_USERNAME: Joi.string()
    .lowercase()
    .default('root')
    .description('MONGODB root user'),
  MONGO_INITDB_ROOT_PASSWORD: joiPassword
    .string()
    .noWhiteSpaces()
    .default('root')
    .description('MONGODB root password'),
  MONGO_DBNAME: Joi.string()
    .default('demo')
    .description('MONGODB database name'),
  MONGO_HOSTNAME: Joi.string()
    .hostname()
    .default(ApiHostname.LOCALHOST)
    .description('MONGODB database hostname'),
  MONGO_PORT: Joi.number().default(27017).port().description('MONGODB port'),

  /* --------------------------------------------------------------
  CACHE
  api/config/integrations/src/lib/configs/cache.configuration.ts
  --------------------------------------------------------------- */
  // TODO: add cache validation fields
  // CACHE_DRIVER: Joi.string().default('in-memory').description('CACHE driver'),
  // CACHE_HOST: Joi.string().required().description('CACHE host'),
  // CACHE_PORT: Joi.number().port().required().description('CACHE port'),
  // CACHE_TTL: Joi.number().required().description('CACHE ttl'),

  /* --------------------------------------------------------------
  SWAGGER
  api/config/app/src/lib/configs/swagger.configuration.ts
  --------------------------------------------------------------- */

  // OPTIONAL
  SWAGGER_UI_DIR: Joi.string()
    .lowercase()
    .default('docs')
    .description('SWAGGER UI directory'),
});
