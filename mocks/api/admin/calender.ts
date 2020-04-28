import data from "../../data/admin/calender.json";

export default {
  get(): any {
    return [200, data];
  }
};
