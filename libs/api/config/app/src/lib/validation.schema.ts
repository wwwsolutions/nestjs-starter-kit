import * as Joi from 'joi';

import { Env } from './environment.constants';

// VALIDATES ENVIRONMENT VARIABLES SET IN `.env` FILE
// SET DEFAULT VALUES HERE
export const validationSchema = Joi.object({
  /* --------------------------------------------------------------
  ENVIRONMENT
  api/config/app/src/lib/configs/environment.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  NODE_ENV: Joi.string()
    .valid(Env.DEVELOPMENT, Env.PRODUCTION, Env.STAGING, Env.TESTING)
    .required()
    .description('api: NODE_ENV'),

  /* --------------------------------------------------------------
  APP/API
  api/config/app/src/lib/configs/app.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  API_INTEGRATION: Joi.string()
    .valid('ApiGraphqlPrismaIntegration', 'ApiRestPrismaIntegration')
    .required()
    // .default('ApiGraphqlPrismaIntegration')
    .description('API integration'),

  // OPTIONAL
  API_TYPE: Joi.string()
    .valid('GraphqlApi', 'RestApi')
    .default('GraphqlApi')
    .description('API type'),
  API_PROTOCOL: Joi.string()
    .lowercase()
    .valid('http', 'https')
    .default('http')
    .description('API protocol'),
  API_HOST: Joi.string().default('localhost').description('API host'),
  API_PORT: Joi.number().port().default(3000).description('API port'),
  API_PREFIX: Joi.string()
    .case('lower')
    .valid('graphql', 'rest')
    .default('graphql')
    .description('API prefix'),

  /* --------------------------------------------------------------
  ADMIN
  api/config/app/src/lib/configs/admin.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  ADMIN_EMAIL: Joi.string()
    .email()
    .default('admin@example.com')
    .description('API default admin email'),
  ADMIN_PASSWORD: Joi.string()
    .default('password')
    .description('API default admin password'),
});
