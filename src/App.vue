<template>
  <div>
    <div class="section-buttons">
      <m-button>按钮</m-button>
      <m-button icon="#icon-top">图标</m-button>
      <m-button :loading="type" @click.native="type = !type" icon="#icon-top">点击加载</m-button>

      <m-button class-prefix="monsterUIHtml" icon="#icon-top">可布局</m-button>
      <m-button>
        <svg class="diyIcon" aria-hidden="true">
          <use xlink:href="#icon-top"></use>
        </svg>
        完全自定义
        <svg class="diyIcon" aria-hidden="true">
          <use xlink:href="#icon-top"></use>
        </svg>
      </m-button>
    </div>

    <div class="section-icons">
      <span>图标组件</span>
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
</style>