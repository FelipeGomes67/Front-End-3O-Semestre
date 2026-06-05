import { useContext, useEffect } from "react";
import { ProdutoContext } from "../../context/ProdutoContext";
import CadastroProduto from "../CadastroProduto/CadastroProduto";
import axios from "axios";

const ListarProduto = () => {
    const { listaProdutos, setListaProdutos } = useContext(ProdutoContext);

    const buscarProdutos = async () => {
        try {
            const resposta = await axios.get('http://localhost:3000/Produto');
            setListaProdutos(resposta.data); 
        } catch (error) {
            console.error("Erro ao buscar produtos:", error);
        }
    };

    useEffect(() => {
        buscarProdutos();
    }, []);

    return (
        <div>
            <h2>Cadastro de Produto</h2>

            <CadastroProduto />

            <h3>Lista de Produtos</h3>
            <ul>
                {Array.isArray(listaProdutos) && listaProdutos.map((prod, index) => (
                    <li key={prod.id || index}>{prod.valor}</li>
                ))}
            </ul>
        </div>
    );
};

export default ListarProduto;