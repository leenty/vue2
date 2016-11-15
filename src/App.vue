<template lang="pug">
  .app
    include ./assets/svg/all
    app-article-list
    .app__content.l-page--Full
      home-header
      .app__bodyer
        router-view
</template>

<script>
  import HomeHeader from './components/templates/HomeHeader.vue'
  import AppArticleList from './components/templates/AppArticleList.vue'
  export default {
    data () {
      return {
      }
    },
    components: {
      HomeHeader,
      AppArticleList
    }
  }
</script>

<style lang="stylus">
  @import './assets/stylus/main'
  .app__menu
    background-color c-master
  .app__bodyer
    background-color c-bgc
</style>