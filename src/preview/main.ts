import Vue from "vue";
// import UI from "@/components";
import Button from "@/components/button/index";
import App from "./App.vue";
import router from "./router";

// 这边引用components中未编译的组件；若要引用编译之后的版本，引用"@/lib/index"
// import UI from '@/lib/index'
Vue.use(Button);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
