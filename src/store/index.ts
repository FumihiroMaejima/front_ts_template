import Vue from "vue";
import Vuex from "vuex";
// import { RootState } from '@/store/modules/types';
import loginModule from "@/store/modules/login";

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== "production",
  modules: {
    login: loginModule
  },
  mutations: {},
  actions: {}
});
