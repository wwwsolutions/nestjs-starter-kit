import * as Joi from 'joi';
import joiPassword from 'joi-password';

// VALIDATES ENVIRONMENT VARIABLES SET IN `.env` FILE
// SET DEFAULT VALUES HERE
export const validationSchema = Joi.object({
  /* --------------------------------------------------------------
  ADMIN
  api/config/features/src/lib/configs/admin.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  ADMIN_EMAIL: Joi.string()
    .email()
    .required()
    .description('API default admin email'),
  ADMIN_PASSWORD: Joi.string()
    .required()
    .description('API default admin password'),

  /* --------------------------------------------------------------
  JWT
  api/config/features/src/lib/configs/jwt.configuration.ts
  --------------------------------------------------------------- */

  // REQUIRED
  JWT_SECRET: joiPassword
    .string()
    .required()
    .minOfSpecialCharacters(2)
    .minOfLowercase(2)
    .minOfUppercase(2)
    .minOfNumeric(2)
    .noWhiteSpaces()
    .description('JWT secret'),

  // OPTIONAL
  JWT_SIGN_OPTIONS_EXPIRES_IN: Joi.number()
    .positive()
    .default(3600)
    .description('JWT sign options expires'),
});
