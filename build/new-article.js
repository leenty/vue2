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

const showHelp = function () {
  console.log(`Usage: npm run article -- [[-m] | [-n 'fileName'] | [-r] | [-h]]\n`
  +`or: node build/new-article.js [[-n 'fileName'] | [-r] | [-h]]\n\n`
  +         `-m, --mkdir           |  mkDir          初始化文章目录\n`
  +         `-n, --new 'fileName'  |  new article    新建文章\n`
  +         `-r, --render          |  render router  渲染路由\n`
  +         `-h, --help            |  help           帮助\n`)
}

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
        err && reject('找不到文章路径，请使用‘npm run article -- -m’来创建路径\n')
        resolve(`新建文章${name}\n路径: ${articlePath}`)
      })
    }
  })
  return prm
}

const mkDir = function () {
  fs.mkdir(path.join(__dirname,'../src/md/articles'), function (err, files) {
    if (err) {
      console.log('"src/md/articles"目录已存在，无需创建！\n\n')
    } else {
      console.log('"src/md/articles"目录创建成功！\n\n')
    }
    showHelp()
  })
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
      arg: null
    }
  }
  if (arg.m || arg.mkdir) {
    return {
      type: 'mkdir',
      arg: null
    }
  }
  showHelp()
  return false
}

;(function () {
  let argObj = checkArg()
  argObj &&
    argObj.type === 'mkdir' && mkDir() ||
    argObj.type === 'new' && createArticle(argObj.arg)
      .then(done => router.createRouter())
      .catch(console.log) ||
    argObj.type === 'render' && router.createRouter()
})()

