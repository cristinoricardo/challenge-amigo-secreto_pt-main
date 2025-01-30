//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

// Lista para armazenar os nomes dos amigos
let amigos = [];

// Adiciona um amigo à lista
function adicionarAmigo() {
    // Pega o valor do campo de texto
    let nomeAmigo = document.getElementById("amigo").value.trim();

    // Verifica se o campo está vazio
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }

    // Adiciona o nome à lista de amigos
    amigos.push(nomeAmigo);

    // Atualiza a lista  na página
    exibirListaAmigos();

    // Limpa o campo de texto
    document.getElementById("amigo").value = "";
}

// Exibe a lista de amigos
function exibirListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = ""; // Limpa a lista antes de atualizá-la

    // Cria um item para cada amigo na lista
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

// Sorteia um amigo secreto aleatoriamente
function sortearAmigo() {
    // Verifica se há amigos na lista
    if (amigos.length === 0) {
        alert("Adicione amigos para sortear.");
        return;
    }

    // Sorteia um amigo aleatório
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];

    // Exibe o resultado na página
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}
