<template>
  <div style="padding-top: 16px">
    <div>
      <m-button @click.native="$toast('点击弹出提示')">上方弹出</m-button>
      <m-button @click.native="$toast('点击弹出提示', {position:'middle'})">中间弹出</m-button>
      <m-button @click.native="$toast('点击弹出提示', {position:'bottom'})">下方弹出</m-button>
    </div>
  </div>
</template>
<style>
.m-toast {
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
  components: { "m-button": mButton },
};
</script>
