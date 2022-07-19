---
title: Popover 弹出框
---

# Popover 弹出框

### 支持 HTML

#### 预览

<ClientOnly>
<popover-demo-1></popover-demo-1>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <m-popover position="left">
      <m-button>左边弹出</m-button>
      <template slot="content">
        <strong style="color: #06f">支持加粗</strong>
      </template>
    </m-popover>
    <m-popover>
      <m-button>上方弹出</m-button>
      <template slot="content">
        <a href="https://www.baidu.com/">支持链接</a>
      </template>
    </m-popover>
    <m-popover position="bottom">
      <m-button>下方弹出</m-button>
      <template slot="content">普通文本</template>
    </m-popover>
    <m-popover position="right">
      <m-button>右边弹出</m-button>
      <template slot="content">普通文本</template>
    </m-popover>
  </div>
</template>

<style>
  .feel-popover {
    z-index: 30;
  }
</style>
```

### 支持 hover

#### 预览

<ClientOnly>
<popover-demo-2></popover-demo-2>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <m-popover position="left" trigger="hover">
      <m-button>左边提示</m-button>
      <template slot="content"> 提示内容 </template>
    </m-popover>
    <m-popover trigger="hover">
      <m-button>上方提示</m-button>
      <template slot="content"> 提示内容 </template>
    </m-popover>
    <m-popover position="bottom" trigger="hover">
      <m-button>下方提示</m-button>
      <template slot="content"> 提示内容 </template>
    </m-popover>
    <m-popover position="right" trigger="hover">
      <m-button>右边提示</m-button>
      <template slot="content"> 提示内容 </template>
    </m-popover>
  </div>
</template>
```

### Attributes

|   参数   |             说明             |  类型  |          可选值          | 默认值 |
| :------: | :--------------------------: | :----: | :----------------------: | :----: |
| position | 设置弹出框相对触发区域的位置 | String | left、right、top、bottom |  top   |
| trigger  |         设置触发模式         | String |       click、hover       | click  |
