const readlineSync = require('readline-sync')


let num1 = Number(readlineSync.question('Digite o primeiro numero?')); 
let num2 = Number(readlineSync.question('Digite o segundo numero?')); 



function soma(n1, n2) {
return n1 + n2;

}

function subtrair(n1, n2) {
return n1 - n2;

}

function mult(n1, n2) {
return n1 * n2;

}
function divi(n1, n2) {
return n1 / n2;

}

console.log("=================Menu===================")

console.log("Escolha dentro as opções abaixo:")
console.log("Para somar digite 1")
console.log("Para subtrair digite 2")
console.log("Para multiplicar digite 3")
console.log("Para dividir digite 4")


let opera = Number(readlineSync.question('Digite a operacao?')); 

if (opera === 1){
    console.log (soma(num1, num2));
}
else if (opera === 2){
    console.log (subtrair(num1, num2));
}
else if (opera === 3){
    console.log (mult(num1, num2));
}
else if (opera === 4){
    console.log (divi(num1, num2));
}
else {
    console.log ("Opção inválida");
}
