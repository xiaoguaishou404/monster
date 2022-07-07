<template>
  <div class="mButtonGroup">
    <slot></slot>
  </div>
</template>
<script>
// mButtonGroup这个组件设计的并不好，因为它强制使用了mButton组件进行封装
// 但是他却又覆盖重写了自己的样式
// 这样不符合我希望的绝对积木原则，它更像是用户层面自定义需求所封装的自定义组件。
export default {
  mounted() {
    Array.from(this.$el.children).forEach((element) => {
      if (Array.from(element.classList).indexOf("m-button")===-1) {
        console.warn(`m-button-group使用时组件希望你传入的是m-button组件，而你传入的是${element.nodeName.toLowerCase()}`);
      }
    });
  },
};
</script>
<style lang ="scss" scoped>
.mButtonGroup {
  display: flex;
  > .m-button {
    border-radius: 0;
    &:nth-child(1) {
      border-radius: var(--border-radius) 0 0 var(--border-radius);
    }
    &:nth-last-child(1) {
      border-radius: 0 var(--border-radius) var(--border-radius) 0;
    }
  }
}
</style>