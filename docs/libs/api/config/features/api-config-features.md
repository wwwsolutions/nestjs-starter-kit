# `api-config-features`

Utilize Nest config service with validation.

## Features

- validation
- injectable

### Install

```bash
yarn add @nestjs/config@^1.1.0
yarn add joi@^17.4.2
yarn add @nestjs/jwt@8.0.0
```

### Generate

```bash
// generate config lib
yarn nx generate @nrwl/nest:library --name=features --directory=api/config --buildable --standaloneConfig --strict --tags=type:config --no-interactive
```
