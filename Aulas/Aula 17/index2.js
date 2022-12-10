var read = require('../Aula 17/node_modules/readline-sync')
var op = parseFloat(read.question("Digite uma opcao: "));

switch (op) {
    case 0:
      console.log("Chesse Burguer")
      break;

    case 1:
      console.log("X-tudo")
      break;

    case 2:
    case 3:
      console.log("Batata Média")
      break;
}

