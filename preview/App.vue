<template>
  <div>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import router from "@/router";

// console.log(456, window.location, window.VueRouter);
window.addEventListener("message", (event) => {
  console.log("iframe message", event.data);
  // router.push(event.data.path);
  // router.push("/button");
});
</script>

<style lang="less">
@import "@/theme/common.less";
</style>
