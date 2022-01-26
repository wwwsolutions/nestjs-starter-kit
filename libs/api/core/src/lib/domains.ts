import { ApiDomainUsersFeatureModule } from '@wwwsolutions/api/domain/users/feature';
import { ApiDomainAuthenticationFeatureModule } from '@wwwsolutions/api/domain/authentication/feature';

import { ApiDomainArticleFeatureModule } from '@wwwsolutions/api/domain/article/feature';

import { NestImportsTypes } from '@wwwsolutions/shared/types';

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
  /* <OPTIONAL> **********************************************************
   *
   * Graphql-Prisma-Integration [Business logic modules]
   *
   ***********************************************************************/
  ApiDomainUsersFeatureModule,
  ApiDomainAuthenticationFeatureModule,

  /* <OPTIONAL> **********************************************************
   *
   * Rest-Mongoose-Integration [Business logic modules]
   *
   ***********************************************************************/
  // ApiDomainArticleFeatureModule,
];
