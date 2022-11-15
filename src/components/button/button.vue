<template>
  <button
    class="raiden-button"
    :class="[
      'raiden-button-' + type,
      'raiden-button-size-' + size,
      {
        'is-disabled': disabled,
        'is-full': full,
        'is-circle': circle,
        'is-bold': bold,
      },
    ]"
    :disabled="isDisabled"
    @click="handleClick"
    :style="{
      background: background,
      borderColor: borderColor || background,
      width: `${width}px`,
      height: `${height}px`,
      borderRadius: `${radius}px`,
    }"
  >
    <span class="raiden-button-text" :style="{ color: color }"
      ><slot></slot
    ></span>
  </button>
</template>

<script lang="ts">
/**
 * RaidenButton 按钮
 * @description 按钮组件
 * @property {String} type = [primary|secondary|default|plain] - 类型，默认primary
 *  @value primary 主要按钮
 *  @value secondary 次要按钮
 *  @value default 默认按钮
 *  @value plain 朴素按钮
 * @property {String} size = [large|normal|small|mini] - 尺寸，默认normal
 *  @value large
 *  @value normal
 *  @value small
 *  @value mini
 * @property {Number | String} width - 固定宽度 传width时full属性不生效
 * @property {Number | String} height - 固定高度
 * @property {Boolean} full - 宽度填满 即默认100%
 * @property {Boolean} circle - 圆形按钮 每个尺寸设置了各自默认radius，可设置radius修改
 * @property {Number | String} radius - 圆弧大小 可选
 * @property {Boolean} disabled - 禁用按钮，默认false
 * @property {Boolean} bold - 字体加粗，默认false
 * @property {String} color - 自定义字体颜色
 * @property {String} borderColor - 自定义边框颜色，若设置了background，borderColor跟随设置的background改变
 * @property {String} background - 自定义背景色
 * @event {Function} click 点击事件
 */
export default {
  name: "RaidenButton",
};
</script>

<script setup lang="ts">
// export interface ButtonProps {
//   // 按钮类型
//   type?: "a" | "b";
// }
// const props = withDefaults(defineProps<ButtonProps>(), {
//   type: "a",
// });

import { computed } from "vue";
const props = defineProps({
  disabled: {
    type: Boolean,
    default: false,
  },
  full: {
    type: Boolean,
    default: false,
  },
  /**
   * @property 按键尺寸,默认normal
   * @values 'normal', 'large', 'small', 'mini'
   */
  size: {
    type: String,
    default: "normal",
    validator(value: string) {
      return ["normal", "large", "small", "mini"].indexOf(value) > -1;
    },
  },
  /**
   *  @property 类型，默认primary
   *  @value primary 主要按钮
   *  @value secondary 次要按钮
   *  @value default 默认按钮
   *  @value plain 朴素按钮
   */
  type: {
    type: String,
    default: "primary",
    validator(value: string) {
      return (
        ["primary", "secondary", "default", "plain", "link"].indexOf(value) > -1
      );
    },
  },
  bold: {
    type: Boolean,
    default: false,
  },
  circle: {
    type: Boolean,
    default: false,
  },
  color: {
    type: String,
  },
  background: {
    type: String,
  },
  borderColor: {
    type: String,
  },
  width: {
    type: [Number, String],
  },
  height: {
    type: [Number, String],
  },
  radius: {
    type: [Number, String],
  },
});

const isDisabled = computed(() => {
  if (props.disabled === true) {
    return true;
  } else {
    return false;
  }
});

const emit = defineEmits<{ (event: "click", evt: MouseEvent): void }>();

const handleClick = (evt: MouseEvent) => {
  emit("click", evt);
};
</script>

<style lang="less">
@import "../../theme/var-theme.less";
:root {
  // 主要背景色
  --raiden-btn-primary-color: var(--raiden-primary-color);
  // 文本颜色
  --raiden-btn-text-color: var(--raiden-white);
  // 边框颜色
  --raiden-btn-border-color: var(--raiden-primary-color);
  // 禁用
  --raiden-btn-disabled-color: var(--raiden-gray-5);
  // 圆角
  --raiden-btn-border-radius: var(--raiden-radius-base);
}
.raiden-button {
  appearance: none;
  background-color: transparent;
  border: none;
  box-sizing: border-box;
  color: inherit;
  outline: none;
  overflow: hidden;
  position: relative;
  text-align: center;
  font-size: var(--raiden-font-size-base);
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "PingFangSC", "PingFangSC-Regular";
  border-radius: var(--raiden-btn-border-radius);
  &-primary {
    color: var(--raiden-btn-text-color);
    background: var(--raiden-btn-primary-color);
    border: 1px solid var(--raiden-btn-primary-color);
    &.is-disabled {
      color: var(--raiden-btn-text-color);
      background: var(--raiden-btn-disabled-color);
      border: 1px solid var(--raiden-btn-disabled-color);
    }
  }
  &-default {
    color: var(--raiden-btn-primary-color);
    background: var(--raiden-btn-text-color);
    border: 1px solid var(--raiden-btn-primary-color);
    &.is-disabled {
      color: var(--raiden-btn-disabled-color);
      border: 1px solid var(--raiden-btn-disabled-color);
    }
  }
  &-plain {
    color: var(--raiden-gray-3);
    background: var(--raiden-btn-text-color);
    border: 1px solid var(--raiden-gray-3);
    &.is-disabled {
      color: var(--raiden-btn-disabled-color);
      border: 1px solid var(--raiden-btn-disabled-color);
    }
  }
  &-link {
    color: var(--raiden-btn-primary-color);
    &.is-disabled {
      color: var(--raiden-btn-disabled-color);
    }
  }
  &-size-large {
    height: 50px;
    font-size: var(--raiden-font-size-lg);
    padding: 0 18px;
  }
  &-size-normal {
    height: 40px;
    padding: 0 15px;
  }
  &-size-small {
    height: 32px;
    padding: 0 16px;
    font-size: var(--raiden-font-size-sm);
  }
  &-size-mini {
    height: 24px;
    padding: 0 20px;
    font-size: var(--raiden-font-size-xs);
  }
  &.is-circle {
    border-radius: var(--raiden-radius-max);
  }
  /* 自适应宽度 */
  &.is-full {
    width: 100%;
  }
  &.is-bold {
    font-weight: bold;
  }
}
</style>
