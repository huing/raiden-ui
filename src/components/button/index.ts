import type { VueConstructor } from "vue";
import Button from "./button.vue";
// import type { Props } from "./button.vue";
// export

console.log("Button----", Button);

// export type RaidenInstance = typeof Button & {
//   install(Vue: VueConstructor): void;
// };

// console.log("Button", ButtonRes);

// const RaidenInstance: ButtonRes = Button;

// Button.name = 'RaidenButton'
// // 为组件提供install安装方法，供按需引入
// Button.install = function (Vue: VueConstructor) {
//   // console.log(Button);
//   // console.log("RaidenButton", Button.name);
//   Vue.component(Button.name, Button);
// };

// export type { ButtonProps } from './button.vue';

// 默认导出组件
export default {
  name: "RaidenButton",
  install: function (Vue: VueConstructor) {
    Vue.component("RaidenButton", Button);
  },
};

declare module "vue" {
  export interface GlobalComponents {
    RaidenButton: typeof Button;
  }
}
