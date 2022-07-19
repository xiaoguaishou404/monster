<template>
  <div class="wrapper">
    <div>
      <m-collapse :selected.sync="selectedTab" single>
        <m-collapse-item title="标题1" name="1">标题1的内容</m-collapse-item>
        <m-collapse-item title="标题2" name="3">标题2的内容</m-collapse-item>
        <m-collapse-item title="标题3" name="2">标题3的内容</m-collapse-item>
      </m-collapse>
    </div>
  </div>
</template>
<script>
  import Collapse from '../../../src/components/mCollapse.vue'
  import CollapseItem from '../../../src/components/mCollapseItem.vue'

  export default {
    data() {
      return {
        selectedTab: ['1']
      }
    },
    components: {
      'm-collapse': Collapse,
      'm-collapse-item': CollapseItem
    }
  }
</script>
<style scoped>
  .wrapper {
    margin-top: 10px;
  }
</style>
