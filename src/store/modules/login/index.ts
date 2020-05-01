import { Module } from "vuex";
import { LoginState, RootState } from "@/store/types";
import getters from "./getters";
import actions from "./actions";
import mutations from "./mutations";

const state: LoginState = {
  postData: {
    name: "",
    password: "",
    token: ""
  }
};

export const login: Module<LoginState, RootState> = {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
