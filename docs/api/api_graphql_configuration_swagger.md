TODO: ORGANIZE

# Nx NestJs Starter

## Configuration Swagger

```typescript
// add

// REST API DOCUMENTATION TOOLS
if (type === 'REST') {
  configureSwagger(app, appConfig);
}
```

**_Configure Swagger plugin_**

You do not have manually map/decorate dtos anymore. plugin does it for you

```json
// apps/api/project.json#targets.build.options

// add
    "tsPlugins": [
      {
        "name": "@nestjs/swagger/plugin",
        "options": {
          "dtoFileNameSuffix": [".dto.ts", ".model.ts"]
        }
      }
    ]

```

### OpenAPI generator for Angular

To auto-generate models for front-end consumption.
In this case by Angular.

```json
// create a config file `openapitools.json` at root dir
{
  "$schema": "./node_modules/@openapitools/openapi-generator-cli/config.schema.json",
  "spaces": 2,
  "generator-cli": {
    "version": "5.2.0"
  }
}
```

```json
// create a config file `openapiconfig.json` at root dir
{
  "serviceSuffix": "ApiService",
  "ngVersion": "12.0.0"
}
```

#### Add npm script

<!-- TODO: utilize api run-commands -->

```npm
// add script
"rest-api-gen": "openapi-generator-cli generate -i http://localhost:3000/api/docs-json -g typescript-angular -o libs/api/rest/data-access/api/src/lib -c openapiconfig.json"
```

#### Add .eslintignore

```bash
// add exception
libs/api/rest/data-access/api/src/lib
```

#### Generator usage

```npm
// run api & execute script
npm run rest-api-gen

// code will be generated in `libs/api/rest/data-access/api/src/lib`
```

Check `http://localhost:3000/api/v1/docs-json`
