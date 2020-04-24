import axios from "axios";
import mock from "../mocks/$mock";
if (process.env.NODE_ENV === "development") {
  mock();
}

/* export default {
  async get(url, data, option) {
    const response = await axios.get(url, data, option)
    return response
  },
  async post(url, data, option) {
    const response = await axios.post(url, data, option)
    return response
  }
} */

const client = axios.create({
  baseURL: process.env.VUE_APP_API_URL,
  responseType: "json"
});

export default client;
