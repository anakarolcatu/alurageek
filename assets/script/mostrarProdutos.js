import { conectaApi } from "./conectaApi.js";

const lista = document.querySelector("[data-lista]");

function constroiCard(nome, preco, imagem, categoria) {
    const produto = document.createElement("div");
    produto.className = "bg-header w-[192px] h-[254px] rounded-xl flex flex-col gap-2.5 p-2.5 border-2 border-marrom shadow-[-5px_6px_0.9px_0_rgba(0,0,0,0.25)] mb-10 hover:bg-laranja relative";
    produto.innerHTML = `<div class="font-ibm text-header bg-amarelo rounded-md text-center text-sm font-bold border border-1 border-header inline-block items-center absolute p-1 bg-opacity-80 top-4 left-4">${categoria}</div>
    <img src="${imagem}" alt="Imagem do produto" class="w-44 h-[174px] border-2 border-marrom">
    <p class="font-ibm text-amarelo font-extralight">${nome}</p>
    <div class="flex justify-between">
        <p class="font-ibm text-amarelo font-bold">$ ${preco} </p>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="w-5 h-5 fill-amarelo hover:fill-vermelho">
            <path fill-rule="evenodd" d="M16.5 4.478v.227a48.816 48.816 0 0 1 3.878.512.75.75 0 1 1-.256 1.478l-.209-.035-1.005 13.07a3 3 0 0 1-2.991 2.77H8.084a3 3 0 0 1-2.991-2.77L4.087 6.66l-.209.035a.75.75 0 0 1-.256-1.478A48.567 48.567 0 0 1 7.5 4.705v-.227c0-1.564 1.213-2.9 2.816-2.951a52.662 52.662 0 0 1 3.369 0c1.603.051 2.815 1.387 2.815 2.951Zm-6.136-1.452a51.196 51.196 0 0 1 3.273 0C14.39 3.05 15 3.684 15 4.478v.113a49.488 49.488 0 0 0-6 0v-.113c0-.794.609-1.428 1.364-1.452Zm-.355 5.945a.75.75 0 1 0-1.5.058l.347 9a.75.75 0 1 0 1.499-.058l-.346-9Zm5.48.058a.75.75 0 1 0-1.498-.058l-.347 9a.75.75 0 0 0 1.5.058l.345-9Z" clip-rule="evenodd" />
        </svg>  
    </div>`

    return produto;
}

async function listaProdutos() {
    const listaApi = await conectaApi.listaProdutos();
    listaApi.forEach(elemento => lista.appendChild(
        constroiCard(elemento.nome, elemento.preco, elemento.imagem, elemento.categoria)))
}

listaProdutos();