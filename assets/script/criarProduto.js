import { exibirProduto } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = document.querySelector("[data-nome]").value;
    const preco = document.querySelector("[data-preco]").value;
    const imagem = document.querySelector("[data-imagem]").value;

    exibirProduto.cadastrarProduto(nome, preco, imagem)
    .then((resposta) => console.log(resposta))
    .catch((error) => console.log(error));

    alert("Produto cadastrado com sucesso!");
});



