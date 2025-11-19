const botoesCarrossel = document.querySelectorAll(".botao");
const imagens = document.querySelectorAll(".imagem");
const informacoes = document.querySelectorAll(".informacoes");

// clique nos botões
botoesCarrossel.forEach((botao, indice) => {
  botao.addEventListener("click", () => {
    desativarBotaoSelecionado();
    marcarBotaoSelecionado(botao);

    esconderImagemAtiva();
    mostrarImagemDeFundo(indice);

    esconderInformacoesAtivas();
    mostrarInformacoes(indice);
  });
});

function marcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

function mostrarInformacoes(indice) {
  informacoes[indice].classList.add("ativa");
}


function esconderInformacoesAtivas() {
  const informacoesAtiva = document.querySelector(".informacoes.ativa");
  if (informacoesAtiva) {
    informacoesAtiva.classList.remove("ativa");
  }
}

function mostrarImagemDeFundo(indice) {
  imagens[indice].classList.add("ativa");
}

function esconderImagemAtiva() {
  const imagemAtiva = document.querySelector(".imagem.ativa");
  if (imagemAtiva) {
    imagemAtiva.classList.remove("ativa");
  }
}

function desativarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}
