# `authentication.utils.ts`

Utils collection.

## Features

- util_1
- util_2
- util_3

### dependencies

- bcryptjs

### devDependencies

- @types/bcryptjs

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
