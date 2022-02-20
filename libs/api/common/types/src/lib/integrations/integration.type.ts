import { ApiIntegrationLabel } from '../api/api-integration-label.enum';
import { ApiIntegration } from '../api/api-integration.enum';
import { ApiPrefix } from '../api/api-prefix.enum';
import { ApiType } from '../api/api-type.enum';

export type Integration<
  T = ApiType,
  I = ApiIntegration,
  L = ApiIntegrationLabel,
  P = ApiPrefix
> = {
  type: T;
  integration: I;
  label: L;
  prefix: P;
};
