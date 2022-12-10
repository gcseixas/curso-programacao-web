const readlineSync = require("readline-sync");

// let num1 = Number(readlineSync.question('Digite o primeiro numero?'));

// const numeros = [22, 44, 88, 100, 57, 30];

// const acumulador = numeros.reduce((acumulador, elemento) => {

// acumulador = acumulador + elemento;
// return acumulador;

// }, 0);

// console.log(acumulador);

// const numeros = [22, 44, 88, 100, 57, 30];

// const acumulador = numeros.reduce((acumulador, elemento) => {

// acumulador = acumulador + elemento;
// return acumulador;

// }, 0);

// console.log(acumulador);

const numeros = [22, 44, 88, 100, 57, 30];

const soma = numeros.map(myFuncion);

function myFuncion(num) {
  return num + 10;
}

console.log(soma);

const soma1 = soma.filter(myFuncion1);

function myFuncion1(num) {
  return num % 2 === 0;
}

console.log(soma1);

const soma2 = soma1.reduce(myFuncion2, 0);

function myFuncion2(acumulador, elemento) {
  return (acumulador += elemento);
}

console.log(soma2);
