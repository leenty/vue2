const program = require('commander')
const commands = require('./commands')(program)
const packageJson = require('../package.json')

program
  .version(packageJson.version)
  .usage('<command> [options]')

program.parse(process.argv)
