const createArticle = require('../modules/create-article.js')
const router = require('../modules/create-router.js')

module.exports = function (program) {
  program
    .command('article')
    .description('create article and generate article\'s route')
    .option('-r, --render', 'generate article\'s route')
    .option('-c, --create <article>', 'create a article named <article>')
    .action(function (command) {
      command.create &&
        createArticle(command.create)
          .then(console.log)
          .catch(console.log)
      command.render &&
        router.createRouter()
          .then(info => console.log(...info))
          .catch(err => console.log(...err))
    })
}