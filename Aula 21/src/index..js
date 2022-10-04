const readlineSync = require('readline-sync')


// let num1 = Number(readlineSync.question('Digite o primeiro numero?')); 

function Carro (modelo, cor){
    this.modelo = modelo;
    this.cor = cor;
}

let hyunday = new Carro("Hb20", "Branco");

let volks = new Carro("Virtus", "Vermelho");

let Renaut = new Carro("Duster", "Cinza");

console.log(volks.modelo);
console.log(hyunday.cor);
console.log(Renaut.modelo);

