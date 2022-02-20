import { ApiType } from './api-type.enum';
import { Integration } from '../integrations/integration.type';

type ApiGraphql = Pick<Integration<ApiType.GRAPHQL>, 'type'>;

export const apiGraphql: ApiGraphql = { type: ApiType.GRAPHQL };
