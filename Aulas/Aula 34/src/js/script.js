// const produtos = ["B", "R", "R", "B", "B"]

// const produtosBons = produtos.filter(( el, ind, array ) => {

//  return el === "B";

// });

// document.write(produtosBons);

const precos = [220.90, 300, 500.00, 1700.00, 50.20];

const precosDesconto = precos.map((el, indice, array) => {
  const valor = el * 0.8;
  return valor.toFixed(2);
});

// document.write(precosDesconto);

const acumulado = precosDesconto.reduce((total, num) => {
return total + num;

}, 0);

document.write(acumulado);