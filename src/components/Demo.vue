<template lang="pug">
.demo
  h1.l-ta--c 以下部分皆为(呆萌)
  p
    router-link(:to="{name: 'DemoVuexState'}").u-link vuex State Demo
  .demo__content
    router-view
    //- p
    //-   router-link(:to="{path: 'article', params: { userId: 123 }}").u-link article(带params) 
    //- p
    //-   router-link(:to="{name: 'Article', path: '/article', params: { userId: 123 }, query: { plan: 'private' }}").u-link article(带params和query) 
    //- p
    //-   router-link(:to="{ path: 'article'}", append).u-link article(有append属性)相对地址
    //- button(@click="test") test
    //- section.slide__video
      video(controls, poster, autoplay, width="100%")
        source(src="http://images.meet-true.com/video/%E4%B8%80%E9%94%AE%E9%80%A0%E7%89%A9%E6%BC%94%E7%A4%BA%EF%BC%8Dv.1.0%EF%BC%8D%2811%EF%BC%9A28%29.mp4", type="video/mp4")
</template>

<script>
  export default {
    data () {
      return {
      }
    },
    methods: {
      test: function (e) {
        console.log(e)
      }
    }
  }
</script>

<style lang="stylus">
</style>