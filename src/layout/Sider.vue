<!-- <template>
  <div class="layout-sider"></div>
</template>

<script setup lang="ts"></script>

<style scoped lang="less"></style> -->

<template>
  <div class="layout-sider">
    <div class="layout-sider-logo">
      <img src="https://cdn.leoao.com/lefit-icon.png" alt="" />
      <span>Raiden-UI</span>
    </div>
    <div v-for="(item, index) in list" :key="index" class="menu">
      <router-link
        class="menu-item"
        :to="item.path"
        :class="{ 'is-active': $route.path === item.path }"
      >
        {{ item.name }}
      </router-link>
    </div>
  </div>
</template>

<script setup lang="ts">
import { routes } from "./router";

const list = routes?.filter((item) => item.name);

// console.log("routes", list);
</script>
<style lang="less">
.layout-sider-logo {
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
.menu-item {
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
