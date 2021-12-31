# `api-config-app`

Implement and utilize Nest `ConfigService` with validation.

## Features

- validation
- injectable

### Install

```bash
yarn add @nestjs/config joi
```

### Generate

```bash
// generate lib
yarn nx generate @nrwl/nest:library --name=app --directory=api/config --buildable --standaloneConfig --strict --tags=type:config --no-interactive
```

### Create

#### `app.configuration.ts`

```typescript
// libs/api/config/app/src/lib/configs/app.configuration.ts

import { Inject } from '@nestjs/common';
import { ConfigType, registerAs } from '@nestjs/config';

export const appConfiguration = registerAs('app', () => ({
  type: process.env.API_TYPE,
  protocol: process.env.API_PROTOCOL,
  host: process.env.API_HOST,
  port: Number(process.env.API_PORT),
  prefix: process.env.API_PREFIX,
  integration: process.env.API_INTEGRATION,

  get domain(): string {
    return `${this.protocol}://${this.host}:${this.port}`;
  },

  get path(): string {
    return `${this.prefix}`;
  },
}));

export type AppConfiguration = ConfigType<typeof appConfiguration>;

export const InjectAppConfig = () => Inject(appConfiguration.KEY);
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
