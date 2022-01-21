/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlConfiguration } from '../configs/graphql.configuration';
import { apolloServerPluginsConfiguration } from '../configs/apollo-server-plugins.configuration';
import { prismaConfiguration } from '../configs/prisma.configuration';
import { postgresConfiguration } from '../configs/postgresql.configuration';

/* <OPTIONAL>
 *
 * This is a configuration library powered by @nestjs/config and Joi.
 * It loads environment variables from `.env.*` files and uses validation.schema for validation which is also used to set default values.
 * Finally, it exposes `ApiConfigFeaturesModule` and different configurations which can be consumed in different ways by the application.
 *
 * Configurations in this library are optional.
 *
 *
 * Register SINGLE integration configs set
 *
 */

export const apiIntegrationConfigs: any = [
  /* <OPTIONAL> **********************************************************
   *
   * API INTEGRATION - configs for `graphql-prisma` integration
   *
   ***********************************************************************/
  // graphqlConfiguration,
  // apolloServerPluginsConfiguration,
  // prismaConfiguration,
  // postgresConfiguration,
  /* <OPTIONAL> **********************************************************
   *
   * API INTEGRATION - configs for `rest-mongoose` integration
   * Registered in ApiConfigFeaturesModule
   *
   ***********************************************************************/
  // mongooseConfiguration,
  // mongoConfiguration,
];
