import axios from "axios";
import mock from "../mocks/$mock";
if (process.env.NODE_ENV === "development") {
  mock();
}

const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  responseType: "json"
});

export default client;
