require('shelljs/global')
let ora = require('ora')
var git = require("nodegit")
var path = require('path')

var argv = require('minimist')(process.argv.slice(2))

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

const commitTime = new Date()
const commitName = `deploy at ${commitTime.format("yyyy-MM-dd hh:mm:ss")}`
console.log(commitTime, commitTime.getTime());
// console.log(argv)
// cd('.deploy')
// let test = exec('git status')
// console.log(test)

// const setDeploy = function () {
//   let dir = '.deploy'
//   let spinner = ora(`building and deploy at ${argv._.toString} \n `)
//   spinner.start()

//   rm('-rf', `${dir}/*`)
//   cp('-R', ['dist/CNAME', 'dist/index.html', 'dist/static', 'dist/article', 'dist/demo', dir])
//   cd(dir)
//   exec('git add .')
//   exec(`git cm -m "deploy at ${deployName}"`)
//   cd('..')

//   spinner.stop()
//   console.log('\n')
// }

// const pushDeploy = function (branch, repository) {
//   exec(`git push -u ${repository} HEAD:${branch} --force`)
// }

let repo
let index
let oid
const relativePath = '../.deploy/'
git.Repository.open('.deploy')
  .then(repoResult => (repo = repoResult, repo.refreshIndex()))
  .then(indexResult => (index = indexResult, repo.getStatus()))
  .then(statuses => {
    // console.log(statuses[0])
    if (statuses.length > 0) {
      statuses.forEach(file => {
        console.log(path.join(__dirname, relativePath, file.path()))
        index.addByPath(file.path())
          .then(() => index.write())
          .then(() => index.writeTree())
          .then(oidResult => (oid = oidResult, git.Reference.nameToId(repo, "HEAD")))
          .then(head => repo.getCommit(head))
          .then(parent => {
            var author = git.Signature.default(repo)
            return repo.createCommit("HEAD", author, author, commitName, oid, [parent])
          })
          .then(console.log)
      })
    }
  })


// if (argv._.length > 0) {
//   argv._.forEach(k => pushDeploy(repos[k].branch, repos[k].repo))
// } else {
//   for (let k in repos) {
//     pushDeploy(repos[k].branch, repos[k].repo)
//   }
// }
