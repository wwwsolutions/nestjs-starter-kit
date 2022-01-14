/* eslint-disable @typescript-eslint/no-explicit-any */
import { graphqlConfiguration } from './configs/graphql.configuration';
import { prismaConfiguration } from './configs/prisma.configuration';
import { postgresConfiguration } from './configs/postgresql.configuration';

/* <OPTIONAL>
 *
 * Register singular integration configs set
 *
 */

export const integrationConfigsObjects: any = [
  // INTEGRATION (ApiIntegrationGraphqlPrismaModule)
  graphqlConfiguration,
  prismaConfiguration,
  postgresConfiguration,

  // ALTERNATIVE INTEGRATION (ApiIntegrationRestMongooseModule)
  // mongooseConfiguration,
  // mongoConfiguration,

  // ALTERNATIVE INTEGRATION (ApiIntegrationGraphqlTypeormMysqlModule)
  // graphqlConfiguration,
  // typeormConfiguration,
  // mysqlConfiguration,
];
