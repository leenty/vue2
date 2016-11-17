<template lang="pug">
  header.header.u-clearfix
    .header__listSwitch.l-pt10.l-pl10
      button(
        @click="articleListSwitch",
        :class="{'b-menu--Active': articleList}"
      ).b-menu
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
      test: ({status}) => status.test
    })
  },
  // computed: mapState({
  //   test: ({status}) => status.test
  // })
  // vuex: {
  //   getters: {
  //     test: ({ status }) => status.test
  //   }
  // }
  methods: {
    ...mapActions(['articleListSwitch'])
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