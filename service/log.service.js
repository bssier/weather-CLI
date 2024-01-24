import chalk from 'chalk'
import dedent from 'dedent'

const printError = (error)=>{
 console.log(chalk.red.italic.strikethrough('Error' + ':' +  ''  + error))
}
const printSucсess = (success)=>{
 console.log(chalk.green.italic('Success' + ':'+ '' + success))
}
const printHelp = (help)=>{
  console.log(chalk.bold.magenta(dedent
    (`You use help, command: 
    -h -- help
    -s -- chose city
    -t -- create token
    without command -- show weather `)
  ))
}

export {printHelp,printError,printSucсess};
