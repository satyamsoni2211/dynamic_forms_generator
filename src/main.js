import Vue from "vue";
import App from "./App.vue";
import VueFormulate from "@braid/vue-formulate";
import VJsoneditor from "v-jsoneditor/src/index";
import Vuetify from "vuetify";
import "vuetify/dist/vuetify.min.css";
import "material-design-icons-iconfont/dist/material-design-icons.css";
import vuetify from './plugins/vuetify'

Vue.use(VueFormulate);
Vue.use(VJsoneditor);
Vue.use(Vuetify);

Vue.config.productionTip = false;

new Vue({
  vuetify,
  render: (h) => h(App)
}).$mount("#app");
