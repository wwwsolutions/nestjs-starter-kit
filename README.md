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
yarn add nest-winston winston
```

### Implement config service

Install and configure Nest config service with validation.

```bash
// install nest config
yarn add @nestjs/config joi
```

#### `api-config-app`

```bash
// generate config lib
yarn nx generate @nrwl/nest:library --name=app --directory=api/config --buildable --standaloneConfig --strict --tags=type:config --no-interactive
```

#### `api-config-features`

```bash
// generate config lib
yarn nx generate @nrwl/nest:library --name=features --directory=api/config --buildable --standaloneConfig --strict --tags=type:config --no-interactive
```

#### `api-config-docker`

```bash
// generate config lib
yarn nx generate @nrwl/nest:library --name=docker --directory=api/config --buildable --standaloneConfig --strict --tags=type:config --no-interactive
```

#### `api-config-codegen`

```bash
// generate config lib
yarn nx generate @nrwl/nest:library --name=codegen --directory=api/config --buildable --standaloneConfig --strict --tags=type:config --no-interactive
```
