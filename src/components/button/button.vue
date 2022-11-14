<template>
  <button class="raiden-button" :class="`raiden-button-${props.type}`">
    button
  </button>
</template>
<script lang="ts">
export default {
  name: "RaidenButton",
};
</script>

<script setup lang="ts">
export interface ButtonProps {
  // 按钮类型
  type?: "a" | "b";
}
const props = withDefaults(defineProps<ButtonProps>(), {
  type: "a",
});
</script>

<style lang="less">
.raiden-button {
  color: red;
  background-color: antiquewhite;
  padding: 0.5rem 1rem;
  &-a {
    color: aqua;
  }
  &-b {
    color: greenyellow;
  }
}
</style>
