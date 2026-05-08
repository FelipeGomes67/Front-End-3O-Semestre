import "./cardperfil.css";
import fotoPerfil from "../../assets/images.jpg";


function CardPerfil() {
    return (
        <div className="card-perfil">
            <img className="card-perfil__image" src={fotoPerfil} alt="imagem do usuário" />
            </div>
    )
}

export default CardPerfil;