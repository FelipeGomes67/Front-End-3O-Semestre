import { useContext } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"


const Mypage = () => {
    const { usuario } = useContext(UsuarioContext)

    return (
        <div>
            <h2>Meu Blog</h2>
            <p>Dados do Usuário {usuario}</p>
        </div>
    )
}

export default Mypage