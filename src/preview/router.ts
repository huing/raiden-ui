import Vue from "vue";
import VueRouter from "vue-router";
import type { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [{ path: "/", redirect: "/button" }];

const modulesPage = import.meta.glob("@/components/**/demo/index.vue");

for (const path in modulesPage) {
  const [, name] = /components\/(.*)\/demo\/index.vue/.exec(path) || [];
  // console.log("name---", path, name);
  routes.push({
    path: "/" + name,
    component: modulesPage[path],
    name,
    // meta: {
    //   ComponentName: findComponentName(name)
    // }
  });
}

const router = new VueRouter({
  mode: "hash",
  base: import.meta.env.BASE_URL,
  routes,
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
