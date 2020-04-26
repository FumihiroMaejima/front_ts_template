// typescript-eslint-disable-next-line @typescript-eslint/no-var-requires
// const data = require("../data/login.json");
import data from "../data/login.json";

export default {
  post(): any {
    return [200, data];
  }
};
