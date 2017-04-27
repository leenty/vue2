module.exports = function (program) {
  program
    .command('article [article]')
    .description('create article')
    .option('-c, --create <article>', 'create a article named <article>', )
}