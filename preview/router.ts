import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes: [
    { path: "/", redirect: "/button" },
    {
      path: "/button",
      name: "Button",
      component: () => import("@/components/button/demo/index.vue"),
    },
    // {
    //   path: "/checkbox",
    //   name: "Checkbox",
    //   component: () => import("@/components/checkbox/demo/index.vue"),
    // },
  ],
});

export default router;

// window.VueRouter = router;

// router.beforeEach((to, from, next) => {
//   console.log("to", document.querySelector("iframe"));

//   window.postMessage({ path: "ccc" }, "*");
//   document
//     .querySelector("iframe")
//     ?.contentWindow?.postMessage({ path: "ddd" }, "*");

//   next();
//   // ...
// });
