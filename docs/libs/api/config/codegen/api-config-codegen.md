# `api-config-codegen`

Utilize Nest config service with validation.

## Features

- validation
- injectable

### Install

```bash
yarn add @nestjs/config joi
```

### Generate

```bash
// generate config lib
yarn nx generate @nrwl/nest:library --name=codegen --directory=api/config --buildable --standaloneConfig --strict --tags=type:config --no-interactive
```
