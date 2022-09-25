const readlineSync = require('readline-sync')

let op1 = Number(readlineSync.question('Digite um numero?')); 

function num(op1){
for (let i =1; i <= op1; i++) {
     console.log (i);
  }
}

num(op1);
