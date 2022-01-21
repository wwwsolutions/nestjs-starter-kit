/* eslint-disable @typescript-eslint/no-explicit-any */
import { environmentConfiguration } from '../configs/environment.configuration';
import { appConfiguration } from '../configs/app.configuration';
import { winstonConfiguration } from '../configs/winston.configuration';
import { swaggerConfiguration } from '../configs/swagger.configuration';

/* <REQUIRED>
 *
 * This is a configuration library powered by @nestjs/config and Joi.
 * It loads environment variables from `.env.*` files and uses validation.schema for validation which is also used to set default values.
 * Finally, it exposes `ApiConfigFeaturesModule` and different configurations which can be consumed in different ways by the application.
 *
 * This library is required and encapsulates configurations for core application functionality.
 *
 *
 * Register app configs
 *
 */

export const appConfigsObjects: any = [
  // <GRAPHQL-PRISMA-INTEGRATION>
  environmentConfiguration,
  appConfiguration,
  winstonConfiguration,

  // <REST-MONGOOSE-INTEGRATION>
  swaggerConfiguration,
];
