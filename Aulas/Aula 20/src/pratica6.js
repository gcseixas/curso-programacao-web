const readlineSync = require("readline-sync");

let op1 = Number(readlineSync.question("Digite o primeiro numero?"));
let op2 = Number(readlineSync.question("Digite o segundo numero?"));
let op3 = Number(readlineSync.question("Digite o terceiro numero?"));

const numbers = [op1, op2, op3];
console.log (numbers.reverse());

