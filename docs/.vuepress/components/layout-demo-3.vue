<template>
  <div style="padding-top: 16px">
    <f-layout style="color: #fff; overflow: hidden; text-align: center; margin-bottom: 50px">
      <f-sider style="background: #3f5169; width: 200px"> sider </f-sider>
      <f-layout>
        <f-header style="height: 50px; background: #e4d9bb"> header </f-header>
        <f-content style="height: 100px; background: #f6c487"> content </f-content>
        <f-footer style="height: 50px; background: #e4d9bb"> footer </f-footer>
      </f-layout>
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
