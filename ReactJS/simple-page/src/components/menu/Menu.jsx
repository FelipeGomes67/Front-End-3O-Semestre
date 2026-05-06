import "./Menu.css";
import fotoPerfil from "../../assets/images.jpg";

function Menu() {
    return (
        <nav className="menu">
            <a href="#" className="menu__item">Home</a>
            <a href="#" className="menu__item">Quem Somos?</a>
            <a href="#" className="menu__item">Contato</a>
            <a href="#" className="menu__item menu__item--signin">Entrar</a>
            <a href="#" className="menu__item menu__item--signup">Cadastrar</a>

            <div className="card-perfil">
                <img className="card-perfil__image" src={fotoPerfil} alt="imagem do usuário" />
            </div>
        </nav>
    );
}

export default Menu;