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
// console.log(argv)
// cd('.deploy')
// let test = exec('git status')
// console.log(test)

const asynExec = function (...args) {
  console.log(...args)
}

asynExec(1,2,3)

const setDeploy = function () {
  let dir = '.deploy'
  let spinner = ora(`building and deploy at ${argv._.toString} \n `)
  spinner.start()

  rm('-rf', `${dir}/*`)
  cp('-R', ['dist/CNAME', 'dist/index.html', 'dist/static', 'dist/article', 'dist/demo', dir])
  cd(dir)
  // exec('git add .')
  // exec(`git cm -m "deploy at ${commitName}"`)
  cd('..')
  deploy()

  spinner.stop()
  console.log('\n')
}
// setDeploy()

// const pushDeploy = function (branch, repository) {
//   exec(`git push -u ${repository} HEAD:${branch} --force`)
// }

// cd('.deploy')
// exec('git status', {silent:true}, (code, stdout, stderr) => {
//   console.log(code)
//   console.log(stdout)
//   console.log(stderr)
// })

// deploy()
function deploy() {
  let repo, index, oid, remote
  const relativePath = '../.deploy/'
  git.Repository.open('.deploy')
    .then(repoResult => (repo = repoResult, repo.refreshIndex()))
    .then(indexResult => (index = indexResult, repo.getStatus()))
    .then(statuses => {
      console.log('statuses.length', statuses.length)
      if (statuses.length > 0) {
        statuses.forEach(file => {
          console.log(`addfile:  ${path.join(__dirname, relativePath, file.path())}`)
          index.addByPath(file.path())
            .then(() => index.write())
            .then(() => index.writeTree())
            .then(oidResult => (oid = oidResult, git.Reference.nameToId(repo, "HEAD")))
            .then(head => repo.getCommit(head))
            .then(parent => {
              var author = git.Signature.default(repo)
              return repo.createCommit("HEAD", author, author, commitName, oid, [parent])
            })
            .then(commitId => console.log(`\ncommitInfo:\n--commitId:   ${commitId}\n--commitName: ${commitName}`))
        })
      }
        // if (argv._.length > 0) {
        //   argv._.forEach(k => pushDeploy(repos[k].branch, repos[k].repo))
        // } else {
        //   for (let k in repos) {
        //     pushDeploy(repos[k].branch, repos[k].repo)
        //   }
        // }
        // console.log(statuses, 'test')
        // console.log(git.Remote)
        // console.log(git.Remote.list().then(console.log))
    })
    .then(() => git.Remote.delete(repo, 'origin'))
    .then(() => git.Remote.create(repo, 'origin', 'git@git.coding.net:leenty/vue2.leenty.com.git'))
    .then(remoteResult => {
      remote = remoteResult
      return remote.push(
        ['refs/heads/master:refs/heads/master'],
        {
          callbacks: {
            credentials: function(url, userName) {
              return git.Cred.sshKeyFromAgent(userName);
            }
          }
        }
      )}
    )
    .then(done => console.log('done! \n', done))
    .catch(err => console.log('error! \n', err))
}
// git push -u git@git.coding.net:leenty/vue2.leenty.com.git HEAD:master --force

// if (argv._.length > 0) {
//   argv._.forEach(k => pushDeploy(repos[k].branch, repos[k].repo))
// } else {
//   for (let k in repos) {
//     pushDeploy(repos[k].branch, repos[k].repo)
//   }
// }
