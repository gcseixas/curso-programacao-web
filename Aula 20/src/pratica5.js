const readlineSync = require("readline-sync");

let fruits = readlineSync.question("Digite o nome da fruta? ");

switch(fruits) {
  case "Banana":
    console.log("Não vendemos esta fruta aqui");
    break;
  case "Kiwi":
    console.log("Estamos com escassez de kiwis");
    break;
  case "Melancia":
    console.log("Aqui está, são 3 reais o quilo");
    break;
  default:
    console.log("Dados digitados são incorretos");
}

