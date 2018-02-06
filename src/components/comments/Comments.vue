<template lang="pug">
  .comments
    .comments__commit
      textarea
    .comments__content
      .comments__item.fg-row.fg-wrap--no(v-for="item in comments")
        .comments__avatar.fg-auto.fg-col--r.u-bgi--Center(:style="{'backgroundImage': 'url(' + item.user.avatarUrl + ')'}")
          .comments__user {{item.user.name}}
        .comments__talk.fg-full {{item.comment}}

</template>

<script>
  import { articleComment } from 'src/resources/resource'
  export default {
    data () {
      return {
        comments: []
      }
    },
    watch: {
      $route (to) {
        this.getComments(to.name)
      }
    },
    methods: {
      getComments (name = this.$route.name) {
        articleComment.get({
          postTarget: name
        }).then(data => {
          this.comments = data
        })
      }
    },
    mounted () {
      this.getComments()
    }
  }
</script>

<style lang="stylus">
  .comments__item
    padding-bottom 1em
  .comments__avatar
    width 40px
    height @width
    border-radius 5px
    overflow hidden
  .comments__user
    color #fff
    font-size 12px
    background-color rgba(0,0,0,.3)
    text-align center
    width 100%
    overflow hidden
    text-overflow ellipsis
    padding 1px 0
  .comments__talk
    background-color #f8f8f8
    padding .5em
    margin-left 1em
    border-radius 5px
</style>
