const chalk = require('chalk')
console.log(chalk.blue('Hello Earth'));

const fileSystem = require('fs')
fileSystem.writeFileSync('mynotes2.txt', 'welcome to the course')
fileSystem.writeFileSync('mynotes2.txt', 'i am overwriting the file')