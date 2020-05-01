import Vue from "vue";
import Vuex, { StoreOptions } from "vuex";
import { RootState } from "@/store/types";
import { login } from "@/store/modules/login";

Vue.use(Vuex);

const store: StoreOptions<RootState> = {
  strict: process.env.NODE_ENV !== "production",
  state: {
    version: "1.0.0"
  },
  modules: {
    login
  },
  mutations: {},
  actions: {}
};

export default new Vuex.Store<RootState>(store);
