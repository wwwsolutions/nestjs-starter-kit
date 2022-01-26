import * as Joi from 'joi';

import { Env } from './constants/environment.constants';
import {
  ApiType,
  Integration,
  Protocol,
  Hostname,
  Label,
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
  API_INTEGRATION: Joi.string()
    .required()
    .valid(Integration.GRAPHQL_PRISMA, Integration.REST_MONGOOSE)
    .description('API type'),
  API_INTEGRATION_LABEL: Joi.string()
    .required()
    .valid(Label.GPI, Label.RMI)
    .description('API label'),

  // OPTIONAL
  API_PROTOCOL: Joi.string()
    .lowercase()
    .valid(Protocol.HTTP, Protocol.HTTPS)
    .default(Protocol.HTTP)
    .description('API protocol'),
  API_HOSTNAME: Joi.string()
    .hostname()
    .default(Hostname.LOCALHOST)
    .description('API host'),

  API_PORT: Joi.number().port().default(3000).description('API port'),

  /* --------------------------------------------------------------
  WINSTON
  api/config/app/src/lib/configs/winston.configuration.ts
  --------------------------------------------------------------- */

  // OPTIONAL
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
