const readlineSync = require("readline-sync");

let op1 = Number(readlineSync.question("Digite um numero?"));

function calc(op1) {
  for (let i = 1; i <= op1; i++) {
    if (i % 2 == 0){
      console.log (i);
    }
  }
}

calc(op1);
