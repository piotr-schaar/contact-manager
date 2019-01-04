import Vue from "vue";
import vueResource from  'vue-resource';
import App from "./App.vue";
import router from "./router";

Vue.config.productionTip = false;

Vue.use (vueResource);
new Vue({
  router,
  render: h => h(App)
}).$mount("#app");
