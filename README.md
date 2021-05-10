Prerequisite

- vscode - with eslint extension
- git
- node, npm

# Overview

1.1) How to initialize the repository

- git clone
- npm ci
- npm run build
- npm run dev

1.2) How to integrate with vscode

- After opening in vscode, make sure to enable eslint (open any ts file and check the bottom right of the vscode window)

  

2) How to add endpoint

- Service, Controller, Models

- put model into models folder

- put controller into controllers folder

- example controller

  ```typescript
  @Route("ping")
  export class PingController extends Controller {
    @Get("/simple")
    public async pingSimple(
      @Query() passphrase: number
    ): Promise<{}> {
      return { message: passphrase };
    }
  
    @Post("/complex")
    public async pingComplex(
      @Body() passphrase: ComplexPassphrase,
    ): Promise<{}> {
      return { message: passphrase };
    }
  }
  ```

  

3) How to handle errors

- Generic Errors

  ```typescript
  app.use(
      function errorHandler(
          err: unknown,
          req: ExRequest,
          res: ExResponse,
          next: NextFunction
      ): ExResponse | void {
          // Validation Errors caught by tsoa
          if (err instanceof ValidateError) {
              console.warn(`Caught Validation Error for ${req.path}:`, err.fields);
              return res.status(422).json({
                  message: "Validation Failed",
                  details: err?.fields,
              });
          }
  
          // Generic uncaught Errors
          if (err instanceof Error) {
              return res.status(500).json({
                  message: "Internal Server Error",
              });
          }
  
          next();
      });
  ```

  

- Custom Errors

  ```typescript
    public async pingSimple(
      @Query() passphrase: number,
      @Res() tenErrorResponse: TsoaResponse<423, { unlucky: string }>
    ): Promise<{}> {
      if (passphrase === 10) {
        return tenErrorResponse(423, { unlucky: "10 is an unlucky number" });
      }
  
      return { message: passphrase };
    }
  ```



4) Documenting Endpoints

- Examples, Descriptions, Error Examples

https://tsoa-community.github.io/docs/descriptions.html

https://tsoa-community.github.io/docs/examples.html



5) Logging

- default logger is in loggers folder

- it will output logs to console and logs folder

- to use default logger

  ```typescript
  import Logger from "../loggers/default";
  ```

  ```typescript
      Logger.error("This is an error log");
      Logger.warn("This is a warn log");
      Logger.info("This is a info log");
      Logger.http("This is a http log");
      Logger.debug("This is a debug log");
  ```

  ```
  2021-04-28 14:28:52:2852 error: This is an error log
  2021-04-28 14:28:52:2852 warn: This is a warn log
  2021-04-28 14:28:52:2852 info: This is a info log
  2021-04-28 14:28:52:2852 http: This is a http log
  2021-04-28 14:28:52:2852 debug: This is a debug log
  ```

  

6) Unit testing

- example

  ```typescript
  describe("sample unit test", () => {
    it('test', () => {
      const response = addNumber(1,1);   // replace addNumber fn with fn that you want to test
      expect(response).toEqual(2)        // assert result
    })
  });
  ```

- to run test locally

  ```bash
  npm run test
  ```

  

# References

1) https://tsoa-community.github.io/docs/getting-started.html

2) https://thesoreon.com/blog/how-to-set-up-eslint-with-typescript-in-vs-code

3) https://www.albertgao.xyz/2017/05/24/how-to-test-expressjs-with-jest-and-supertest/