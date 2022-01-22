import { NestControllersType } from '../nest.types';

import { ApiCoreController } from '../api-core.controller';

/* <OPTIONAL>
 *
 * IN CASE OF REST INTEGRATION, REGISTER CONTROLLERS
 *
 * <examples>
 *
 *    ApiCoreController,
 */

export const controllers: NestControllersType = [ApiCoreController];
