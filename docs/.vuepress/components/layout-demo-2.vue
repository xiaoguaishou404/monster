<template>
  <div style="padding-top: 16px; text-align: center">
    <f-layout style="color: #fff; overflow: hidden; margin-bottom: 50px">
      <f-header style="height: 50px; background: #4d6d94"> header </f-header>
      <f-layout>
        <f-sider style="height: 100px; background: #5d7da5; width: 200px"> sider </f-sider>
        <f-content style="height: 100px; background: #5c82b1"> content </f-content>
      </f-layout>
      <f-footer style="height: 50px; background: #4d6d94"> footer </f-footer>
    </f-layout>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
</style>
<script>
  import FLayout from '../../../src/components/mLayout.vue'
  import FHeader from '../../../src/components/mHeader.vue'
  import FFooter from '../../../src/components/mFooter.vue'
  import FContent from '../../../src/components/mContent.vue'
  import FSider from '../../../src/components/mSider.vue'

  export default {
    components: { FLayout, FHeader, FFooter, FContent, FSider }
  }
</script>
