<template lang="pug">
  .app.u-clearfix
    include ./assets/svg/all
    app-article-list
    .app__content(
      :class="{'app__content--Active': articleList}"
    ).l-page--Full
      home-header
      .app__bodyer
        router-view
</template>

<script>
  import HomeHeader from './components/templates/HomeHeader.vue'
  import AppArticleList from './components/templates/AppArticleList.vue'
  import { mapGetters } from 'vuex'
  export default {
    data () {
      return {
      }
    },
    components: {
      HomeHeader,
      AppArticleList
    },
    computed: mapGetters([
      'articleList'
    ])
  }
</script>

<style lang="stylus">
  @import './assets/stylus/main'
  .app__menu
    background-color c-master
  .app__content
    overflow auto
    transition transform .5s
    box-shadow 0 0 100px 5px rgba(0,0,0,0.3)
    background-color c-bgc
    transform-origin s-articleList center
  .app__content--Active
    transform scale(.9) translateX(s-articleList)
  .app__bodyer
    background-color c-bgc
</style>