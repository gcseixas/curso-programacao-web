let resultado = document.querySelector(".result");

const dados = [
  {
    nome: "Gabriel",
    idade: 27,
  },

  {
    nome: "Erisvan",
    idade: 28,
  },

  {
    nome: "André",
    idade: 17,
  },

  {
    nome: "Raphael",
    idade: 31,
  },

  {
    nome: "Pedro",
    idade: 10,
  },
];

dados.forEach((dado) => {
  //Enviando arquivos para o local Storage
  localStorage.setItem("nome", dado.nome);
  localStorage.setItem("idade", dado.idade);

  //Capturando arquivos do local storage

  const nome = localStorage.getItem("nome");
  const idade = localStorage.getItem("idade");

  //Exibindo Resultado
  resultado.innerHTML += `
     
    <li>${nome} | ${idade} </li>
      
  
  `;
});

console.log(resultado);
