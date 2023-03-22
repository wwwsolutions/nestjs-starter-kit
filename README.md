# NestJS Starter Kit

<p align="center">
<img src="https://avatars1.githubusercontent.com/u/43827489?s=400&u=45ac0ac47d40b6d8f277c96bdf00244c10508aef&v=4"/>
<img src="https://raw.githubusercontent.com/nrwl/nx/master/nx-logo.png" width="150">
</p>

Nx Monorepo **NestJS** starter with various **RestAPI** and **GraphQL** integrations.

<!-- https://github.com/dwyl/repo-badges/blob/main/README.md -->

[<img alt="Node.js" src="https://img.shields.io/badge/node-v16+-brightgreen?logo=node.js&style=flat" />](https://nodejs.org/en/)
[<img alt="TypeScript" src="https://img.shields.io/github/package-json/dependency-version/bkonkle/nestjs-example-caster-api/dev/typescript?logo=typescript&style=flat&color=3178c6" />](https://www.typescriptlang.org/)
[<img alt="GraphQL" src="https://img.shields.io/github/package-json/dependency-version/bkonkle/nestjs-example-caster-api/graphql?logo=graphql&style=flat&color=e10098" />](https://graphql.org/)
[<img alt="Nest.js" src="https://img.shields.io/github/package-json/dependency-version/bkonkle/nestjs-example-caster-api/@nestjs/core?logo=nestjs&style=flat&color=ea2845" />](https://nestjs.com/)
[<img alt="Prisma" src="https://img.shields.io/github/package-json/dependency-version/bkonkle/nestjs-example-caster-api/@prisma/client?logo=prisma&style=flat&color=38a169" />](https://www.prisma.io/)
[<img alt="Socket.io" src="https://img.shields.io/github/package-json/dependency-version/bkonkle/nestjs-example-caster-api/socket.io?logo=socket.io&style=flat&color=25c2a0" />]()
[<img alt="ioredis" src="https://img.shields.io/github/package-json/dependency-version/bkonkle/nestjs-example-caster-api/ioredis?logo=redis&style=flat&color=a51f17" />](https://github.com/luin/ioredis)

**See [wiki](https://github.com/wwwsolutions/nestjs-starter-kit/wiki) for details.**

---

## TODOS

- [ ] Integrate CerBos (authorization) with NestJS
- [x] bump workspace
- [x] bump prisma
- [ ] fix prisma config for migrations - env variables DATABASE_URL & DATABASE_URL_PROD
- [ ] fix env environment config loading
- [ ] Configure and test error handling: graphql-prisma-integration vs rest-mongoose-integration

## IMPORTANT

### CHALK

Chalk 5 is ESM. If you want to use Chalk with TypeScript or a build tool, you will probably want to use Chalk 4 for now. [Read more](https://github.com/chalk/chalk/releases/tag/v5.0.0)

### TASKS
