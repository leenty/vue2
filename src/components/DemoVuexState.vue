<template lang="pug">
  .demo__vuexState
    .demo__userCard.l-flexH.l-p10.l-mH10.l-mb5
      .demo__userHeader.u-bgi--Center.l-flex--auto.l-mr10
      .demo__userInfo.l-flex--full
        p.l-m--None.l-mb5.u-fs18 周星星(正常模式)
        p.l-m--None.l-mb5.u-fs14.u-c--9e 其实我是一个演员！
        p
          button.b-svgBtn(
            @click="DEMO__VUEX_FOLLOW",
            :class="{'b-svgBtn--Active': mapStateFollow}"
          )
            svg
              use(xlink:href="#svg__heart--line")
          span(@click="DEMO__VUEX_FOLLOW")  {{demoFollowStatus}}
    .demo__userCard.l-flexH.l-p10.l-mH10
      .demo__userHeader.u-bgi--Center.l-flex--auto.l-mr10
      .demo__userInfo.l-flex--full
        p.l-m--None.l-mb5.u-fs18 周星星(模拟ajax)
        p.l-m--None.l-mb5.u-fs14.u-c--9e 其实我是一个演员！
        p
          button.b-svgBtn(
            @click="demoFollowAjax",
            :class="{'b-svgBtn--Active': mapStateFollow, 'b-svgBtn--Pending': mapStateFollowPending}"
          )
            svg
              use(xlink:href="#svg__heart--line")
          span(@click="demoFollowAjax")  {{demoFollowStatus}}
    p 当前vuex状态
    p mapState方法得到的原值：{{mapStateFollow}}
    p mapGetters方法得到的转化值：{{demoFollowStatus}}
    p 模拟ajax：{{mapStateFollowPending}}
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapState({
      mapStateFollow: ({demo}) => demo.demoFollow,
      mapStateFollowPending: ({demo}) => demo.demomFollowPending
    }),
    ...mapGetters(['demoFollowStatus'])
  },
  methods: {
    ...mapMutations(['DEMO__VUEX_FOLLOW']),
    ...mapActions(['demoFollowAjax'])
  }
}
</script>

<style lang="stylus">
  @import '../assets/stylus/preinstall'
  .demo__userCard
    max-width 300px
    border 1px solid c-master
    border-radius 5px
  .demo__userHeader
    width 100px
    height @width
    border-radius 50%
    background-image url('/static/img/demo/zxcyy.jpg')
</style>