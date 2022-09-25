const readlineSync = require('readline-sync')


let op1 = Number(readlineSync.question('Qual sua idade?')); 
let op2 = readlineSync.question('Qual seu sexo?'); 
let op3 = readlineSync.question('Possui alguma deficiencia?'); 
let op4 = readlineSync.question('Esta gravida?'); 

// if (op1 ===)

if (op1 >= 60){
    console.log("Siga para fila preferencial!");
}
else if (op4 == "Sim"){
    // let op4 = readlineSync.question('Está grávida?'); 
}
else if (op3 == "Sim"){
    console.log("Siga para fila preferencial!");
}
else if (op4 == "Sim"){
    console.log("Siga para fila preferencial!");
}
else{
console.log("Fila Normal")
}

