import { ApiProtocol } from './api-protocol.enum';
import { Api } from './api.type';

export type Http = Pick<Api<ApiProtocol.HTTP>, 'protocol'>;

export const http: Http = { protocol: ApiProtocol.HTTP };
