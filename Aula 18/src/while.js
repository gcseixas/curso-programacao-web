
var read = require('../node_modules/readline-sync')
var texto = read.question("Digite um texto: ")

console.log(texto);

// while (texto === "nao") {
    
//     var texto = read.question("Digite sim: ");

// }

// console.log(texto);

do {
    var texto = read.question("Digite sim: ");

} while (texto === "nao");
console.log(texto);

