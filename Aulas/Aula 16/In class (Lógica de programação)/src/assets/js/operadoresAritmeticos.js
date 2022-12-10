//Operadores Aritméticos

var read = require('../../../../node_modules/readline-sync');

var num1 = parseFloat(read.question("Qual e o primeiro numero? "));
var num2 = parseFloat(read.question("Qual e o segundo numero? "));

// //Adição 2 + 2;

// console.log(`O Resultado da adição é ${num1 + num2}`);


// //Subtração => 2 - 2;


// console.log(`O Resultado da submetração é ${num1 - num2}`);

// //Multiplicação => 2 * 2;

// console.log(`O Resultado da multiplicação é ${num1 * num2}`);



// //Divisão => 2 / 2;

// console.log(`O Resultado da divisão é ${num1 / num2}`);

// //Resto ou módulo

// console.log(`O Resultado da resto é ${num1 % num2}`);

// ordem de precedência

var expressao = (num1 + num2) * 2;

console.log(expressao);



