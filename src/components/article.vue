<template lang="pug">
.article
  h1.u-ta--c 文章页面
  .md-content
    router-view
  .duo-shuo
    duo-shuo(
      domain="leenty-blog",
      :thread="$route.name"
    )
</template>

<script>
  import DuoShuo from 'vue-duoshuo'
  export default {
    data () {
      return {
      }
    },
    components: {
      DuoShuo
    }
  }
</script>

<style lang="stylus">
</style>