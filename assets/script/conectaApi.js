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

export const exibirProduto = {
    listaProdutos,
    cadastrarProduto,
    apagarCard,
};
