import { useState, useContext } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"
import axios from "axios";

const CadastroProduto = () => {
    const { listaProdutos, setListaProdutos } = useContext(ProdutoContext);
    const [valor, setValor] = useState("");

    const Cadastrar = async (e) => {
        e.preventDefault();

        if (!valor.trim()) {
            alert("Por favor, digite o nome do produto.");
            return;
        }

        const objCadastro = {
            valor,
        };

        try {
            const retornoAPI = await axios.post('http://localhost:3000/Produto', objCadastro);
            console.log(retornoAPI);

            const novoProdutoCadastrado = retornoAPI.data || objCadastro;

            setListaProdutos([...listaProdutos, novoProdutoCadastrado]);

            setValor("");
            alert("Produto cadastrado com sucesso!");

        } catch (error) {
            console.log(error);
            alert("Erro ao cadastrar.");
        }
    };

    return (
        <form onSubmit={Cadastrar}>
            <input
                type="text"
                placeholder="Nome do Produto"
                value={valor}
                onChange={(e) => setValor(e.target.value)}
            />
            <button type="submit">Cadastrar Produto</button>
        </form>
    )
}

export default CadastroProduto;