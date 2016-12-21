var path = require('path')
var fs = require("fs")

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

var argv = require('minimist')(process.argv.slice(2))

const getArticleList = function () {
  let prm = new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, relativePath), function(err, files){
      err && reject(err)
      resolve(files.filter(v => v.slice(-3) === '.md'))
    })
  })
  return prm
}

const getInfo = function (name) {
  let prmArr = []
  name.forEach(v => {
    prmArr.push(new Promise((resolve, reject) => {
      fs.readFile(path.join(__dirname, `${relativePath}${v}`), (err, data) => {
        err && reject(err)
        let infoStr = JSON.parse(/{[^{]*}/.exec(/<!--{[^{]*}-->/.exec(data.toString())[0])[0])
        infoStr.fileName = v.slice(0, -3)
        resolve(infoStr)
      })
    }))
  })
  return Promise.all(prmArr)
}

const createArticleList = function (infoArr) {
  let prm = new Promise((resolve, reject) => {
    let routesStr = '['
    infoArr.forEach((v, k) => {
      let articleName = v.fileName.replace(' ', '_').replace('-', '_')
      routesStr += `${k ? ', ' : ''}{`
        +   `"name": "${articleName}", `
        +   `"title": "${v.title}"`
        + `}`
    })
    routesStr += ']'
    fs.writeFile(path.join(__dirname, `../src/articleList.json`), routesStr, err => {
      err && reject(err)
      resolve('\n文章列表生成完毕！')
    })
  })
  return prm
}

const createRoutes = function (infoArr) {
  let prm = new Promise((resolve, reject) => {
    let routesStr = 'const articlesRouter = ['
    infoArr.forEach((v, k) => {
      let articleName = v.fileName.replace(' ', '_').replace('-', '_')
      routesStr += `${k ? ', ' : ''}{`
        +   `name: '${articleName}', `
        +   `path: '/${v.date}/${articleName}', `
        +   `meta: {title: '${v.title}'}, `
        +   `component: require('./md/articles/${v.fileName}.md')`
        + `}`
    })
    routesStr += ']\nexport default articlesRouter\n'
    fs.writeFile(path.join(__dirname, `../src/articlesRoutes.js`), routesStr, err => {
      err && reject(err)
      resolve('\n路由生成完毕！')
    })
  })
  return prm
}

const generateRouter = function (infoArr) {
  let prmArr = []
  prmArr.push(createRoutes(infoArr))
  prmArr.push(createArticleList(infoArr))
  return Promise.all(prmArr)
}

/***********************/

const setInfo = function (name) {
  const date = new Date().format("yyyy/MM/dd")
  return '<!--{'
    +       `\n"title": "${name}",`
    +       `\n"date": "${date}",`
    +       `\n"tag": "",`
    +       `\n"series": ""`
    +    '\n}-->\n'
}

const createArticle = function (name) {
  const articlePath = path.join(__dirname, `${relativePath}${name}.md`)
  fs.writeFile(articlePath, setInfo(name), err => {
    err && console.log(err)
    console.log(`新建文章${name}\n路径: ${articlePath}`)
  })
}

;(function (arg) {
  createArticle(arg.n ? arg.n : arg.new)
  getArticleList()
    .then(getInfo, console.log)
    .then(generateRouter, console.log)
    .then(log => console.log(...log), console.log)
})(argv)

// var temp = require('../src/articles.json')
// console.log(temp, typeof temp)
// fs.readFile(path.join(__dirname, '../src/articles.js'), (err, data) => {
//   if (err)
//     return console.log(err)
//   console.log('成功！')
//   console.log(data.toString())wwww
//   console.log(data[0].name)
// })
