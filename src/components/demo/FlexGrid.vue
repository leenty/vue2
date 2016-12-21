<template lang="pug">
  .flexGrid
    p flexGrid
    .flexGrid__bg.fg-col
      .fg-24.fg-mb-12 .fg-24 .fg-mb-12
      .fg-12 .fg-12
      .fg-9.fg-offset-3 .fg-9 .fg-offset-3
      .fg-4.fg-offset-4 .fg-4 .fg-offset-4
      .fg-6 .fg-6
      .fg-8 .fg-8
      .fg-2 .fg-2
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
  .flexGrid__bg
    background-image linear-gradient(90deg, #F5F5F5 4.16666667%, #fdfdfd 4.16666667%, #fdfdfd 8.33333333%, #F5F5F5 8.33333333%, #F5F5F5 12.5%, #fdfdfd 12.5%, #fdfdfd 16.66666667%, #F5F5F5 16.66666667%, #F5F5F5 20.83333333%, #fdfdfd 20.83333333%, #fdfdfd 25%, #F5F5F5 25%, #F5F5F5 29.16666667%, #fdfdfd 29.16666667%, #fdfdfd 33.33333333%, #F5F5F5 33.33333333%, #F5F5F5 37.5%, #fdfdfd 37.5%, #fdfdfd 41.66666667%, #F5F5F5 41.66666667%, #F5F5F5 45.83333333%, #fdfdfd 45.83333333%, #fdfdfd 50%, #F5F5F5 50%, #F5F5F5 54.16666667%, #fdfdfd 54.16666667%, #fdfdfd 58.33333333%, #F5F5F5 58.33333333%, #F5F5F5 62.5%, #fdfdfd 62.5%, #fdfdfd 66.66666667%, #F5F5F5 66.66666667%, #F5F5F5 70.83333333%, #fdfdfd 70.83333333%, #fdfdfd 75%, #F5F5F5 75%, #F5F5F5 79.16666667%, #fdfdfd 79.16666667%, #fdfdfd 83.33333333%, #F5F5F5 83.33333333%, #F5F5F5 87.5%, #fdfdfd 87.5%, #fdfdfd 91.66666667%, #F5F5F5 91.66666667%, #F5F5F5 95.83333333%, #fdfdfd 95.83333333%)
    *
      box-sizing border-box
      background-color rgba(26, 188, 156, .3)
      border 1px solid rgba(26, 188, 156, .6)
</style>