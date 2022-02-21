import { ApiIntegrationLabel } from '../api/api-integration-label.enum';
import { ApiIntegration } from '../api/api-integration.enum';
import { ApiPrefix } from '../api/api-prefix.enum';
import { ApiType } from '../api/api-type.enum';
import { Integration } from './integration.type';

export const graphqlPrismaPostgresIntegration: Integration = {
  type: ApiType.GRAPHQL,
  integration: ApiIntegration.GRAPHQL_PRISMA_POSTGRES,
  label: ApiIntegrationLabel.GPPI,
  prefix: ApiPrefix.GRAPHQL,
};
