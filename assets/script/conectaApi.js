const listaProdutos = async () => {
    try {
        const resposta = await fetch("http://localhost:3000/produtos");
        return await resposta.json();
    } catch (error) {
        console.log(error);
    }
};

const cadastrarProduto = async (nome, preco, imagem) => {
    try {
        const resposta = await fetch("http://localhost:3000/produtos", {
            method: "POST",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                nome: nome,
                preco: preco,
                imagem: imagem
            })
        });
        return await resposta.json();
    } catch (error) {
        console.log(error);
    }
}

export async function apagarCard(id) {
    const url = `http://localhost:3000/produtos/${id}`;
    try {
        const resposta = await fetch(url, {
            method: 'DELETE'
        });
        if (!resposta.ok) {
            throw new Error(`Erro ao deletar o produto com ID: ${id}`);
        }
    } catch (error) {
        console.error(`Erro ao deletar o produto com ID: ${id}`, error);
        throw error; 
    }
}

export function mensagemAlerta(conteudo) {
    // Cria um contêiner para o alerta
    const dialogBox = document.createElement("div");
    dialogBox.className = "fixed top-4 right-4 flex items-center bg-amarelo text-marrom text-sm font-start px-4 py-3 rounded shadow-lg";
    dialogBox.innerHTML = `
        <p>${conteudo}</p>
        <button class="ml-4 text-marrom focus:outline-none" onclick="this.parentElement.remove()">✖</button>
        <button class="ml-4 text-marrom focus:outline-none" onclick="location.reload();">Recarregar</button>
    `;

    // Adiciona o alerta ao corpo do documento
    document.body.appendChild(dialogBox);

    // Remove o alerta após 15 segundos
     setTimeout(() => {
        if(dialogBox) dialogBox.remove();
    }, 50000);
}

export const exibirProduto = {
    listaProdutos,
    cadastrarProduto,
    apagarCard,
    mensagemAlerta
};
