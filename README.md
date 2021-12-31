# nx-nestjs-integrations-template

## Features

- custom logger - "nest-winston": "^1.6.2", "winston": "^3.3.3"
- config service - @nestjs/config

### Generate App

```bash
yarn add -D @nrwl/nest
# yarn nx generate @nrwl/nest:application --name=api --standaloneConfig --tags=scope:graphql,type:api --no-interactive
yarn nx generate @nrwl/nest:application --name=api --standaloneConfig --tags=scope:type:api --no-interactive
```

### Implement custom logger

Install and configure Winston as a custom logger.

```bash
// install winston
yarn add --save nest-winston@^1.6.2 winston@^3.3.3
```

### Implement config service

Install and configure Nest config service.
