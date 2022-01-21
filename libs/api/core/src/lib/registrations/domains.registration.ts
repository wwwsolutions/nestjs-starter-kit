import { NestImportsType } from '../nest.types';

import { ApiDomainUsersFeatureModule } from '@wwwsolutions/api/domain/users/feature';
import { ApiDomainAuthenticationFeatureModule } from '@wwwsolutions/api/domain/authentication/feature';

/* <OPTIONAL>
 *
 * REGISTER DOMAIN FEATURE MODULES
 * WHICH HOLD BUSINESS LOGIC
 *
 * <examples>
 *
 *    ApiDomainUsersFeatureModule,
 *    ApiDomainAuthenticationFeatureModule,
 *
 */

export const domains: NestImportsType = [
  // <GRAPHQL-PRISMA-INTEGRATION>
  // ApiDomainUsersFeatureModule,
  // ApiDomainAuthenticationFeatureModule,
  // <REST-MONGOOSE-INTEGRATION>
];
