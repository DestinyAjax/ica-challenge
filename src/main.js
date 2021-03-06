import Vue from "vue";
import Axios from "axios";
import VueSweetalert2 from "vue-sweetalert2";
import VueLodash from "vue-lodash";
import lodash from "lodash";
import router from "./router";
import App from "./App";
import { BootstrapVue, IconsPlugin } from "bootstrap-vue";

const fb = require('./firebase.js');

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "./assets/css/global.css";
import "sweetalert2/dist/sweetalert2.min.css";

Vue.config.productionTip = false;

Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
Vue.use(VueSweetalert2);
Vue.use(VueLodash, { lodash: lodash });

Vue.prototype.$http = Axios;

/* eslint-disable no-new */
fb.auth.onAuthStateChanged(() => {
  new Vue({
    el: "#app",
    router,
    render: h => h(App)
  });
});

