<template lang="pug">
  .articleList.l-page--Full
    ul.articleList__content.u-ul--Reset
      li(v-for="item in list")
        router-link(to="item.url").u-link {{item.name}}
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          url: '#qwe',
          name: 'test1'
        },
        {
          url: '#qwe',
          name: 'test2'
        },
        {
          url: '#qwe',
          name: 'test3'
        },
        {
          url: '#qwe',
          name: 'test4'
        }
      ]
    }
  }
}
</script>

<style lang="stylus">
</style>