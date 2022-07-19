<template>
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

  </div>
</template>
<script>
import Button from "../../../src/components/mButton.vue";

export default {
  components: { "m-button": Button },
  data() {
    return {
      loading: true,
    };
  },
};
</script>
<style lang="scss">
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
.demo {
  background: #ddd;
  border: 1px solid #666;
  height: 100px;
}
div.wrapper {
  margin-top: 10px;
}
</style>
