# `api`

Implement and utilize app.

## Features

- api integrations

### Generate

```bash
// generate app
yarn add -D @nrwl/nest
yarn nx generate @nrwl/nest:application --name=api --standaloneConfig --tags=type:api --no-interactive
```

### Remove files

```bash
// apps/api/src/app/app.controller.ts
// apps/api/src/app/app.controller.spec.ts
// apps/api/src/app/app.service.ts
// apps/api/src/app/app.service.spec.ts
// .gitkeep
```

### Create

#### `app-module.ts`

```typescript
// apps/api/src/app/app-module.ts

import { Module } from '@nestjs/common';

import { ApiCoreModule } from '@wwwsolutions/api/core';

@Module({
  imports: [ApiCoreModule],
})
export class AppModule {}
```

#### `main.ts`

```typescript
// apps/api/src/main.ts
```

#### `.env.local`

```yaml
// apps/api/.env.local
```

#### `.env.development`

```yaml
// apps/api/.env.development

# DEVELOPMENT MODE

##### WINSTON CONFIGURATION ############################################################################

### REQUIRED
WINSTON_LEVEL_CONSOLE='verbose'
WINSTON_PRETTY_PRINT=true
WINSTON_LEVEL_FILE='silly'
WINSTON_FILE_PATH='logs/app.log'


##### API CONFIGURATION ################################################################################

### REQUIRED
API_INTEGRATION='ApiGraphqlPrismaIntegration'

### OPTIONAL
# API_TYPE='GraphqlApi'
# API_PROTOCOL='http'
# API_HOST='localhost'
# API_PORT=3000
# API_PREFIX='graphql'
```

#### `.env.production`

```yaml
// apps/api/.env.production
```

#### `.env.staging`

```yaml
// apps/api/.env.staging
```

#### `.env.test`

```yaml
// apps/api/.env.test
```

#### `.env.example`

```yaml
// apps/api/.env.test
```

---
