// node build/new-article.js --new 'vue2-7'

var path = require('path')
var fs = require("fs")

const relativePath = '../src/md/articles/'

const getArticleList = function () {
  let prm = new Promise((resolve, reject) => {
    fs.readdir(path.join(__dirname, relativePath), function(err, files){
      err && reject(err)
      resolve(files.filter(v => v.slice(-3) === '.md'))
    })
  })
  return prm
}

const getArticleInfo = function (name) {
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

exports.createArticleList = createArticleList

exports.createRouter = function () {
  getArticleList()
    .then(getArticleInfo, console.log)
    .then(generateRouter, console.log)
    .then(log => console.log(...log), console.log)
}
