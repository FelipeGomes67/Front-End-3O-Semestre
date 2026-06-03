import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"



const Perfil = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState("")

    return (
        <>
        <h2>Página de Perfil do usuário</h2>
        <span>usuário {usuario}</span>
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
        

        </>
    )
}

export default Perfil