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

let spinner = ora('building and deploy at ${deployName}')
spinner.start()

const deployName = new Date().format("yyyy-MM-dd hh:mm:ss")

rm('-rf', ['.deploy/index.html', '.deploy/static'])
cp('-R', ['dist/index.html', 'dist/static', '.deploy'])
cd('.deploy')
exec('git add .')
exec(`git cm -m "deploy at ${deployName}"`)
exec('git pull --rebase origin gh-pages')
exec('git push origin gh-pages')

spinner.stop()
