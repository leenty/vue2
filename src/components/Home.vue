<template lang="pug">
.home
  h1.u-ta--c Material Desgin
  p 用手机打开或者打开浏览器响应式设计模式
  p 右滑打开菜单，左滑关闭菜单
  p tips:对于左右滑动有手势预设的浏览器(如：QQ浏览器)，请用双指滑动
  repo-info
</template>

<script>
  import RepoInfo from 'components/home/RepoInfo.vue'
  export default {
    data () {
      return {}
    },
    components: {
      RepoInfo
    }
  }
</script>

<style lang="stylus">
</style>
