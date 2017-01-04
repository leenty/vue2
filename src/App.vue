<template lang="pug">
  .app.u-clearfix
    app-article-list
    .app__content(
      :class="{'app__content--Active': articleList}",
      v-finger:swipe="swipeRight",
      @scroll="pushScrollData"
    ).l-page--Full
      home-header
      .app__bodyer.l-mH--auto.u-clearfix
        transition(name="slideFade")
          router-view
          //- ,mode="out-in"
    include ./assets/svg/all
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
    methods: {
      ...mapActions([
        'pushScrollData',
        'articleListSwitch'
      ]),
      swipeRight: function (e) {
        e.direction === 'Right' && !this.articleList && this.articleListSwitch()
        e.direction === 'Left' && this.articleList && this.articleListSwitch()
      }
    }
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
    position relative
  @media screen and (max-width: max-width)
    .app__bodyer
      padding 0 10px
    .slideFade-enter-active,
    .slideFade-leave-active
      left 10px
  .slideFade-enter-active,
  .slideFade-leave-active
    transition all .5s cb-duang
    width 100%
    position absolute
    top 0
    left 0
    opacity 1
  .slideFade-enter
    transform translateX(100%) scale(.3)
    opacity 0
  .slideFade-leave-active
    transform translateX(-100%) scale(.3)
    opacity 0
    
</style>