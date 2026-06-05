import { Link, Links } from "react-router-dom"
import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { ProdutoContext } from "../../context/ProdutoContext"



const Header = ({children}) => {
    
    const { usuario } = useContext(UsuarioContext)
    const { setUsuario } = useContext(UsuarioContext)
    const { setListaProdutos } = useContext(ProdutoContext)

    const logout = () => {
        setUsuario("")
        setListaProdutos([])
        localStorage.removeItem("usuario")
    }

    return (
        <>
            <header>
                <nav>
                <Link to="/">Home</Link>
                <Link to="/perfil">Perfil</Link>
                <Link to="/myPage">My Blog</Link>
                <Link to="/produto">Produtos</Link>
                <p>Usuário: {usuario}</p>
                </nav>
            </header>

            <button onClick={() => logout()}>Sair</button>

            <main>
                {children}
            </main>
        </>
    )
}

export default Header