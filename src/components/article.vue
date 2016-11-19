<template lang="pug">
.article
  h1.l-ta--c 文章test
  //- .md-content(v-html="md")
  .md-content
    test
</template>

<script>
  // import md from 'marked'
  import test from '../md/articles/test.md'
  export default {
    data () {
      return {
      }
    },
    components: {
      test
    }
  }
</script>

<style lang="stylus">
</style>