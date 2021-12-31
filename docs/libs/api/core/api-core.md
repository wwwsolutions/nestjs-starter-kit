# `api-core`

Implement and utilize api-core lib.

## Features

- api integrations

### Generate

```bash
// generate lib
yarn nx generate @nrwl/nest:library --name=core --directory=api --buildable --standaloneConfig --strict --tags=type:config --no-interactive --service
```

### Create

#### `api-core-module.ts`

- integration module registration
- feature modules registration

```typescript
// libs/api/core/src/lib/api-core.module.ts

import { Module } from '@nestjs/common';

@Module({
  imports: [
    /* <REQUIRED>
     *
     * REGISTER SINGLE INTEGRATION MODULE DEPENDING ON
     * WHICH API IMPLEMENTATION YOU WANT TO UTILIZE
     *
     * <various integrations>
     *
     *    ApiGraphqlPrismaIntegrationModule
     *    ApiRestPrismaIntegrationModule
     *    ApiRestMongooseIntegrationModule
     *    ApiRestTypeormIntegrationModule
     *
     */
    // ApiGraphqlPrismaIntegrationModule,
    /* <OPTIONAL>
     *
     * REGISTER DOMAIN FEATURE MODULES
     * THESE MODULES HOLD BUSINESS LOGIC
     *
     * <examples>
     *
     *    ApiGraphqlUsersFeatureModule,
     *    ApiGraphqlAuthenticationFeatureModule,
     *    ApiGraphqlRolesFeatureModule,
     *
     */
    // ApiGraphqlUsersFeatureModule,
  ],
  providers: [
    /* <OPTIONAL>
     *
     * IN CASE OF GRAPHQL INTEGRATION REGISTER RESOLVERS
     *
     * <examples>
     *
     *    ApiCoreResolver,
     */
    // ApiCoreResolver,
  ],
  controllers: [
    /* <OPTIONAL>
     *
     * IN CASE OF REST INTEGRATION REGISTER CONTROLLERS
     *
     * <examples>
     *
     *    ApiCoreController,
     */
    // ApiCoreController,
  ],
})
export class ApiCoreModule {}
```

#### `environment.configuration.ts`

```typescript
// libs/api/config/app/src/lib/configs/environment.configuration.ts

import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const environmentConfiguration = registerAs('environment', () => ({
  env: process.env['NODE' + '_ENV'],
}));

export type EnvironmentConfiguration = ConfigType<
  typeof environmentConfiguration
>;

export const InjectEnvironmentConfig = () =>
  Inject(environmentConfiguration.KEY);
```

#### `constants.ts`

```typescript
// libs/api/config/app/src/lib/constants.ts

export enum Env {
  PRODUCTION = 'production',
  DEVELOPMENT = 'development',
  STAGING = 'staging',
  TESTING = 'testing',
}
```

#### `validation.schema.ts`

```typescript
// libs/api/config/app/src/lib/validation.schema.ts

import * as Joi from 'joi';

import { Env } from './constants';

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
});
```

#### `api-config-app.module.ts`

```typescript
// libs/api/config/app/src/lib/api-config-app.module.ts

import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { environmentConfiguration } from './configs/environment.configuration';
import { appConfiguration } from './configs/app.configuration';

import { validationSchema } from './validation.schema';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [
        'apps/api/.env.local',
        `apps/api/.env.${process.env['NODE' + '_ENV']}`,
      ],
      validationSchema,
      load: [environmentConfiguration, appConfiguration],
    }),
  ],
})
export class ApiConfigAppModule {}
```

#### `barrel`

```typescript
// libs/api/config/app/src/index.ts

export * from './lib/api-config-app.module';
export * from './lib/constants';
export * from './lib/configs/app.configuration';
export * from './lib/configs/environment.configuration';
```

---

## References

- [Using the ConfigService](https://docs.nestjs.com/techniques/configuration#using-the-configservice)
