<template>
  <div class="layout-preview">
    <iframe id="iframe" ref="iframe" src="/preview/index.html"></iframe>
  </div>
</template>

<script setup lang="ts">
// const src = window.location.hash
//   ? `/preview/index.html/${window.location.hash}`
//   : "/preview/index.html";
// console.log(123, window.location, window.VueRouter);
</script>

<style scoped>
#iframe {
  border: 0;
  width: 100%;
  height: 100%;
}
</style>
