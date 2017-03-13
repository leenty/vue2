<template lang="pug">
  .mainButton(:class="{'mainButton--fixed': navShrink}")
    .mainButton__body.mainButton__menu
      button(
        @click="switchMethods",
        :class="buttonBehavior"
      )
</template>

<script>
  import { mapState, mapGetters, mapActions } from 'vuex'
  export default {
    data () {
      return {
        behavior: 'menu' // [menu | top | close | hide]
      }
    },
    computed: {
      ...mapGetters([
        'sideBar',
        'navShrink'
      ]),
      // 'scrollDirection' [down: true | up: false]
      ...mapState({
        menu: ({status}) => !status.navShrink || status.scrollDirection && !status.sideBar,
        top: ({status}) => !status.scrollDirection && !status.sideBar && status.navShrink
      }),
      buttonBehavior () {
        return {
          'b-close': this.sideBar,
          'b-menu': this.menu,
          'b-top': this.top
        }
      }
    },
    methods: {
      ...mapActions(['sideBarSwitch', 'scollTop']),
      switchMethods () {
        (this.menu || this.sideBar) && this.sideBarSwitch()
        this.top && this.scollTop()
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../assets/stylus/preinstall'
  .mainButton
    position relative
  .mainButton__menu
    position absolute
    left 0
    top 0
    transition all .5s cb-duang
    padding 10px
    z-index 10
  .mainButton--fixed
    .mainButton__menu
      top 85vh
      left 5vw
      background-color c-master
      border-radius 50%
      box-shadow 0px 2px 5px 0px rgba(0,0,0,0.3)
      opacity .7
</style>