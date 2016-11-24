<template lang="pug">
  .app.u-clearfix
    include ./assets/svg/all
    app-article-list
    .app__content(
      :class="{'app__content--Active': articleList}",
      @scroll="pushScrollData"
    ).l-page--Full
      home-header
      .app__bodyer.l-mH--auto
        router-view
</template>

<script>
  import HomeHeader from './components/templates/HomeHeader.vue'
  import AppArticleList from './components/templates/AppArticleList.vue'
  import { mapGetters, mapActions } from 'vuex'
  // import fullScreen from './utils/fullScreen'
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
    ]),
    methods: mapActions([
      'pushScrollData'
    ])
    // created () {
      // console.log('test')
      // fullScreen()
    // }
    // ready () {
    //   console.log('test')
    //   console.log(document.querySelector('.app__content'))
    //   document.querySelector('.app__content')
    //     .addEventListener('scroll', e => {
    //       console.log(e)
    //     })
    // }
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
    max-width max-width
    background-color c-bgc
  @media screen and (max-width: max-width)
    .app__bodyer
      padding 0 10px
</style>