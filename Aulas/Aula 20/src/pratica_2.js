const readlineSync = require('readline-sync')


let op1 = Number(readlineSync.question('Qual sua idade?')); 
let op2 = readlineSync.question('Qual seu sexo?'); 
let op3 = readlineSync.question('Possui alguma deficiencia?'); 

if (op2 == "Feminino"){
    var op4 = readlineSync.question('Esta gravida?'); 
}

function fila(op1, op4, op3 ){

    if (op1 >= 60){
        return("Siga para fila preferencial!");
    }
    else if (op4 == "Sim"){
        return("Siga para fila preferencial!");
    }
    else if (op3 == "Sim"){
        return("Siga para fila preferencial!");
    }
    else{
        return("Siga para a Fila Normal")
    }
};

console.log(fila(op1, op2, op3, op4));

