import Vue from "vue";
import router from "./router";
import App from "./App";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const fb = require('./firebase.js');

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/global.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);

/* eslint-disable no-new */
fb.auth.onAuthStateChanged(user => {
  if (!user) {
    new Vue({
      el: "#app",
      router,
      render: h => h(App)
    });
  }
});

