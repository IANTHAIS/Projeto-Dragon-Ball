// Seleciona todos os botões e personagens
const botoes = document.querySelectorAll(".botao");
const personagens = document.querySelectorAll(".personagem");

// Função principal que inicia os eventos nos botões
function iniciarEventosDosBotoes() {
  botoes.forEach((botao, indice) => {
    botao.addEventListener("click", () => {
      desmarcarBotaoSelecionado();
      marcarBotaoSelecionado(botao);

      esconderPersonagemSelecionado();
      mostrarPersonagem(indice);
    });
  });
}

// Remove a classe "selecionado" do botão atualmente selecionado
function desmarcarBotaoSelecionado() {
  const botaoSelecionado = document.querySelector(".botao.selecionado");
  if (botaoSelecionado) {
    botaoSelecionado.classList.remove("selecionado");
  }
}

// Adiciona a classe "selecionado" ao botão clicado
function marcarBotaoSelecionado(botao) {
  botao.classList.add("selecionado");
}

// Remove a classe "selecionado" do personagem atualmente visível
function esconderPersonagemSelecionado() {
  const personagemSelecionado = document.querySelector(".personagem.selecionado");
  if (personagemSelecionado) {
    personagemSelecionado.classList.remove("selecionado");
  }
}

// Adiciona a classe "selecionado" ao personagem correspondente ao botão clicado
function mostrarPersonagem(indice) {
  personagens[indice].classList.add("selecionado");
}

// Chamada da função principal para ativar tudo
iniciarEventosDosBotoes();
