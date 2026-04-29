const estoque = [
    {
    descricao: "Camisa Polo",
    cor: "Azul",
    perfil: "F",
    quantidade: 10
    },
    {
    descricao: "Camisa Polo",
    cor: "Preto",
    perfil: "M",
    quantidade: 20
    },
    {
    descricao: "Camisa Polo",
    cor: "Roxo",
    perfil: "F",
    quantidade: 25
    },
    {
    descricao: "Camisa Polo",
    cor: "Branco",
    perfil: "M",
    quantidade: 15
    }
];

let totalProdutos = estoque.reduce((total, produto) => {
    return total + produto.quantidade;
}, 0);

console.log(`Total de produtos em estoque: ${totalProdutos}`);