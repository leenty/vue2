<template lang="pug">
  .app.u-clearfix
    app-article-list
    .app__content(
      :class="{'app__content--Active': sideBar}",
      v-finger:swipe="swipeRight",
      @scroll="pushScrollData"
    ).l-page--Full
      home-header
      .app__bodyer.l-mH--auto.u-clearfix
        transition(name="slideFade")
          router-view
          //- ,mode="out-in"
    //- loading
    include ./assets/svg/all
</template>

<script>
  import store from './store'
  import { mapGetters, mapActions } from 'vuex'
  import Loading from './components/feedback/Loading.vue'
  import HomeHeader from './components/templates/HomeHeader.vue'
  import AppArticleList from './components/templates/AppArticleList.vue'
  // import fullScreen from './utils/fullScreen'
  export default {
    data () {
      return {
      }
    },
    components: {
      Loading,
      HomeHeader,
      AppArticleList
    },
    computed: mapGetters([
      'sideBar'
    ]),
    methods: {
      ...mapActions([
        'pushScrollData',
        'sideBarSwitch'
      ]),
      swipeRight: function (e) {
        e.direction === 'Right' && !this.sideBar && this.sideBarSwitch()
        e.direction === 'Left' && this.sideBar && this.sideBarSwitch()
      }
    }
  }
  window.onresize = function () {
    store.dispatch('device')
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
    transform-origin s-sideBar center
  .app__content--Active
    transform scale(.9) translateX(s-sideBar)
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
    transform translateX(100%)
    opacity 0
  .slideFade-leave-active
    transform translateX(-100%)
    opacity 0
    
</style>