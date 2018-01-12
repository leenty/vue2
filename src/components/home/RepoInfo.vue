<template lang="pug">
  .repoInfo.md-content
    h4.u-ta--c 最新代码提交
    ul
      li(v-for="record in commits")
        | commit 
        a(:href="record.html_url", target="_blank") {{ record.sha.slice(0, 7) }}
        |  by 
        a(:href="record.author.html_url", target="_blank") {{ record.commit.author.name }}
        |  at 
        span {{ record.commit.author.date | formatDate }}
        br
        pre.md-content
          code {{ record.commit.message }}
</template>

<script>
  import axios from 'axios'
  const apiURL = 'https://api.github.com/repos/leenty/vue2/commits?per_page=3&sha=master'
  export default {
    data () {
      return {
        commits: []
      }
    },
    filters: {
      formatDate: function (date) {
        return (new Date(date)).toLocaleString().split(' ')[0].replace(/\//g, '-')
      }
    },
    // methods: {
    //   fetchData () {
    //     /* eslint-disable no-undef */
    //     var xhr = new XMLHttpRequest()
    //     xhr.open('GET', apiURL)
    //     xhr.onload = function () {
    //       this.commits = JSON.parse(xhr.responseText)
    //       console.log(this.commits)
    //     }
    //     xhr.send()
    //   }
    // },
    mounted () {
      axios.get(apiURL)
        .then(({data}) => {
          this.commits = data
        })
    }
  }
</script>

<style lang="stylus">
</style>
