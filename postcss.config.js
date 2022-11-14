module.exports = {
  plugins: {
    "postcss-px-to-viewport-8-plugin": {
      // UI设计稿的宽度
      viewportWidth: 375,
      // 指定不转换为视窗单位的类名
      selectorBlackList: ["layout", "markdown"],
      // 指定转换的css属性的单位，*代表全部css属性的单位都进行转换
      // propList: ['*', '!border'],
      // 设置忽略文件，用正则做目录名匹配
      // exclude: [/theme/]
    },
  },
};
