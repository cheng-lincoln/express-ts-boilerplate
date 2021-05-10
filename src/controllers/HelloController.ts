import { ComplexPassphrase } from "../models/ComplexPassphrase";
import { Controller, Get, Route, Query, Body, Post, TsoaResponse, Res } from "tsoa";
import Logger from "../loggers/default";

@Route("ping")
export class PingController extends Controller {
  @Get("/simple")
  public async pingSimple(
    @Query() passphrase: number,
    @Res() tenErrorResponse: TsoaResponse<423, { unlucky: string }>
  ): Promise<{}> {
    Logger.error("This is an error log");
    Logger.warn("This is a warn log");
    Logger.info("This is a info log");
    Logger.http("This is a http log");
    Logger.debug("This is a debug log");
    if (passphrase === 10) {
      return tenErrorResponse(423, { unlucky: "10 is an unlucky number" });
    }

    return { message: passphrase };
  }

  @Post("/complex")
  public async pingComplex(
    @Body() passphrase: ComplexPassphrase,
  ): Promise<{}> {
    return { message: passphrase };
  }
}

export const addNumber = (a: number, b: number): number => {
  return a+b;
}