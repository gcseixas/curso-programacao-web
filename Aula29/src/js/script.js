const criarLista = () => {
  let lista = Array();

  let listaItem = document.querySelector("#itemLista");
  let listaResultado = document.querySelector("#resultado ul");

  //   console.log(listaResultado)
  if (listaItem.value.length !== 0) {
    addItems(lista, listaItem.value);
    exibirLista(lista, listaResultado)
  } else {
    exibirErro();
  }
};

function exibirErro() {
  alert("Erro, digite o usuário no campo correspondente");
}

function addItems(lista, listaItem) {
  lista.push(listaItem);
}

const exibirLista = (array, result) => {
  for (let i = 0; i < array.length; i++) {
    result.innerHTML += `<li>${array[i]}</li>`;
  }
};
