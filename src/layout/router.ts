import Vue from "vue";
import VueRouter from "vue-router";
import type { RouteConfig } from "vue-router";

Vue.use(VueRouter);

const routes: RouteConfig[] = [{ path: "/", redirect: "/button" }];

const modulesPage = import.meta.glob("@/components/**/README.md");

for (const path in modulesPage) {
  const [, name] = /components\/(.*)\/README.md/.exec(path) || [];
  // console.log("name---", path, name);
  // 大写的
  // const capitalized = name.charAt(0).toUpperCase() + name.slice(1);
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
export { routes };
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
