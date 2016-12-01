const Vue = require('vue')

const renderer = require('vue-server-renderer').createRenderer()

const vm = new Vue({
  render (h) {
    return h('div', 'hello')
  }
})

renderer.renderToString(vm, (err, html) => {
  console.log(html) // -> <div server-rendered="true">hello</div>
})