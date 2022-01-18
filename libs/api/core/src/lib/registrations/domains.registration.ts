import { NestImportsType } from '../nest.types';

import { ApiDomainUsersFeatureModule } from '@wwwsolutions/api/domain/users/feature';

/* BUSINESS LOGIC
 *
 * REGISTER DOMAIN FEATURE MODULES
 * WHICH HOLD BUSINESS LOGIC
 *
 * <examples>
 *
 *    ApiDomainUsersFeatureModule,
 *
 */

export const domains: NestImportsType = [ApiDomainUsersFeatureModule];
