<template lang="pug">
.article
  h1.u-ta--c 文章页面
  .md-content
    router-view
  .duo-shuo
    duo-shuo(
      domain="leenty-blog",
      :thread="$route.name",
      author="leenty-blog",
      v-if="appReady"
    )
</template>

<script>
  import { mapGetters } from 'vuex'
  import DuoShuo from 'vue-duoshuo'
  export default {
    data () {
      return {
      }
    },
    components: {
      DuoShuo
    },
    computed: mapGetters(['appReady'])
  }
</script>

<style lang="stylus">
</style>