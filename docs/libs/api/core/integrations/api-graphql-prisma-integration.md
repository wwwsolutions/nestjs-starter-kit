# `api-graphql-prisma-integration`

GraphQL Prisma Integration.

## Features

- xxxxxx
- xxxxxx
- xxxxxx

### dependencies

- @nestjs/graphql
- apollo-server-express

### devDependencies

- none

### Install

```yarn
yarn add bcryptjs@^2.4.3
yarn add -D @types/bcryptjs@^2.4.2
```

### Create

```typescript
// libs/shared/utils/src/lib/authentication.utils.ts

import { compare, hash } from 'bcryptjs';

export class AuthenticationUtils {
  static async validate(
    password: string,
    hashedPassword: string
  ): Promise<boolean> {
    return await compare(password, hashedPassword);
  }

  static async hash(password: string): Promise<string> {
    return await hash(password, 10);
  }
}
```
