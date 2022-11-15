<template>
  <div id="layout">
    <LayoutSider />
    <LayoutContent />
    <LayoutPreview />
  </div>
</template>

<script setup lang="ts">
import LayoutSider from "./Sider.vue";
import LayoutContent from "./Content.vue";
import LayoutPreview from "./Preview.vue";
</script>
<style lang="less">
body,
div {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.layout {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  &::-webkit-scrollbar {
    display: none; /* Chrome Safari */
  }
}

.layout-sider {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  width: 220px;
  z-index: 1;
  overflow-y: scroll;
  // background-color: #fff;
  box-shadow: 0 8px 12px #ebedf0;
  // background: rebeccapurple;
}

.layout-content {
  width: 100%;
  // height: 100vh;
  box-sizing: border-box;
  padding: 0 390px 0 220px;
  overflow: hidden;
  // background: black;
}

.layout-preview {
  position: fixed;
  top: 30px;
  bottom: 30px;
  right: 15px;
  width: 375px;
  min-width: 375px;
  box-sizing: border-box;
  overflow: hidden;
  border-radius: 24px;
  box-shadow: #ebedf0 0 4px 12px;
  // background: green;
}

@media screen and (max-width: 800px) {
  .layout-sider,
  .layout-content {
    display: none;
  }
}
</style>
