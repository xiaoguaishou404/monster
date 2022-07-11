<template>
  <svg class="m-icon" aria-hidden="true">
    <use :xlink:href="icon"></use>
  </svg>
</template>
<script>
import "../../public/iconfont.js";
export default {
  props: {
    icon: {
      type: String,
      required: true,
    },
  },
};
</script>
<style lang ="scss" scoped>
.m-icon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>