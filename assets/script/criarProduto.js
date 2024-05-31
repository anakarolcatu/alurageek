import { exibirProduto, mensagemAlerta } from "./conectaApi.js";

const formulario = document.querySelector("[data-formulario]");
const alerta = document.querySelector("[data-alerta]");

formulario.addEventListener("submit", (evento) => {
    evento.preventDefault();
    
    mensagemAlerta("Produto cadastrado com sucesso!");

    setTimeout(() => {
        const nome = document.querySelector("[data-nome]").value;
        const preco = document.querySelector("[data-preco]").value;
        const imagem = document.querySelector("[data-imagem]").value;
        exibirProduto
            .cadastrarProduto(nome, preco, imagem)
            .then(() => {
                formulario.reset();  // Limpa o formulário após o cadastro
            })
            .catch((error) => console.log(error));
        }, 2000);
});
