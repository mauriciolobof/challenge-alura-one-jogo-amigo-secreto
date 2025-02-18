//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

const indiceUsuario = 0;
const amigos = [];
const listaAmigos = document.getElementById("listaAmigos");
const resultado = document.getElementById("resultado");

function adicionarAmigo() {
  const nomeAmigo = document.getElementById("amigo").value;

  // Verifica se o campo está vazio ou contém apenas espaços em branco
  if (nomeAmigo.trim() === "") {
    alert("Por favor, digite um nome antes de adicionar.");
    return; // Sai da função sem adicionar o nome
  }

  amigos.push(nomeAmigo);
  atualizarListaAmigos();
  document.getElementById("amigo").value = ""; // Limpa o campo de input
}

function sortearAmigo() {
  if (amigos.length < 3) {
    alert("É necessário pelo menos 3 amigos para o sorteio.");
    return;
  }

  const amigosSorteados = embaralhar(amigos.slice()); // Cria uma cópia do array para não modificar o original

  for (let i = 0; i < amigos.length; i++) {
    const amigoAtual = amigos[i];
    const amigoSorteado = amigosSorteados[i];

    if (amigoAtual === amigoSorteado) {
      // Garante que a pessoa não tire ela mesma
      sortearAmigo();
      return;
    }
  }

  exibirResultados(amigos, amigosSorteados);
}

function atualizarListaAmigos() {
  listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizar

  amigos.forEach((amigo) => {
    const novoItem = document.createElement("li");
    novoItem.textContent = amigo;
    listaAmigos.appendChild(novoItem);
  });
}

function exibirResultados(nomes, sorteados) {
  resultado.innerHTML = "";

  for (let i = 0; i < nomes.length; i++) {
    if (i === indiceUsuario) {
      const itemResultado = document.createElement("li");
      itemResultado.textContent = `Você tirou ${sorteados[i]}`;
      resultado.appendChild(itemResultado);
    }
  }
}

// Função para embaralhar o array (Fisher-Yates shuffle)
function embaralhar(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function limparLista() {
  amigos.length = 0; // Limpa o array de amigos
  atualizarListaAmigos(); // Atualiza a lista na tela
  resultado.innerHTML = "";
}
