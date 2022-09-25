// const readlineSync = require('readline-sync');

// let username = readlineSync.question('Qual e o seu nome?');

// const arr1 = ["Cecilie", "Lone"];
// const arr2 = ["Emil", "Tobias", "Linus"];

// let arrayCombinado = arr1.concat(arr2);

// console.log(arrayCombinado);

// let username = readlineSync.question('Qual e o seu nome?');

// if (username === "Raphael"){
// console.log(username);

// } else{
//     console.log("ERROR");

// }

const readlineSync = require('readline-sync');
let userName = readlineSync.question('Qual e o seu nome?');

function exibirNome() {
console.log (userName);

}

exibirNome();

