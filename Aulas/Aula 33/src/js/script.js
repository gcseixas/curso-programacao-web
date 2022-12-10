function Garcon(nome, cpf) {
  this.nome = nome;
  this.cpf = cpf;

  levarPedido = (pedido, cliente) => {
    return `O garçom ${this.nome} está levando o pedido ${pedido} do cliente ${cliente}`;
  };
}

let garcon1 = new Garcon("José", "033.390.917-81", "");

function Pedido(pedido, bebida, pizza) {
  this.pedido = pedido;
  this.bebida = bebida;
  this.pizza = pizza;
}

let pedido1 = new Pedido("1", "Coca-Cola", "Strogonoff");

function Cliente(nome, cpf) {
  this.nome = nome;
  this.cpf = cpf;
}

let cliente1 = new Cliente("Erisvan", "155.662.117-55");


