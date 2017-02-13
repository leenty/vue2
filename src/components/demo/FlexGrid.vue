<template lang="pug">
  .flexGrid.md-content
    h1 flexGrid: 基于flex的布局方式
    div (试着改变浏览器大小以查看响应式)
    h3 概述
    div
      pre
        code(des="栅格系统:")= '栅格系统由24格组成'
      pre
        code(des="命名格式:")= 'class命名遵循BEM + emmet的格式:\n'
          | .[模块名称]__[响应式阈值]-[属性|组件名称][描述]--[属性值|状态]
          | eg:
          |   .fg__pad-offset-12 (在pad下偏移12格距离)

    h3 布局方向
    div
      pre
        code(des="布局方向:")= '.fg-row     横向从左到右排列\n'
          | .fg-col     纵向从上到下排列
          | .fg-row--r  横向从右到左排列
          | .fg-col--r  纵向从下到上排列
          | 这里的 --r 即是 reverse 的缩写
          | 以上四个class是定义flexGrid的类
      .flexGrid__bg.fg-row(des="横向从左到右排列: .fg-row")
        .fg-6 0
        .fg-6 1
        .fg-6 2
        .fg-6 3
      .flexGrid__bg.fg-col(des="纵向从上到下排列: .fg-col")
        .fg-6 0
        .fg-6 1
        .fg-6 2
        .fg-6 3
      .flexGrid__bg.fg-row--r(des="横向从右到左排列: .fg-row--r")
        .fg-6 0
        .fg-6 1
        .fg-6 2
        .fg-6 3
      .flexGrid__bg.fg-col--r(des="纵向从下到上排列: .fg-col--r")
        .fg-6 0
        .fg-6 1
        .fg-6 2
        .fg-6 3

    h3 元素换行
    div
      pre
        code(des="元素换行:")= '（注意：flexGrid里的元素默认是溢出换行的。）\n'
          | .fg-wrap--no  设置flexGrid为不换行
          | .fg-wrap--r   设置flexGrid为反向换行
          | .fg-wrap      设置flexGrid为默认换行
      .flexGrid__bg.fg-row.fg-wrap(des=".fg-wrap--r 设置正常换行")
        .fg-12 0
        .fg-12 1
        .fg-12 2
      pre
        code(des="DOM结构：设置正常换行")= '.fg-row.fg-wrap\n'
          |   .fg-12 0
          |   .fg-12 1
          |   .fg-12 2
      .flexGrid__bg.fg-row.fg-wrap--r(des=".fg-wrap--r 设置反向换行")
        .fg-12 0
        .fg-12 1
        .fg-12 2
      pre
        code(des="DOM结构：设置反向换行")= '.fg-row.fg-wrap--r\n'
          |   .fg-12 0
          |   .fg-12 1
          |   .fg-12 2
      .flexGrid__bg.fg-row.fg-wrap--no(des=".fg-wrap--no 设置不换行")
        .fg-12 0
        .fg-12 1
        .fg-12 2
      pre
        code(des="DOM结构：设置不换行")= '.fg-row.fg-wrap--no\n'
          |   .fg-12 0
          |   .fg-12 1
          |   .fg-12 2
          .md-comment ps: 当前设置了3个占据12格的子元素，但是因为父元素被设置了不换行,
          .md-comment 于是3个子元素就会分别进行收缩，确保可以在同一行

    h3 元素缩放
    div
      pre
        code(des="元素占用空间的缩放")= '.fg-auto  不论剩余空间过多还是不足，都保持原有大小\n\n'
          | .fg-full  剩余空间过多将会变大占用剩余空间，不足会换行
          |           如果父元素被设置了不换行(.fg-wrap--no),
          |           那么它会缩小自己以弥补不足的空间
          | 
          | 改变浏览器宽度看看吧！
      .flexGrid__bg(des="没有设置不换行的情况").fg-row
        .fg-auto.u-ta--c 我只占九个字符大小
        .fg-auto.u-ta--c 我也占九个字符大小
        .fg-full.u-ta--c 我会占用余下空间，没位置就换行
      pre
        code(des="DOM结构:没有设置不换行的情况")= '.fg-row\n'
          |   .fg-auto.u-ta--c 我只占九个字符大小
          |   .fg-auto.u-ta--c 我也占九个字符大小
          |   .fg-full.u-ta--c 我会占用余下空间，没位置就换行
      .flexGrid__bg(des="设置了不换行的情况").fg-row.fg-wrap--no
        .fg-auto.u-ta--c 我只占九个字符大小
        .fg-auto.u-ta--c 我也占九个字符大小
        .fg-full.u-ta--c 我会占用余下空间，没位置就减肥
      pre
        code(des="DOM结构:设置了不换行的情况")= '.fg-row.fg-wrap--no\n'
          |   .fg-auto.u-ta--c 我只占九个字符大小
          |   .fg-auto.u-ta--c 我也占九个字符大小
          |   .fg-full.u-ta--c 我会占用余下空间，没位置就换行

    h3 demo
    .flexGrid__bg.fg-row
      .fg-24 .fg-24 
      .fg-12 .fg-12
      .fg-9.fg-offset-3 .fg-9 .fg-offset-3
      .fg-4.fg-offset-4 .fg-4 .fg-offset-4
      .fg-6 .fg-6
      .fg-8 .fg-8
      .fg-2 .fg-2
    pre
      code(des="DOM结构:")= '.fg-row\n'
        |   .fg-24
        |   .fg-12
        |   .fg-9.fg-offset-3
        |   .fg-4.fg-offset-4
        |   .fg-6
        |   .fg-8
        |   .fg-2

    .flexGrid__bg.fg-row
      .flexGrid__100h.fg-12.fg__pad-24 .fg-12.fg__pad-24
      .flexGrid__100h.fg-12.fg__pad-24.fg-row
        .fg-12.fg__pad-6.fg__mb-12 .fg-12.fg__pad-6.fg__mb-12
        .fg-12.fg__pad-6.fg__mb-12 .fg-12.fg__pad-6.fg__mb-12
        .fg-12.fg__pad-6.fg__mb-12 .fg-12.fg__pad-6.fg__mb-12
        .fg-12.fg__pad-6.fg__mb-12 .fg-12.fg__pad-6.fg__mb-12
    pre
      code(des="DOM结构:")= '.fg-row\n'
        |   .fg-12.fg__pad-24
        |   .fg-12.fg__pad-24.fg-row
        |     .fg-12.fg__pad-6.fg__mb-12
        |     .fg-12.fg__pad-6.fg__mb-12
        |     .fg-12.fg__pad-6.fg__mb-12
        |     .fg-12.fg__pad-6.fg__mb-12
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
    position relative
    margin-top 20px
    *
      box-sizing border-box
      background-color rgba(26, 188, 156, .2)
      border 1px solid rgba(26, 188, 156, .4)
    &[des]
      margin-top 40px
    &:before
      position absolute
      top -1.2em
      left 0
      content attr(des)
      font-size 12px
      color #757575
      
  .flexGrid__100h
    height 100px
  .flexGrid__50h
    height 50px
</style>