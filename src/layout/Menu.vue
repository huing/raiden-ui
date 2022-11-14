<template>
  <div class="component-list">
    <div class="doc-logo">
      <img src="https://cdn.leoao.com/lefit-icon.png" alt="" />
      <span>Raiden-UI</span>
    </div>
    <div v-for="(item, index) in list" :key="index">
      <!-- <router-link
        class="doc-cell"
        :to="item.path"
        :class="{ 'is-active': $route.path === item.path }"
      >
        {{ item.name }}
      </router-link> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import router from "../router";

const list = router.options.routes?.filter((item) => item.name);

// console.log("routes", list);

// export default {
//   name: "LayoutMenu",
//   data() {
//     // RouteConfig
//     return {
//       list: [],
//     };
//   },
//   created() {
//     this.list = router.options.routes?.filter((item) => item.name);
//   },
// };
</script>
<style lang="less">
.doc-logo {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px 0;
  img {
    width: 50px;
    height: 50px;
    display: inline-block;
  }
  span {
    color: var(--raiden-primary-color);
    font-size: 16px;
    padding-top: 10px;
  }
}
.doc-cell {
  box-sizing: border-box;
  color: var(--raiden-gray-3);
  font-size: 14px;
  min-height: 48px;
  display: block;
  overflow: hidden;
  position: relative;
  text-decoration: none;
  display: flex;
  justify-content: center;
  align-items: center;
  &.is-active {
    color: var(--raiden-primary-color);
  }
}
</style>
