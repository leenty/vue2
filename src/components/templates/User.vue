<template lang="pug">
  .user.u-borderBox
    .user__content.fg-row.fg-wrap--no.fg-ai--c(
      :class="{'user__content--login': user.name}"
    )
      .user__avatarBox(@click="toggle")
        .user__avatar.u-bgi--Center(:style="{'backgroundImage': 'url(' + user.avatar_url + ')'}")
        .user__logo.u-bgi--Center(:style="{'backgroundImage': 'url(' + logo_url + ')'}")
      .user__info.l-pl5.u-va--m
        p.user__name.l-m--None {{user.name}}
        p.user__blogName.l-m--None {{user.name? '@': ''}}leenty blog
        p.user__options.l-m--None
          //- span.user__loginOut 退出
</template>

<script>
  import { userInfo, user } from 'src/resources/resource'
  import { mapState } from 'vuex'
  export default {
    data () {
      return {
        logo_url: 'https://avatars3.githubusercontent.com/u/13213680?v=3'
        // user: {
        //   avatar_url: 'https://avatars3.githubusercontent.com/u/13213680?v=3',
        //   name: 'leenty'
        // }
      }
    },
    computed: mapState({
      user: ({status}) => status.user
    }),
    methods: {
      toggle () {
        // this.user.name = this.user.name ? '' : 'leenty'
      }
    },
    created () {
      console.log(userInfo, user)
      // userInfo.get({
      //   id: 1
      // }).then(data => {
      //   console.log('test', data)
      // })
      // user.post({
      //   name: 'leenty',
      //   password: '202cb962ac59075b964b07152d234b70'
      // }).then(data => {
      //   console.log('login', data)
      // })
    }
  }
</script>

<style lang="stylus">
  @import '../../assets/stylus/preinstall'
  .user
    width s-sideBar
    background-color rgba(255,255,255,.1)
    padding 10px
  .user__avatarBox
    position relative
  .user__logo,
  .user__avatar
    width 50px
    height @width
    border-radius 50%
  .user__name,
  .user__avatar
    opacity 0
    transition opacity .3s
  .user__logo
    position absolute
    right 0
    bottom 0
    transition all .3s
  .user__content
    position relative
  .user__name,
  .user__blogName
    color c-ff
  .user__blogName
    position absolute
    bottom 13px
    left 60px
    font-size 14px
    transition all .3s
  .user__content--login
    .user__avatar
      opacity 1
    .user__logo
      width 25px
      height @width
      right -4px
    .user__name
      opacity 1
    .user__blogName
      bottom 0
      left 70px
      opacity .4
      font-size 12px
</style>
