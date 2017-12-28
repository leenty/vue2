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
  import { user } from 'src/resources/resource'
  // import axios from 'axios'
  export default {
    data () {
      return {
        avatar_url: 'https://avatars3.githubusercontent.com/u/13213680?v=3',
        name: 'leenty'
      }
    },
    created () {
      // /* eslint-disable no-undef */
      // const data = new FormData()
      // data.append('name', 'leenty')
      // data.append('password', '202cb962ac59075b964b07152d234b70')
      user.post({
        name: 'leenty',
        password: '202cb962ac59075b964b07152d234b70'
      }).then(data => {
        // user.get()
      })
      // user1.get().then(data => {
      //   console.log('test', data)
      // })
      // comment.get().then(data => {
      //   console.log('test', data)
      // })
      // comment.post({
      //   comment: '前端对接啦',
      //   postTarget: 1
      // }).then(data => {
      //   console.log('test', data)
      // })
      // axios.post('http://localhost:8889/auth/user', {
      //   name: 'leenty',
      //   password: '202cb962ac59075b964b07152d234b70'
      // }, {
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'Authorization',
      //     'Authorization': 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoibGVlbnR5IiwiaWQiOjEsImlhdCI6MTUxNDM2NjI5NCwiZXhwIjoxNTE0NDUyNjk0fQ.SaqEu45mLZtLIFOxzCT4E0nuhBhPA-Ss7b2FWHXjOdE'
      //   }
      // }).then(data => {
      //   console.log('test', data)
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
  .user__avatar
    width 50px
    height @width
    border-radius 50%
</style>
