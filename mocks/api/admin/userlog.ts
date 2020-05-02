import data from "../../data/admin/userlog.json";

export default {
  get(): any {
    return [200, data];
  }
};
