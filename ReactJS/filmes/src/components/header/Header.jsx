import "./Header.css";
import Logo from "../../assets/img/logo.svg"
import Botao from "../../components/botao/Botao";
import { Link } from "react-router-dom";
import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"
import { useNavigate } from "react-router-dom";

const Header = () => {
    const { setUsuario } = useContext(UsuarioContext);
    const navigate = useNavigate();

    const logout = () => {
        setUsuario("")
        localStorage.removeItem("usuario")

        navigate("/");

    }

    return (
        <header>
            <div className="layout_grid cabecalho">
                {/* Ao clicar no link, redireciona para a tela login */}
                <Link to="/">
                    <img src={Logo} alt="Logo do Filmoteca" />
                </Link>

                <nav className="nav_header">
                    <Link className="link_header" to="/filmes">Filme</Link>
                    <Link className="link_header" to="/generos">Gênero</Link>

                    <Botao nomeDoBotao="Sair" type="submit" onclick={() => logout()} />

                </nav>
            </div>
        </header>
    )
}

export default Header;