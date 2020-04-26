import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import client from "./client";
import vuetify from "./plugins/vuetify";

Vue.config.productionTip = false;
Vue.prototype.$client = client;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

require("@/assets/scss/App.scss");
