---
title: Tabs 标签页
---

# Tabs 标签页

### 预览

<ClientOnly>
<tabs-demos></tabs-demos>
</ClientOnly>

### 示例代码

```vue
<template>
  <div style="margin-top: 10px">
    <div>
      <m-tabs :selected="selected1">
        <m-tabs-head>
          <m-tabs-item name="1">标题一</m-tabs-item>
          <m-tabs-item name="2">标题二</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="1">内容1</m-tabs-pane>
          <m-tabs-pane name="2">内容2</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
    </div>

    <div style="margin-top: 20px">
      <m-tabs :selected="selected2">
        <m-tabs-head>
          <m-tabs-item name="1">标题一</m-tabs-item>
          <m-tabs-item disabled name="2">禁用标题</m-tabs-item>
          <m-tabs-item name="3">标题三</m-tabs-item>
        </m-tabs-head>
        <m-tabs-body>
          <m-tabs-pane name="1">内容1</m-tabs-pane>
          <m-tabs-pane name="2">内容2</m-tabs-pane>
          <m-tabs-pane name="3">内容3</m-tabs-pane>
        </m-tabs-body>
      </m-tabs>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        selected1: '1',
        selected2: '1'
      }
    }
  }
</script>
```

### Attributes

#### Tabs

|   参数   |   说明   |  类型  | 可选值 | 默认值 |
| :------: | :------: | :----: | :----: | :----: |
| selected | 当前选中 | String |  name  |   --   |

#### TabsHeadItem

|   参数   |     说明     |  类型   |   可选值    | 默认值 |
| :------: | :----------: | :-----: | :---------: | :----: |
|   name   |     必选     | String  |     --      |   --   |
| disabled | 设置是否禁用 | Boolean | true、false | false  |

#### TabsBodyPane

| 参数 | 说明 |  类型  | 可选值 | 默认值 |
| :--: | :--: | :----: | :----: | :----: |
| name | 必选 | String |   --   |   --   |
