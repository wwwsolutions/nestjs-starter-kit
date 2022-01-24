import { jwtConfiguration } from './configs/jwt.configuration';
import { adminConfiguration } from './configs/admin.configuration';

import { Configs } from '@wwwsolutions/shared/types';

/* <OPTIONAL>
 *
 * This is a configuration library powered by @nestjs/config and Joi.
 * It loads environment variables from `.env.*` files and uses validation.schema for validation which is also used to set default values.
 * Finally, it exposes `ApiConfigFeaturesModule` and different configurations which can be consumed in different ways by the application.
 *
 * Configurations in this library are optional.
 *
 *
 * Register ONE OR MORE configs for business logic
 *
 */

export const featuresConfigs: Configs = [
  /* <OPTIONAL> **********************************************************
   *
   * GRAPHQL-PRISMA-INTEGRATION - Features/Business logic configs
   *
   ***********************************************************************/
  adminConfiguration,
  jwtConfiguration,

  /* <OPTIONAL> **********************************************************
   *
   * REST-MONGOOSE-INTEGRATION - Features/Business logic configs
   *
   ***********************************************************************/
  //
];
