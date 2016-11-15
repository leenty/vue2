<template lang="pug">
  header.header.u-clearfix
    .header__listSwitch.l-pt10.l-pl10
      button.b-menu
    .header__menu.u-boxShadow.l-flexH--sa
      router-link(to="/", exact).u-link.header__link.l-flexV--c
        svg.svg__home
          use(xlink:href="#svg__home")
        span home 
      router-link(to="/article").u-link.header__link.l-flexV--c
        svg.svg__code
          use(xlink:href="#svg__code")
        span article
</template>

<script>
export default {
  data () {
    return {
    }
  }
}
</script>

<style lang="stylus">
  @import '../../assets/stylus/preinstall'
  .header
    background-color c-master
    height 160px
    margin-bottom 60px
    position relative
  .header__menu
    max-width max-width
    background-color c-ff
    margin 90px auto 0
    height 120px
  .header__link
    height 80px
    width 80px
  .header__listSwitch
    position absolute
    width 100%
    left 0
    top 0
</style>