function carregar() {
  let mensagem = document.getElementById("container-msg");
  let imagem = document.getElementById("imagem");
  let titulo = document.getElementById("title");



  let data = new Date();
  let hora = data.getHours();
  // let hora = 11;

  mensagem.innerHTML = `Agora são ${hora}horas`;

  if (hora > 0 && hora < 12) {
    imagem.src = "./assets/img/manha.jpg";
    document.body.style.background = "#8fb0df";
  } else if (hora > 12 && hora < 18) {
    imagem.src = "./assets/img/tarde.jpg";
    document.body.style.background = "#fbd29a";
  } else if (hora > 18) {
    imagem.src = "./assets/img/noite.jpg";
    document.body.style.background = "#000000";
    titulo.style.color = "white"
  }
}
