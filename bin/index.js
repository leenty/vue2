const program = require('commander')
const commands = require('./commands')(program)
const packageJson = require('../package.json')
// const path = require('path')

program
  .version(packageJson.version)
  .usage('<command> [options]')

program.parse(process.argv)

// console.log(program.help())

// console.log(path.join(__dirname, `../src/articlesPreRender.js`))
// console.log(__dirname);
