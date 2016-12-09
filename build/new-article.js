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
    fmt=fmt.replace(RegExp.$1, (this.getFullYear()+"").substr(4 - RegExp.$1.length));   
  for(let k in o)   
    if(new RegExp("("+ k +")").test(fmt))   
  fmt = fmt.replace(RegExp.$1, (RegExp.$1.length==1) ?
    (o[k]) :
    (("00"+ o[k]).substr((""+ o[k]).length)))
  return fmt
} 

var argv = require('minimist')(process.argv.slice(2))

const setInfo = function (name) {
  const date = new Date().format("yyyy-MM-dd hh:mm:ss")
  return `<!--{\n"title": "${name}",\n"date": "${date}",\n"path": "${name}",\n"tag": ""\n}-->\n`
}

const getArticleList = function () {
  let prm = new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, relativePath), function(err, files){
      if (err) {
        reject(err)
      }
      resolve(files)
    })
  })
  return prm
}

const getInfo = function (name) {
  let prm = new Promise((resolve, reject) => {
    fs.readFile(path.join(__dirname, `${relativePath}${name}`), (err, data) => {
      if (err) {
        reject(err)
      }
      resolve(data.toString())
    })
  })
  return prm
}

const readInfo = function (infoStr) {
  let prm = new Promise((resolve, reject) => {
    let info = /{[^{]*}/.exec(/<!--{[^{]*}-->/.exec(infoStr)[0])[0]
    resolve(JSON.parse(info))
  })
  return prm
}

const createRoute = function (infoObj) {
  console.log(infoObj)
  // let prm = new Promise((resolve, reject) => {

  // })
  // return prm
}

const createArticle = function (name) {
  const articlePath = path.join(__dirname, `${relativePath}${name}.md`)
  fs.writeFile(articlePath, setInfo(name), err => {
    if (err) {
      return console.log(err)
    }
    console.log(`create article @ path: ${articlePath}`)
  })
}

;(function (arg) {
  createArticle(arg.n ? arg.n : arg.new)
  getArticleList()
    .then(files => getInfo(files[0]), err => console.log(err))
    .then(info => readInfo(info), err => console.log(err))
    .then(infoObj => createRoute(infoObj))
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
