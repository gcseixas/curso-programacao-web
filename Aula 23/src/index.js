// const readlineSync = require("readline-sync");

// let num1 = Number(readlineSync.question('Digite o primeiro numero?'));

// const numeros = [10, 90, 80];

// const found = numeros.find(Element => Element > 10);

// console.log(found);

// console.log(carros[1]);

// console.log(carros);

// const carros = [
//   {
//     modelo: "500",
//     cor: "branco",
//     velocidade: "200km",
//   },

//   {
//     modelo: "911",
//     cor: "Preto",
//     velocidade: "350km",
//   },

//   {
//     modelo: "f450",
//     cor: "Vermelho",
//     velocidade: "400km",
//   },
// ];

// // carros.forEach((element) => {
// // console.log ("Cor" + ": " + element.cor);
// // console.log ("Modelo" + ": " + element.modelo);
// // console.log ("Velocidade" + ": " + element.velocidade);


// // });

// const json = JSON.stringify(carros);

// document.write(json);


const filmesFavoritos = [
  {
    ano: "2012",
    filme: "Vingadores",
    
  },

  {
    ano: "2022",
    filme: "Um marido Fiel",
    
  },

  {
    ano: "2016",
    filme: "Assalto ao poder",

  },
];

// const json = JSON.stringify(filmesFavoritos);

// document.write(json);


const anos = filmesFavoritos.filter((elemento) => {
  return elemento.ano  === "2016";
});

// document.write(anos);

console.log(anos);


