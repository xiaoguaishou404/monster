<template>
  <div>
    <m-row class="demoRow">
      <m-col span="8">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="8">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="8">
        <div class="demoCol"></div>
      </m-col>
    </m-row>
    <m-row class="demoRow">
      <m-col span="6">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="6">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="6">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="6">
        <div class="demoCol"></div>
      </m-col>
    </m-row>
    <m-row class="demoRow">
      <m-col span="4">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="4">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="4">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="4">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="4">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="4">
        <div class="demoCol"></div>
      </m-col>
    </m-row>
    <m-row class="demoRow">
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
      <m-col span="2">
        <div class="demoCol"></div>
      </m-col>
    </m-row>
  </div>
</template>
<script>
  import mRow from '../../../src/components/mRow.vue'
  import Col from '../../../src/components/mCol.vue'
  export default {
    components: {
      'm-row': mRow,
      'm-col': Col
    }
  }
</script>

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
