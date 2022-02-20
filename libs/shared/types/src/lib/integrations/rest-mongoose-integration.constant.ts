import { ApiIntegrationLabel } from '../api/api-integration-label.enum';
import { ApiIntegration } from '../api/api-integration.enum';
import { ApiPrefix } from '../api/api-prefix.enum';
import { ApiType } from '../api/api-type.enum';
import { Integration } from './integration.type';

export const restMongooseIntegration: Integration = {
  type: ApiType.REST,
  integration: ApiIntegration.REST_MONGOOSE,
  label: ApiIntegrationLabel.RMI,
  prefix: ApiPrefix.REST,
};
