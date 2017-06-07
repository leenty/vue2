<template lang="pug">
  header(
    :class="{'header--scroll': navShrink}"
  ).header.u-clearfix
    .header__content(
      :style="trfFixedStyle",
      :data-author="author"
    ).u-boxShadow
      main-button
      .header__menu.l-flexH--sa
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
import { mapState, mapGetters } from 'vuex'
import MainButton from './MainButton'
export default {
  data () {
    return {
      author: 'leenty'
    }
  },
  components: {
    MainButton
  },
  computed: {
    // 这是新的getter获取方法，getter被预定义在store里
    ...mapGetters([
      'sideBar',
      'navShrink'
    ]),
    // 这是直接获得state的数据，也就是相当于旧版本vuex的getter函数
    ...mapState({
      trfFixedStyle: ({status}) => {
        return status.device.width < 768
          ? {
            'bottom': '0px'
          }
          : {
            'top': status.sideBar
              ? `${status.scroll.scrollTop - 3}px`
              : '0px'
          }
      }
    })
  }
}
</script>

<style lang="stylus">
  @import '../../assets/stylus/preinstall'
  menuMargin = 90px
  menuMinHeight = 70px
  menuMaxHeight = 120px
  menuMinHeight__mb = 50px
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
    &:after
      position absolute
      bottom (menuMargin / 2 + menuMaxHeight)
      transition bottom .5ms
      left 50%
      transform translate(-50%,50%)
      content attr(data-author)
      color rgba(255,255,255,.4)
      font-size 30px
      font-family fantasy
  .app__content--Active .header__content
    transition auto
  .header__menu
    max-width max-width
    background-color c-ff
    margin menuMargin auto 0
    height menuMaxHeight
    transition all .5s cb-duang
    position relative
    z-index 1
  .header__link
    width 80px
    height @width
  .header--scroll
    height menuMinHeight
    margin-bottom 20px
    .header__content:after
      bottom (menuMargin / 2 + menuMinHeight)
    .header__menu
      margin-top 0
      height menuMinHeight
      background-color transparent
    .header__link
      color rgba(255,255,255,.6)
      width menuMinHeight
      height @width
    .u-link--Active
      color #fff
  @media screen and (max-width: pad)
    .header
      height 0
      margin-bottom 0
    .header__content
      top initial
      bottom 0
      &:after
        content ''
    .header__menu
      margin-top 0
      height menuMinHeight__mb
      background-color transparent
    .header__link
      color rgba(255,255,255,.6)
      width menuMinHeight__mb
      height @width
      font-size 12px
      svg
        transform scale(.7)
    .u-link--Active
      color #fff
    .header--scroll
      .header__menu
        height menuMinHeight__mb
</style>