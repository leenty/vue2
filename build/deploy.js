require('shelljs/global')
let ora = require('ora')

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

const deployName = new Date().format("yyyy-MM-dd hh:mm:ss")

// const repertoryUrl = 'git@git.coding.net:leenty/vue2.leenty.com.git'
// cd('.deploy')
// exec(`git remote origin set-url ${repertoryUrl}`)
// const checkoutRepertory = function () {
//   exec(`git clone -b git@github.com:leenty/vue2.git gh-pages`)
//   // git clone -b <branch name> [remote repository address]
// }

const deploy = function (dir, branch) {
  let spinner = ora(`building and deploy at ${deployName}`)
  spinner.start()

  rm('-rf', [`${dir}/CNAME`, `${dir}/index.html`, `${dir}/static`])
  cp('-R', ['dist/CNAME', 'dist/index.html', 'dist/static', dir])
  cd(dir)
  exec('git add .')
  exec(`git cm -m "deploy at ${deployName}"`)
  exec(`git pull --rebase origin ${branch}`)
  exec(`git push origin ${branch}`)
  cd('..')

  spinner.stop()
  console.log('/n')
}
deploy('.deploy', 'gh-pages')
deploy('.deploy_coding', 'master')
