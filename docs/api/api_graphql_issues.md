# Nx NestJs Starter

## ISSUES

- [x] Buildable library depends on another library

  **_ERROR_**

  ```npm
  nx run api-config-app:build

  // --> ERROR
  libs/api/config/app/src/lib/api-config-app.module.ts:6:36 - error TS6059: File 'E:/repos-starters/wwwsolutions-nest-starter/libs/api/config/mongo/src/index.ts' is not under 'rootDir' 'libs/api/config/app'. 'rootDir' is expected to contain all source files.
  ```

  **_SOLUTION_**

  - Library `project.json` **MUST HAVE** `targets.build` field.
  - For example, command `nx generate @nrwl/workspace:library --name=xyz` will not produce `build` field.

---

- [x] `NODE_ENV` is always set to `developer`.

  **_ERROR_**
  In NestJs/Nodejs app in Nx.Dev workspace process.env.NODE_ENV is replaced during compilation from typescript to javascript very "smart way" to "development" string constant (everything like NODE_ENV is replaced).

  **_SOLUTION_**

  Only way how can I get real NODE_ENV in **runtime** is this code:

  ```bash
  //process.env.NODE_ENV
  process.env['NODE' + '_ENV']
  ```

  **_REFERENCES_**

  [process.env.NODE_ENV always 'development' when building nestjs app with nrwl nx](https://stackoverflow.com/questions/58090082/process-env-node-env-always-development-when-building-nestjs-environment-with-nrwl-nx)

---

- [ ] NX\_\* Environment Variables not working on prod

  **_ERROR_**
  [NX\_\* Environment Variables not working on prod builds in our test/staging deployments from gitlab, but only sometimes #6891](https://github.com/nrwl/nx/issues/6891)

  **_SOLUTION_**

---

- [ ] FATAL ERROR: Ineffective mark-compacts near heap limit Allocation failed - JavaScript heap out of memory

  **_ERROR_**

  **_SOLUTION_**

  **_REFERENCES_**

  - [Node.js memory management in container environments](https://medium.com/the-node-js-collection/node-js-memory-management-in-container-environments-7eb8409a74e8)

  - [How do I determine the correct "max-old-space-size" for node.js?](https://stackoverflow.com/questions/48387040/how-do-i-determine-the-correct-max-old-space-size-for-node-js)
