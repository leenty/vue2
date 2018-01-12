<template lang="pug">
.article
  h1.u-ta--c 文章页面
  .md-content
    router-view
  .article__list.fg__pad-row(v-if="$route.name === 'Article'")
    router-link.article__link.u-link(
      v-for="(article, index) in articles",
      :to="{name: article.name}",
      tag="div",
      :class="getLayout(index)",
    )
      .article__img.u-bgi--Center(v-bgi="article.cover || '/static/img/logo.png'")
        p {{ article.title }}
  //- .duo-shuo
    //- duo-shuo(
    //-   domain="leenty-blog",
    //-   :thread="$route.name"
    //- )
</template>

<script>
  import list from 'src/articleList.json'
  export default {
    data () {
      return {
        articles: JSON.parse(JSON.stringify(list)).reverse()
      }
    },
    methods: {
      getLayout (index) {
        return {
          'fg__pad-24': index < 2,
          'fg__pad-12': index >= 2
        }
      }
    }
  }
</script>

<style lang="stylus">
  @import '../assets/stylus/preinstall'
  .article__link
    padding 5px
    box-sizing border-box
  .article__img
    padding-bottom 60%
    position relative
    p
      position absolute
      bottom 0
      left 0
      width 100%
      background-color rgba(0,0,0,.3)
      margin 0
      // line-height 2em
      min-height 1.4em
      padding .2em
      box-sizing border-box
      color c-ff
      font-size 12px
      &:first-line
        font-size 16px
</style>
