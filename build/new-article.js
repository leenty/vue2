// node build/new-article.js --new 'fileName'

var path = require('path')
var fs = require("fs")
var router = require("./create-router")

const relativePath = '../src/md/articles/'

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
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length))
  for(let k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1)
    ? (o[k])
    : (("00"+ o[k]).substr((""+ o[k]).length)))
  return fmt
} 

var arg = require('minimist')(process.argv.slice(2))
/***********************/

const setAritcleInfo = function (name) {
  const date = new Date().format("yyyy/MM/dd")
  return '<!--{'
    +       `\n"title": "${name}",`
    +       `\n"date": "${date}",`
    +       `\n"tag": "",`
    +       `\n"series": ""`
    +    '\n}-->\n'
}

const createArticle = function (name) {
  let prm = new Promise((resolve, reject) => {
    if (!name || name == 0) {
      reject(
        `错误的文件名 ${name}` +
        `\n请使用：` +
        `\n    npm run article -- --new 'fileName'` +
        `创建文章`
      )
    } else {
      const articlePath = path.join(__dirname, `${relativePath}${name}.md`)
      fs.writeFile(articlePath, setAritcleInfo(name), err => {
        err && reject(err)
        resolve(`新建文章${name}\n路径: ${articlePath}`)
      })
    }
  })
  return prm
}

const checkArg = function () {
  if (arg.n || arg.new) {
    return {
      type: 'new',
      arg: arg.new ? arg.new : arg.n
    }
  }
  if (arg.r || arg.render) {
    return {
      type: 'render',
      arg: arg.render ? arg.render : arg.r
    }
  }
  console.log(`npm run article -- --new 'fileName'  |  new article\n`
    +         `npm run article -- -n 'fileName'     |  --new alias\n`
    +         `npm run article -- --render          |  render router\n`
    +         `npm run article -- -r                |  --render alias\n`
    +         `npm run article -- --help            |  help\n`
    +         `npm run article -- -h                |  --help alias\n`);
  return false
}

;(function () {
  let argObj = checkArg()
  argObj &&
    (argObj.type === 'new'
      ? createArticle(argObj.arg).then(done => {
          console.log(done)
          return router.createRouter()
        }).catch(console.log)
      : router.createRouter())
})()

// var temp = require('../src/articles.json')
// console.log(temp, typeof temp)
// fs.readFile(path.join(__dirname, '../src/articles.js'), (err, data) => {
//   if (err)
//     return console.log(err)
//   console.log('成功！')
//   console.log(data.toString())wwww
//   console.log(data[0].name)
// })
