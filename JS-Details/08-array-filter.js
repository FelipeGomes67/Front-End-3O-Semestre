const numero = [5, 10 ,15];

const encontrado = numero.filter((n) => {
    return n == 10;
});


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

const camisetasFemininas = estoque.filter((camiseta) => {
    return camiseta.perfil == "F";
});

console.log(camisetasFemininas);

console.log(`Camisetas Polo Femininas encontradas com sucesso`);
console.log();

camisetasFemininas.forEach((item) => {
    console.log(`${item.cor}: ${item.quantidade} unidades`);
});