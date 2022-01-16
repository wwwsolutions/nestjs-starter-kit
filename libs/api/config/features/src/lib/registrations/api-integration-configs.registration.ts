/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlConfiguration } from '../configs/graphql.configuration';
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
  // `graphql-prisma` integration (ApiIntegrationGraphqlPrismaModule)
  graphqlConfiguration,
  prismaConfiguration,
  postgresConfiguration,

  // ALTERNATIVE INTEGRATION
  // `rest-mongoose` integration (ApiIntegrationRestMongooseModule)
  // mongooseConfiguration,
  // mongoConfiguration,
];
