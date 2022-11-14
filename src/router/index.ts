import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes: [
    // { path: "*", redirect: "/" },
    { path: "/", redirect: "/button" },
    {
      path: "/button",
      name: "Button",
      component: () => import("@/components/button/README.md"),
    },
  ],
});

export default router;

// window.VueRouter = router;

// router.beforeEach((to, from, next) => {
//   console.log("toto", document.getElementById("iframe"));

//   // window.postMessage({ path: "aaa" }, "*");
//   document
//     .querySelector("iframe")
//     ?.contentWindow?.postMessage({ path: "bbb" }, "*");

//   next();
//   // ...
// });
