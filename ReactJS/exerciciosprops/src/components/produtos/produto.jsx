import "./produto.css"
import Produto from '../exercicio02/produto'

export default function Produtos() {
    const produtos = [
        {
            nome: "Mouse Razer",
            preco: 250,
            descricao: "Mouse Razer Victory Bundle"
        },
        {
            nome: "Mouse RedDragon",
            preco: 200,
            descricao: "Mouse RedDragon Vermelho"
        }
    ];

    return (
        produtos.map((produto) => {
        return (
            <Produto
                nome={produto.nome}
                preco={produto.preco}
                descricao={produto.descricao}
            />
        )
    })
    )
}
