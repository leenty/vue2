<template lang="pug">
  header(
    :class="{'header--scroll': isScrollDown}"
  ).header.u-clearfix
    .header__content(
      :style="trfFixedStyle"
    )
      .header__listSwitch
        button(
          @click="articleListSwitch",
          :class="{'b-menu--Active': articleList}"
        ).header__switch.b-menu
      .header__menu.u-boxShadow.l-flexH--sa
        router-link(to="/", exact).u-link__inherit.header__link.l-flexV--c
          svg.svg__home
            use(xlink:href="#svg__home")
          span home 
        router-link(to="/article").u-link__inherit.header__link.l-flexV--c
          svg.svg__code
            use(xlink:href="#svg__code")
          span article
        //- router-link(to="/tags").u-link__inherit.header__link.l-flexV--c
        //-   svg.svg__code
        //-     use(xlink:href="#svg__code")
        //-   span tags
        //- router-link(to="/series").u-link__inherit.header__link.l-flexV--c
        //-   svg.svg__code
        //-     use(xlink:href="#svg__code")
        //-   span series
        router-link(
          to="/demo"
        ).u-link__inherit.header__link.l-flexV--c
          svg
            use(xlink:href="#svg__demo")
          span demo
</template>

<script>
import { mapState, mapGetters, mapActions } from 'vuex'
export default {
  data () {
    return {
      temp: 12
    }
  },
  computed: {
    t () {
      return this.temp ++
    },
    // 这是新的getter获取方法，getter被预定义在store里
    ...mapGetters([
      'articleList'
    ]),
    // 这是直接获得state的数据，也就是相当于旧版本vuex的getter函数
    ...mapState({
      isScrollDown: ({status}) => status.scroll.scrollTop > 210,
      trfFixedStyle: ({status}) => {
        return {
          'top': status.articleList ? `${status.scroll.scrollTop - 1}px` : '0px'
        }
      }
    })
  },
  methods: {
    ...mapActions(['articleListSwitch'])
  }
}
</script>

<style lang="stylus">
  @import '../../assets/stylus/preinstall'
  .header
    height 160px
    margin-bottom 60px
    transition all .5s cb-duang
    position relative
    z-index 20
  .header__content
    top 0
    left 0
    position fixed
    width 100%
    background-color c-master
    transition top 1ms .5s
  .app__content--Active .header__content
    transition auto
  .header__menu
    max-width max-width
    background-color c-ff
    margin 90px auto 0
    height 120px
    transition all .5s cb-duang
    position relative
    z-index 1
  .header__link
    width 80px
    height @width
    // transition all .5s cb-duang
    // transition-property width 
  .header__listSwitch
    position absolute
    left 10px
    top 10px
    height 25px
    transition all .5s cb-duang
    // box-sizing border-box
  .header__switch
    z-index 10
  .header--scroll
    height 50px
    margin-bottom 20px
    .header__menu
      // margin-top 45px
      margin-top 0
      max-width 100%
      height 50px
      background-color transparent
    .header__link
      color rgba(255,255,255,.6)
      width 50px
      height @width
    .u-link--Active
      color #fff
    .header__listSwitch
      top 90vh
      left 5vw
      background-color c-master
      padding 10px
      border-radius 50%
      box-shadow 0px 2px 5px 0px rgba(0,0,0,0.3)
</style>