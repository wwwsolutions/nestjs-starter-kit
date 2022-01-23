import { NestImportsTypes } from './types/nest.types';

import { ApiDomainUsersFeatureModule } from '@wwwsolutions/api/domain/users/feature';
import { ApiDomainAuthenticationFeatureModule } from '@wwwsolutions/api/domain/authentication/feature';

// eslint-disable-next-line @nrwl/nx/enforce-module-boundaries
import { ApiDomainArticleFeatureModule } from '@wwwsolutions/api/domain/article/feature';

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

export const domainModules: NestImportsTypes = [
  // <GRAPHQL-PRISMA-INTEGRATION>
  // ApiDomainUsersFeatureModule,
  // ApiDomainAuthenticationFeatureModule,
  // <REST-MONGOOSE-INTEGRATION>
  ApiDomainArticleFeatureModule,
];
