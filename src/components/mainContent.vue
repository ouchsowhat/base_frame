<template>
  <div id="content">
     <router-view></router-view> 
  </div>
</template>

<script>
  export default {
    name: 'content',
    data() {
      return {
        items: this.$store.getters.getItems
      }
    },
    components: {},
    computed: {
  
    }
  }
</script>

<style lang="scss">
  #content {
    height: 100%;
    width: 100%;
    overflow: scroll
  }
</style>