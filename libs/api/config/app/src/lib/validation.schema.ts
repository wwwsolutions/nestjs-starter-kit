import * as Joi from 'joi';

import {
  Env,
  ApiProtocol,
  ApiHostname,
  graphqlPrismaIntegration,
  restMongooseIntegration,
  apiGraphql,
  apiRest,
  WinstonLogLevel,
  Colors,
} from '@wwwsolutions/api/common/types';

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
    .valid(apiGraphql.type, apiRest.type)
    .description('API type'),
  API_INTEGRATION: Joi.string()
    .required()
    .valid(
      graphqlPrismaIntegration.integration,
      restMongooseIntegration.integration
    )
    .description('API integration'),
  API_INTEGRATION_LABEL: Joi.string()
    .required()
    .valid(graphqlPrismaIntegration.label, restMongooseIntegration.label)
    .description('API label'),

  // OPTIONAL
  API_PROTOCOL: Joi.string()
    .lowercase()
    .valid(ApiProtocol.HTTP, ApiProtocol.HTTPS)
    .default(ApiProtocol.HTTP)
    .description('API protocol'),
  API_HOSTNAME: Joi.string()
    .hostname()
    .default(ApiHostname.LOCALHOST)
    .description('API host'),
  API_PORT: Joi.number().port().default(3000).description('API port'),

  /* --------------------------------------------------------------
  CHALK
  api/config/app/src/lib/configs/chalk.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  THEME_COLOR_BLUE: Joi.string()
    .default(Colors.blue)
    .description('theming: color BLUE'),
  THEME_COLOR_INDIGO: Joi.string()
    .default(Colors.indigo)
    .description('theming: color INDIGO'),
  THEME_COLOR_PURPLE: Joi.string()
    .default(Colors.purple)
    .description('theming: color PURPLE'),
  THEME_COLOR_PINK: Joi.string()
    .default(Colors.pink)
    .description('theming: color PINK'),
  THEME_COLOR_RED: Joi.string()
    .default(Colors.red)
    .description('theming: color RED'),
  THEME_COLOR_ORANGE: Joi.string()
    .default(Colors.orange)
    .description('theming: color ORANGE'),
  THEME_COLOR_YELLOW: Joi.string()
    .default(Colors.yellow)
    .description('theming: color YELLOW'),
  THEME_COLOR_GREEN: Joi.string()
    .default(Colors.green)
    .description('theming: color GREEN'),
  THEME_COLOR_TEAL: Joi.string()
    .default(Colors.teal)
    .description('theming: color TEAL'),
  THEME_COLOR_CYAN: Joi.string()
    .default(Colors.cyan)
    .description('theming: color CYAN'),
  THEME_COLOR_GRAY: Joi.string()
    .default(Colors.gray)
    .description('theming: color GRAY'),
  THEME_COLOR_BLACK: Joi.string()
    .default(Colors.black)
    .description('theming: color BLACK'),

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
