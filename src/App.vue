<template>
  <div id="app">
    <page-head></page-head>
    <div class="main-layout">
      <split-pane>
        <slide-bar slot="left"></slide-bar>
        <main-content slot="right"></main-content>
      </split-pane>
    </div>
  </div>
</template>

<script>
import pageHead from "./components/pageHead.vue"
import slideBar from "./components/slideBar.vue"
import splitPane from "./components/splitPane.vue"
import mainContent from "./components/mainContent.vue"
export default {
  name: 'app',
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: { pageHead, slideBar, splitPane, mainContent }
}
</script>

<style lang="scss">

.main-layout {
  position: fixed;
  margin-top: 60px;
  height: 100%;
  width: 100%;
}
</style>
