<template>
  <div style="padding-top: 16px">
    <div>
      <m-button @click.native="onClickButton">上方弹出</m-button>
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
    onClickButton() {
      this.$toast("这是我在学习 Vue 时制作的 UI 库", {
        closeButton: {
          text: "好的",
        },
      });
    },
  },
};
</script>
