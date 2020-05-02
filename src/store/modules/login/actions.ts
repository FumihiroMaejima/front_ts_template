import { ActionTree } from "vuex";
import { LoginState, PostData, RootState } from "@/store/types";

const actions: ActionTree<LoginState, RootState> = {
  getNameDataAction: ({ commit }, payload: PostData["name"]) => {
    commit("setNameData", payload);
  },
  getPasswordDataAction: ({ commit }, payload: PostData["password"]) => {
    commit("setPasswordData", payload);
  },
  getTokenDataAction: ({ commit }, payload: PostData["token"]) => {
    commit("setTokenData", payload);
  }
};

export default actions;
