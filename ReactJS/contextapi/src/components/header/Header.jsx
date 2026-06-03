import { Link, Links } from "react-router-dom"
import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"



const Header = ({children}) => {
    
    const { usuario } = useContext(UsuarioContext)

    return (
        <>
            <header>
                <nav>
                <Link to="/">Home</Link>
                <Link to="/perfil">Perfil</Link>
                <Link to="/myPage">My Blog</Link>
                <Link to="/CadastroProduto">My 2</Link>
                <Link to="/myPage">My Blog</Link>
                </nav>
            </header>

            <main>
                {children}
            </main>
        </>
    )
}

export default Header