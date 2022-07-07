<template>
  <div>
    <h1>Monster UI</h1>
    <br>
    <span>如果你想使用图标组件你需要引入monster-ui.js</span>
    <br>
    <div class="section-buttons">

      <m-button>按钮</m-button>
      <m-button icon="#icon-top">图标</m-button>
      <m-button :loading="type" @click.native="type = !type" icon="#icon-top">点击完成</m-button>

      <m-button class="button-flex" icon="#icon-top">可布局</m-button>
      <m-button>
        <svg class="diyIcon" aria-hidden="true">
          <use xlink:href="#icon-top"></use>
        </svg>
        完全自定义
        <svg class="diyIcon" aria-hidden="true">
          <use xlink:href="#icon-top"></use>
        </svg>
      </m-button>
      <m-button-group>
        <m-button icon="#icon-left">上一页</m-button>
        <m-button>1</m-button>
        <m-button>2</m-button>
        <m-button>3</m-button>
        <m-button>4</m-button>
        <m-button>5</m-button>
        <m-button class="button-flex" icon="#icon-right">下一页</m-button>
      </m-button-group>
    </div>

    <div class="section-icons">
      <h2>图标组件</h2>
      <span>如果你需要使用自己的svg图标配合Monster UI，你需要使用svg loader工具或者iconfont网站提供的svg symbol方式在页面body元素最前面创建svg symbol标签，后面搭配使用自己的symbol的id就可以了</span><br>
      <span>往后可能会思考制作svg单文件组件的设计</span>
      <br />
      <m-icon icon="#icon-loading"></m-icon>
      <m-icon icon="#icon-dwon"></m-icon>
      <m-icon icon="#icon-top"></m-icon>
      <m-icon icon="#icon-left"></m-icon>
      <m-icon icon="#icon-setting"></m-icon>
      <m-icon icon="#icon-good"></m-icon>
      <m-icon icon="#icon-right"></m-icon>
      <m-icon icon="#icon-download"></m-icon>

    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      type: true,
    };
  },
};
</script>
<style lang ="scss" scoped>
.section-buttons {
  display: flex;
}

.button-flex {
  display: flex;
  flex-direction: row-reverse;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
}

.button-icon {
  margin: 0 calc(0.2 * var(--font-size));
  color: red;
}

.diyIcon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
  color: blue;
}
</style>