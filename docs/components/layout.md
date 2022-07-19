---
title: Layout 布局
---

# Layout 布局

### 布局一

#### 预览

<ClientOnly>
<layout-demo-1></layout-demo-1>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <m-layout style="color: #fff; text-align: center; margin-bottom: 50px">
      <m-header style="height: 50px; background: #a2aec8">header</m-header>
      <m-content style="height: 100px; background: #5e7297">content</m-content>
      <m-footer style="height: 50px; background: #a2aec8">footer</m-footer>
    </m-layout>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
```

### 布局二

#### 预览

<ClientOnly>
<layout-demo-2></layout-demo-2>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px; text-align: center">
    <m-layout style="color: #fff; overflow: hidden; margin-bottom: 50px">
      <m-header style="height: 50px; background: #4d6d94"> header </m-header>
      <m-layout>
        <m-sider style="height: 100px; background: #5d7da5; width: 200px"> sider </m-sider>
        <m-content style="height: 100px; background: #5c82b1"> content </m-content>
      </m-layout>
      <m-footer style="height: 50px; background: #4d6d94"> footer </m-footer>
    </m-layout>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
```

### 布局三

#### 预览

<ClientOnly>
<layout-demo-3></layout-demo-3>
</ClientOnly>

#### 示例代码

```vue
<template>
  <div style="padding-top: 16px">
    <m-layout style="color: #fff; overflow: hidden; text-align: center; margin-bottom: 50px">
      <m-sider style="background: #3f5169; width: 200px"> sider </m-sider>
      <m-layout>
        <m-header style="height: 50px; background: #e4d9bb"> header </m-header>
        <m-content style="height: 100px; background: #f6c487"> content </m-content>
        <m-footer style="height: 50px; background: #e4d9bb"> footer </m-footer>
      </m-layout>
    </m-layout>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
```
