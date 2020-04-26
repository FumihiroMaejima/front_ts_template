import { GetterTree, MutationTree, ActionTree } from "vuex";
import { State, RootState } from "@/store/modules/types";
/* interface RootState {
  state: string
}

interface State{
  postData: {
    name: string,
    passsword: string,
    token: string
  }
} */

export const postData = {
  name: "",
  passsword: "",
  token: ""
};

const state: State = {
  postData: {
    name: "",
    passsword: "",
    token: ""
  }
};

const getters: GetterTree<State, RootState> = {
  name: (state: State) => state.postData.name,
  passsword: (state: State) => state.postData.passsword,
  token: (state: State) => state.postData.token
};

const actions: ActionTree<State, RootState> = {
  getNameDataAction({ commit }, payload: string) {
    commit("setNameData", payload);
  },
  getPassswordDataAction({ commit }, payload: string) {
    commit("setPassswordData", payload);
  },
  getTokenDataAction({ commit }, payload: string) {
    commit("setTokenData", payload);
  }
};

// : MutationTree<State>
const mutations: MutationTree<State> = {
  setNameData(state, payload) {
    state.postData.name = payload;
  },
  setPassswordData(state, payload) {
    state.postData.passsword = payload;
  },
  setTokenData(state, payload) {
    state.postData.token = payload;
  }
};

export default {
  namespaced: true,
  state,
  getters,
  actions,
  mutations
};
