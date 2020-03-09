import Vue from "vue";
import Antd from "ant-design-vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "ant-design-vue/dist/antd.css";
import { axiosInstanceAuth, axiosInstanceNoAuth } from "./plugins/axios";

Vue.config.productionTip = false;

Vue.use(Antd);
Vue.prototype.$axiosNA = axiosInstanceNoAuth
Vue.prototype.$axios = axiosInstanceAuth

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
