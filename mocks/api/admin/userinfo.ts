import data from "../../data/admin/userinfo.json";

export default {
  get(): any {
    return [200, data];
  }
};
