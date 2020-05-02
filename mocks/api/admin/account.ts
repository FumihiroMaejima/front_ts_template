import data from "../../data/admin/account.json";

export default {
  get(): any {
    return [200, data];
  }
};
