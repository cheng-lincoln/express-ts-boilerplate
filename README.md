# Overview

This is a boilerplate for an express microservice with the following features:

- Typescript
- [Service-Model-Controller pattern with OpenAPI (auto-generated Swagger docs)](#openapi)
- [Error Handling](#error-handling)
- [Logging](#logging)
- [Unit Tests](#tests)
- Auto-Reload
- Environment Variables
- Docker Build
- [VSCode Integration (optional)](#Integration-with-vscode-(optional))



## Pre-Requisites

- Node, NPM, and Git installed



## Initializing the Repository

```bash
git clone
npm ci
npm run build # This generates the build folders with OpenAPI (swagger) routes
npm run dev

# If not required, remove example controllers, services, and models
rm -f src/controllers/DummyController.ts
rm -f src/models/DummyModel.ts
rm -f src/services/DummyService.ts
```



### Integration with VSCode (optional)

1) Install the `ESLint` extension.

2) Open any `.ts` file and click the "ESLint" button in the bottom right the VSCode window.



## OpenAPI

`tsoa` is used to automatically generate routes and Swagger docs in the `build` directory.

Access the swagger docs at the `/docs` url.



## Error Handling

See `app.ts` and `src/controllers/DummyController.ts` for catching generic and specific errors respectively.



## Logging

`morgan` logs requests automatically.

`winston` is used for custom logging. A default logger is created in `src/loggers/default.ts`. Create new loggers or modify the existing one, and then import them to use them.

```typescript
import Logger from "../loggers/default";

Logger.error("This is an error log");
Logger.warn("This is a warn log");
Logger.info("This is a info log");
Logger.http("This is a http log");
Logger.debug("This is a debug log");
```

The default logger logs both to `console` and to a directory configurable in `.env` file at the root directory.



## Unit Tests

`jest` is used for unit testing. It will look for tests in the `tests` directory.

To run unit tests:

```bash
npm run test
```



# References

1) https://tsoa-community.github.io/docs/getting-started.html

2) https://thesoreon.com/blog/how-to-set-up-eslint-with-typescript-in-vs-code

3) https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/