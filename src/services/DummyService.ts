import * as _ from "lodash";
import { Pong } from "../models/DummyModel";

export class DummyService {
  public async getPongs(count: number): Promise<Readonly<Pong[]>> {
    return _.times(count, _.constant({ pong: true }));
  }
}
