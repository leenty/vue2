<template lang="pug">
  header.header.u-clearfix
    .header__menu.u-boxShadow
      router-link(to="/").u-link home 
      router-link(to="/article").u-link article
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
  .header__menu
    max-width max-width
    background-color c-ff
    margin 90px auto 0
    height 120px
</style>