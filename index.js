const inquirer = require('inquirer')
const chalk = require('chalk')

inquirer
    .prompt([
      { name: 'nome', message: 'Insira o nome desejado' },
      { name: 'idade', message: 'Insira a sua idade' },
      { name: 'email', message: 'Insira o seu email'}
    ])

    .then((answers) => {
        const response = `O nome  ${answers.nome} tem ${answers.idade} contato  ${answers.email}`
        console.log(chalk.bgYellow.black(response))
    })

    .catch((erro) => {
    console.error('erro:', erro)
  })