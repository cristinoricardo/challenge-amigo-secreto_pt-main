Sobre o Projeto

Este projeto foi desenvolvido para fortalecer as habilidades em lógica de programação por meio de um desafio interativo. O objetivo é criar uma aplicação que permita adicionar nomes de amigos a uma lista e sortear um "amigo secreto" aleatoriamente.

Funcionalidades

Adicionar Nomes: O usuário pode inserir um nome em um campo de texto e adicioná-lo à lista clicando no botão "Adicionar".

Validação de Entrada: Se o campo de texto estiver vazio, um alerta será exibido solicitando um nome válido.

Visualização da Lista: Os nomes adicionados serão exibidos em uma lista na página.

Sorteio Aleatório: Um botão "Sortear Amigo" permite escolher aleatoriamente um nome da lista e exibi-lo na tela.

Como Funciona

Estrutura do Código

1. Declaração do Array

let amigos = [];

Criamos um array amigos para armazenar os nomes inseridos.

2. Função adicionarAmigo()

function adicionarAmigo() {
    let nomeAmigo = document.getElementById("amigo").value.trim();
    
    if (nomeAmigo === "") {
        alert("Por favor, insira um nome válido.");
        return;
    }
    
    amigos.push(nomeAmigo);
    exibirListaAmigos();
    document.getElementById("amigo").value = "";
}

Obtém o valor digitado pelo usuário.

Valida se o campo está vazio.

Adiciona o nome ao array amigos.

Atualiza a lista visível na página.

3. Função exibirListaAmigos()

function exibirListaAmigos() {
    let listaAmigos = document.getElementById("listaAmigos");
    listaAmigos.innerHTML = "";
    
    amigos.forEach(function(amigo) {
        let li = document.createElement("li");
        li.textContent = amigo;
        listaAmigos.appendChild(li);
    });
}

Atualiza a lista de amigos exibida na tela.

4. Função sortearAmigo()

function sortearAmigo() {
    if (amigos.length === 0) {
        alert("Adicione amigos para sortear.");
        return;
    }
    
    let amigoSorteado = amigos[Math.floor(Math.random() * amigos.length)];
    let resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>O amigo secreto sorteado é: <strong>${amigoSorteado}</strong></li>`;
}

Verifica se há amigos cadastrados.

Sorteia um nome aleatoriamente.

Exibe o resultado na tela.