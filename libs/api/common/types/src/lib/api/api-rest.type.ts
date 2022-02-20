import { ApiType } from './api-type.enum';
import { Integration } from '../integrations/integration.type';

type ApiRest = Pick<Integration<ApiType.REST>, 'type'>;

export const apiRest: ApiRest = { type: ApiType.REST };
