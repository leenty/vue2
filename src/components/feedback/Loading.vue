<template lang="pug">
  .loading
    .temp
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
  .loading
    position fixed
    top 50%
    left 50%
    z-index 100
    width 100%
    // height 5px
    // background linear-gradient(to left, c-master, c-bgc)
  .temp
    // width 30px
    // height @width
    // background-color c-master
    width 0
    height 0
    border-right 2rem solid transparent
    border-left 2rem solid transparent
    border-bottom 3rem solid c-master
    // border-top 0 solid transparent
</style>