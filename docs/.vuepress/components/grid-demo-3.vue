<template>
  <div style="padding-top: 16px">
    <f-row class="demoRow" gutter="10">
      <f-col span="8">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="8" offset="8">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow" gutter="10">
      <f-col span="6" offset="6">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="6" offset="6">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow" gutter="10">
      <f-col span="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4" offset="4">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="4" offset="8">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
    <f-row class="demoRow" gutter="10">
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2">
        <div class="demoCol"></div>
      </f-col>
      <f-col span="2" offset="2">
        <div class="demoCol"></div>
      </f-col>
    </f-row>
  </div>
</template>
<style scoped>
  * {
    box-sizing: border-box;
  }
  .demoRow {
    margin: 10px 0;
  }
  .demoCol {
    height: 50px;
    border: 1px solid #ccc;
    background: #eee;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
<script>
  import Row from '../../../src/components/mRow.vue'
  import Col from '../../../src/components/mCol.vue'

  export default {
    components: { Row, Col }
  }
</script>
