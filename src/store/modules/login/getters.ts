import { GetterTree } from "vuex";
import { LoginState, RootState } from "@/store/types";

const getters: GetterTree<LoginState, RootState> = {
  name: (state: LoginState) => state.postData.name,
  password: (state: LoginState) => state.postData.password,
  token: (state: LoginState) => state.postData.token
};

export default getters;
