var path = require('path')
var fs = require("fs")
// var router = require("./create-router")
var mkdirp = require('mkdirp')

const relativePath = '../../src/md/articles/'

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

function setAritcleInfo (name) {
  const date = new Date().format("yyyy/MM/dd")
  return '<!--{'
    +       `\n"title": "${name}",`
    +       `\n"date": "${date}",`
    +       `\n"tag": "",`
    +       `\n"series": ""`
    +    '\n}-->\n'
}

function writeArticle (name) {
  return new Promise((resolve, reject) => {
    if (typeof name === 'string' || typeof name === 'number') {
      const articlePath = path.join(__dirname, `${relativePath}${name}.md`)
      fs.stat(articlePath, (err, stat) => {
        err || reject(`${articlePath} 已存在！`)
        fs.writeFile(articlePath, setAritcleInfo(name), err => {
          err && reject(err)
          resolve(`新建文章《${name}》\n路径: ${articlePath}`)
        })
      })
    } else {
      reject(
        `错误的文件名 ${name}` +
        `\n请使用：` +
        `\n    npm run article -- --new 'fileName'` +
        `创建文章`
      )
    }
  })
}

// async function createArticle(arg) {
//   let resultArr = []
//   resultArr.push(await writeArticle(arg))
//   resultArr.push(...await router.createRouter())
//   return resultArr
// }

function mkDir () {
  return new Promise((resolve, reject) => {
    mkdirp(path.join(__dirname,'../../src/md/articles'), err => {
      err && reject('"创建目录异常！\n', err)
      resolve()
    })
  })
}

module.exports = writeArticle