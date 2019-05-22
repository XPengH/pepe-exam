<template>
  <div id="app" :style="[{'minWidth':isMobile?'100%':'760px'}]">
    <router-view :isMobile="isMobile"></router-view>
  </div>
</template>

<script>
import {isMobile} from './vendor/isMobile.js'
export default {
  name: 'app',
  data() {
    return {
      isMobile: false
    }
  },
  created() {
    if (isMobile()) {
      this.isMobile = true
    }
  }
}
</script>

<style>
#app{
  width: 100%;
}
</style>
