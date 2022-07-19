<template>
  <div style="padding-top: 16px">
    <div>
      <m-button @click.native="onClickColorButton">上方弹出</m-button>
    </div>
  </div>
</template>
<style>
.feel-toast {
  z-index: 30 !important;
}
</style>
<style scoped>
* {
  box-sizing: border-box;
}
</style>
<script>
import plugin from "../../../src/components/plugin";
import mButton from "../../../src/components/mButton.vue";
import Vue from "vue";

Vue.use(plugin);

export default {
  components: { mButton },
  methods: {
    onClickColorButton() {
      this.$toast('<strong style="color: #3eaf7c;">加粗带颜色的提示</strong>', {
        enableHtml: true,
      });
    },
  },
};
</script>
