<template lang="pug">
  .articleList(:class="{'articleList--Active': articleList}").l-page--Full
    ul.articleList__content.u-ul--Reset
      li(
        v-for="(item, index) in list",
        @click="articleListSwitch",
        :style="calcDelay(index)"
      ).articleList__li
        //- 在router-link里不能触发click事件
        router-link(
          :to="{name: item.name}",
          active-class="articleList__link--Active",
          exact
        ).articleList__link.u-borderBox.u-link__inherit
          svg.svg__home.u-va--tb
            use(xlink:href="#svg__articleIcon")
          span  {{item.name}} 
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data () {
    return {
      list: [
        {
          name: 'vue2_1',
          title: 'home'
        },
        {
          name: 'vue2_2',
          title: 'article'
        },
        {
          name: 'vue2_3',
          title: 'article'
        },
        {
          name: 'vue2_4',
          title: 'article'
        },
        {
          name: 'vue2_5',
          title: 'article'
        }
      ]
    }
  },
  computed: mapGetters(['articleList']),
  methods: {
    calcDelay: function (index) {
      return {
        'transitionDelay': `.${index + 2}s`
      }
    },
    ...mapActions(['articleListSwitch'])
  }
}
</script>

<style lang="stylus">
  @import '../../assets/stylus/preinstall'
  .articleList
    background-color c-master
  .articleList__content
    width s-articleList
    margin-top 8vh
    max-height 84vh
    color #fff
  .articleList__li
    transform translateX(-(s-articleList))
    transition transform .3s cb-duang .2s
  .articleList__link
    display block
    width 100%
    line-height 50px
    padding-left 10px
    background-color rgba(255,255,255,.1)
    svg
      transform-origin bottom center
      transform scale(.7)
  .articleList__link--Active
    background-color rgba(255,255,255,.3)
  .articleList--Active .articleList__li
    transform translateX(0)
</style>