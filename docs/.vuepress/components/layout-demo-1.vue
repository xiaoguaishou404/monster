<template>
  <div style="padding-top: 16px">
    <f-layout style="color: #fff; text-align: center; margin-bottom: 50px">
      <f-header style="height: 50px; background: #a2aec8">header</f-header>
      <f-content style="height: 100px; background: #5e7297">content</f-content>
      <f-footer style="height: 50px; background: #a2aec8">footer</f-footer>
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
