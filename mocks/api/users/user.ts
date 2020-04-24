// const data = require("../../data/users/user.json");
import data from "../../data/users/user.json";

export default {
  get(): any {
    return [200, data];
  }
};
