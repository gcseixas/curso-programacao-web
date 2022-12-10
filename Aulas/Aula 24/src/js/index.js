const pessoas = {
  nome: "Gabriel",
  idade: "27 anos",
  CPF: "133.960.257-17",
};

let principal = document.getElementById("principal");

principal.innerHTML = `
<p>${pessoas.nome} </p>
<p>${pessoas.idade} </p>
<p>${pessoas.CPF} </p>

`;

// let lampada = document.getElementById ("Lampada");

// let ola = "Hello World"

// principal.innerHTML = `<h1>${ola}</h1>

// // `;

// function acenderLampada(){
// lampada.src = "./assets/img/lampada-acesa.jpg"

// }

// function apagarLampada(){
//     lampada.src = "./assets/img/lampada-apagada.jpg"

// }
