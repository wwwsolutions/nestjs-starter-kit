# `conversion.utils.ts`

Utils collection.

## Features

- util_1
- util_2
- util_3

### dependencies

- none

### devDependencies

- none

### Install

```yarn
yarn add bcryptjs@^2.4.3
yarn add -D @types/bcryptjs@^2.4.3
```

### Create

```typescript
// libs/shared/utils/src/lib/conversion.utils.ts

export class ConversionUtils {
  static convertToBoolean(input: string): boolean | undefined {
    try {
      return JSON.parse(input);
    } catch (e) {
      return undefined;
    }
  }
}
```
