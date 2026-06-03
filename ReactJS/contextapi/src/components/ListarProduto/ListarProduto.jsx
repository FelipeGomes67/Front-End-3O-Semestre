import { useContext } from "react"
import { ProdutoContext } from "../../context/ProdutoContext"


const ListarProdutos = () => {
    const { produto } = useContext(ProdutoContext)

    return (
        <div>
            <h2>Cadastro Produto</h2>
            <p>
                <input type="text" placeholder="Novo Usuário" onChange={(e) => {
                    setNovoUsuario(e.target.value)
                }} />
                <button onClick={
                    () => {
                        setUsuario(novoUsuario)
                    }
                }>Alterar Usuário</button>
            </p>        
            </div>
    )
}

export default ListarProdutos