var path = require('path')
var fs = require("fs")

Date.prototype.format = function(fmt) {
  let o = {   
    "M+" : this.getMonth()+1,
    "d+" : this.getDate(),
    "h+" : this.getHours(),
    "m+" : this.getMinutes(),
    "s+" : this.getSeconds(),
    "q+" : Math.floor((this.getMonth()+3)/3),
    "S"  : this.getMilliseconds()
  }
  if(/(y+)/.test(fmt))   
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(let k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ?
    (o[k]) :
    (("00"+ o[k]).substr((""+ o[k]).length)))
  return fmt
} 

var argv = require('minimist')(process.argv.slice(2))

// const articleRoute = function (path) {
//   return 
// }

const info = function (name) {
  const date = new Date().format("yyyy-MM-dd hh:mm:ss")
  return `<!--|\ntitle: '${name}'\ndate: '${date}'\npath: '${name}'\ntag: ''\n|-->\n`
}

const createArticle = function (name) {
  const articlePath = path.join(__dirname, `../src/md/articles/${name}.md`)
  fs.writeFile(articlePath, info(name), err => {
    if (err) {
      return console.log(err)
    }
    console.log(`create article @ path: ${articlePath}`)
  })
}

;(function (arg) {
  createArticle(arg.n ? arg.n : arg.new)
})(argv)

// var temp = require('../src/articles.json')
// console.log(temp, typeof temp)
// fs.readFile(path.join(__dirname, '../src/articles.js'), (err, data) => {
//   if (err)
//     return console.log(err)
//   console.log('成功！')
//   console.log(data.toString())
//   console.log(data[0].name)
// })
