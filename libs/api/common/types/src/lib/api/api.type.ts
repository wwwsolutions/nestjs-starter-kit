import { ApiProtocol } from './api-protocol.enum';
import { ApiHostname } from './api-hostname.enum';
import { ApiPort } from './api-port.enum';

export type Api<PR = ApiProtocol, HO = ApiHostname, PO = ApiPort> = {
  protocol: PR;
  hostname: HO;
  port: PO;
};
