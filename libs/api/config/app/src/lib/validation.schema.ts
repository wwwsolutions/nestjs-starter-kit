import * as Joi from 'joi';

import { Env } from './constants/env.constants';
import { ApiType, ApiIntegrationType } from './constants/api.constants';
import { WinstonLogLevel } from './constants/winston.constants';

// VALIDATES ENVIRONMENT VARIABLES SET IN `.env` FILE
// SET DEFAULT VALUES HERE
export const validationSchema = Joi.object({
  /* --------------------------------------------------------------
  ENVIRONMENT
  api/config/app/src/lib/configs/environment.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  NODE_ENV: Joi.string()
    .valid(Env.DEVELOPMENT, Env.PRODUCTION, Env.STAGING, Env.TEST)
    .required()
    .description('api: NODE_ENV'),

  /* --------------------------------------------------------------
  APP/API
  api/config/app/src/lib/configs/app.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  API_TYPE: Joi.string()
    .valid(ApiType.GRAPHQL_API, ApiType.REST_API)
    .required()
    .description('API type'),

  API_INTEGRATION_TYPE: Joi.string()
    .valid(
      ApiIntegrationType.GRAPHQL_PRISMA_INTEGRATION,
      ApiIntegrationType.REST_MONGOOSE_INTEGRATION
    )
    .required()
    .description('API type'),

  // OPTIONAL
  API_PROTOCOL: Joi.string()
    .lowercase()
    .valid('http', 'https')
    .default('http')
    .description('API protocol'),
  API_HOST: Joi.string().default('localhost').description('API host'),
  API_PORT: Joi.number().port().default(3000).description('API port'),

  /* --------------------------------------------------------------
  WINSTON
  api/config/app/src/lib/configs/winston.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  WINSTON_LEVEL_CONSOLE: Joi.string()
    .required()
    .valid(
      WinstonLogLevel.ERROR,
      WinstonLogLevel.WARN,
      WinstonLogLevel.INFO,
      WinstonLogLevel.HTTP,
      WinstonLogLevel.VERBOSE,
      WinstonLogLevel.DEBUG,
      WinstonLogLevel.SILLY
    )
    .description('WINSTON console level'),
  WINSTON_PRETTY_PRINT: Joi.boolean()
    .required()
    .description('WINSTON pretty print'),
  WINSTON_LEVEL_FILE: Joi.string()
    .required()
    .valid(
      WinstonLogLevel.ERROR,
      WinstonLogLevel.WARN,
      WinstonLogLevel.INFO,
      WinstonLogLevel.HTTP,
      WinstonLogLevel.VERBOSE,
      WinstonLogLevel.DEBUG,
      WinstonLogLevel.SILLY
    )
    .description('WINSTON file level'),
  WINSTON_FILE_PATH: Joi.string()
    .required()
    .valid('logs/app.log')
    .description('WINSTON file path'),
});
