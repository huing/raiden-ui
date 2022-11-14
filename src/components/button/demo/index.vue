<template>
  <section class="raiden-demo m20">
    <div class="section-title">按钮类型</div>
    <div class="flex-cont">
      <RaidenButton type="p" class="btn-color">primary</RaidenButton>
      <!-- <RaidenButton type="default">default</RaidenButton>
      <RaidenButton type="plain">plain</RaidenButton>
      <RaidenButton type="link">link</RaidenButton> -->
    </div>
    <!-- <div class="section-title">按钮大小</div>
    <div class="flex-cont">
      <RaidenButton size="large">large</RaidenButton>
      <RaidenButton size="normal">normal</RaidenButton>
      <RaidenButton size="small">small</RaidenButton>
      <RaidenButton size="mini">mini</RaidenButton>
      <RaidenButton width="200" height="60">自定义宽高</RaidenButton>
      <RaidenButton full>full</RaidenButton>
    </div>
    <div class="section-title">按钮形状</div>
    <div class="flex-cont">
      <RaidenButton circle>圆形</RaidenButton>
      <RaidenButton>默认</RaidenButton>
      <RaidenButton radius="8">自定义radius</RaidenButton>
    </div>
    <div class="section-title">禁用状态</div>
    <div class="flex-cont">
      <RaidenButton type="primary" disabled>primary</RaidenButton>
      <RaidenButton type="default" disabled>default</RaidenButton>
      <RaidenButton type="plain" disabled>plain</RaidenButton>
    </div>
    <div class="section-title">字体加粗</div>
    <div class="flex-cont">
      <RaidenButton full bold>这是加粗文本</RaidenButton>
    </div>
    <div class="section-title">自定义颜色</div>
    <div class="flex-cont">
      <RaidenButton type="primary" color="#000" full>字体颜色</RaidenButton>
      <RaidenButton type="primary" border-color="#333" full
        >边框颜色</RaidenButton
      >
      <RaidenButton type="primary" background="#fa4a11" full
        >纯色背景</RaidenButton
      >
      <RaidenButton
        background="linear-gradient(78deg,#ffb52b 2%, #ffdd44 92%)"
        border-color="#ffdd44"
        full
        >渐变色背景，要自定义borderColor</RaidenButton
      >
    </div> -->
  </section>
</template>
<script lang="ts">
// export default {
//   name: "DemoButton",
// };
</script>
<style lang="less">
.section-button {
  padding: 10px;
}
.raiden-button {
  display: inline-block;
}
.flex-cont {
  margin: 10px 0;
  .raiden-button {
    margin: 5px 5px 5px 0;
  }
}
.button-group {
  margin: 10px 0;
  display: flex;
  .raiden-button {
    width: 50%;
    font-weight: bold;
  }
  .button-group-item {
    border: 0;
  }
}
.button-del {
  font-size: 10px;
  line-height: 14px;
}
</style>
