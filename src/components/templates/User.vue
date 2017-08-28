<template lang="pug">
  .user.u-borderBox
    .user__content.fg-row.fg-wrap--no.fg-ai--c
      .user__avatar.u-bgi--Center(:style="{'backgroundImage': 'url(' + avatar_url + ')'}")
      .user__info.l-pl5.u-va--m
        p.user__name.l-m--None {{name}}
        p.user__options.l-m--None
          //- span.user__loginOut 退出
</template>

<script>
  export default {
    data () {
      return {
        avatar_url: 'https://avatars3.githubusercontent.com/u/13213680?v=3',
        name: 'leenty'
      }
    }
  }
</script>

<style lang="stylus">
  @import '../../assets/stylus/preinstall'
  .user
    width s-sideBar
    background-color rgba(255,255,255,.1)
    padding 10px
  .user__avatar
    width 50px
    height @width
    border-radius 50%
</style>