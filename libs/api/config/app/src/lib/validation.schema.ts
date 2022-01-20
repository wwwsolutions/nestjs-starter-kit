import * as Joi from 'joi';

import { Env } from './constants/environment.constants';
import {
  ApiType,
  Integration,
  ApiProtocols,
  ApiHostname,
} from './constants/app.constants';
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
    .required()
    .valid(ApiType.GRAPHQL_API, ApiType.REST_API)
    .description('API type'),
  API_INTEGRATION_TYPE: Joi.string()
    .required()
    .valid(Integration.GRAPHQL_PRISMA, Integration.REST_MONGOOSE)
    .description('API type'),

  // OPTIONAL
  API_PROTOCOL: Joi.string()
    .lowercase()
    .valid(ApiProtocols.HTTP, ApiProtocols.HTTPS)
    .default(ApiProtocols.HTTP)
    .description('API protocol'),
  API_HOSTNAME: Joi.string()
    .hostname()
    .default(ApiHostname.LOCALHOST)
    .description('API host'),

  API_PORT: Joi.number().port().default(3000).description('API port'),

  /* --------------------------------------------------------------
  WINSTON
  api/config/app/src/lib/configs/winston.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  WINSTON_LEVEL_CONSOLE: Joi.string()
    .lowercase()
    .valid(
      WinstonLogLevel.ERROR,
      WinstonLogLevel.WARN,
      WinstonLogLevel.INFO,
      WinstonLogLevel.HTTP,
      WinstonLogLevel.VERBOSE,
      WinstonLogLevel.DEBUG,
      WinstonLogLevel.SILLY
    )
    .default(WinstonLogLevel.VERBOSE)
    .description('WINSTON console level'),
  WINSTON_PRETTY_PRINT: Joi.boolean()
    .default(true)
    .description('WINSTON pretty print'),
  WINSTON_LEVEL_FILE: Joi.string()
    .lowercase()
    .valid(
      WinstonLogLevel.ERROR,
      WinstonLogLevel.WARN,
      WinstonLogLevel.INFO,
      WinstonLogLevel.HTTP,
      WinstonLogLevel.VERBOSE,
      WinstonLogLevel.DEBUG,
      WinstonLogLevel.SILLY
    )
    .default(WinstonLogLevel.SILLY)
    .description('WINSTON file level'),
});
