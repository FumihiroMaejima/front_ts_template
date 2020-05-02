import { MutationTree } from "vuex";
import { LoginState, PostData } from "@/store/types";

// : MutationTree<State>
const mutations: MutationTree<LoginState> = {
  setNameData: (state, payload: PostData["name"]) => {
    state.postData.name = payload;
  },
  setPasswordData: (state, payload: PostData["password"]) => {
    state.postData.password = payload;
  },
  setTokenData: (state, payload: PostData["token"]) => {
    state.postData.token = payload;
  }
};

export default mutations;
