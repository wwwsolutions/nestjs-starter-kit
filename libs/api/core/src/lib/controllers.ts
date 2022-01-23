import { NestControllersType } from './types/nest.types';

import { ApiCoreController } from './controllers/api-core.controller';

/* <OPTIONAL>
 *
 * IN CASE OF REST INTEGRATION, REGISTER CONTROLLERS
 *
 * <examples>
 *
 *    ApiCoreController,
 */

export const controllers: NestControllersType = [ApiCoreController];
