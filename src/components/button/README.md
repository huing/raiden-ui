# RaidenButton

## 代码演示

### 基础用法

```js
<raiden-button type="primary">primary</raiden-button>
```

### 按钮大小

```js
<raiden-button size="large">large</raiden-button>
```

### 禁用状态

```js
<raiden-button type="primary" disabled>
  primary
</raiden-button>
```

### 按钮形状

```js
<raiden-button size="large" radius="8">
  自定义radius
</raiden-button>
```

### 自定义

```js
<raiden-button background="linear-gradient(78deg,#ffb52b 2%, #ffdd44 92%)" border-color="#ffdd44" size="large" full>
  渐变色背景，要自定义borderColor
</raiden-button>
```

## Props

| Name   | Description | Type                               | Required | Default   |
| :----- | :---------- | :--------------------------------- | :------- | :-------- |
| type   | 按钮类型    | `primary` `default` `plain` `link` | false    | `default` |
| size   | 大小        | `large` `normal` `small` `mini`    | false    | `normal`  |
| radius | 圆角半径    | string                             | false    | 2px       |
| full   | 自适应宽度  | boolean                            | false    | -         |
