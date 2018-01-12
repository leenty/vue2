<template lang="pug">
  .articleList(:class="{'articleList--Active': sideBar}").l-page--Full
    //- .articleList__nav
      .articleList__title
        svg.svg__code
          use(xlink:href="#svg__code")
        span article
      .articleList__title
        svg.svg__code
          use(xlink:href="#svg__tags")
        span tags
      .articleList__title
        svg.svg__code
          use(xlink:href="#svg__series")
        span series
    slot
    ul.articleList__content.u-ul--Reset
      li(
        v-for="(item, index) in list",
        @click="sideBarSwitch",
        :style="calcDelay(index)"
      ).articleList__li
        router-link(
          :to="{name: item.name}",
          active-class="articleList__link--Active"
        ).articleList__link.u-borderBox.u-link__inherit.l-flexV--c
          .articleList__title
            svg.svg__home.u-va--tb
              use(xlink:href="#svg__articleIcon")
            | {{item.title}}
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import list from 'src/articleList.json'
export default {
  data () {
    return {
      list
    }
  },
  computed: mapGetters(['sideBar']),
  methods: {
    calcDelay: function (index) {
      return {
        'transitionDelay': `.${index + 2}s`
      }
    },
    ...mapActions(['sideBarSwitch'])
  }
}
</script>

<style lang="stylus">
  @import '../../assets/stylus/preinstall'
  .articleList
    background-color c-master
    padding-top 8vh
  .articleList__content
    width s-sideBar
    max-height 84vh
    color #fff
  .articleList__li
    transform translateX(-(s-sideBar))
    transition transform .3s cb-duang .2s
  .articleList__link
    width 100%
    line-height 1.3em
    padding-left 10px
    min-height 50px
    background-color rgba(255,255,255,.1)
    &:hover
      background-color rgba(255,255,255,.3)
    svg
      transform-origin bottom center
      transform scale(.7)
  .articleList__link--Active
    background-color rgba(255,255,255,.4)
  .articleList--Active .articleList__li
    transform translateX(0)
  .articleList__title
    display block
    width 100%
    font-size 12px
    &:first-line
      font-size 14px
</style>

