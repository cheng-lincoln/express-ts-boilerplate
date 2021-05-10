import { DummyService } from "../services/DummyService";
import { Controller, Get, Route, Query, TsoaResponse, Res } from "tsoa";

@Route("dummy")
export class DummyController extends Controller {
  @Get("/ping")
  public async ping(
    @Query() count: number,
    @Res() oddCountErr: TsoaResponse<403, { message: string }>,
    @Res() tooManyPingsErr: TsoaResponse<418, { message: string }>
  ): Promise<{}> {
    if (count > 10) {
      return tooManyPingsErr(418, { message: "Too many pings." });
    }

    if (count % 2 !== 0) {
      return oddCountErr(403, { message: "Odd number of pings are not allowed." });
    }

    console.log("");

    return new DummyService().getPongs(count);
  }
}
