import { useContext, useState } from "react"
import { UsuarioContext } from "../../context/UsuarioContext"



const Perfil = () => {
    const { usuario, setUsuario } = useContext(UsuarioContext)
    const [novoUsuario, setNovoUsuario] = useState("")

    const login = () => {
        setUsuario(novoUsuario)
        localStorage.setItem("usuario", JSON.stringify(novoUsuario))
        setNovoUsuario("")
    }

    return (
        <>
        <h2>Página de Perfil do usuário</h2>
        <span>usuário {usuario}</span>
        <p>
            <input type="text" placeholder="Novo Usuário" value={novoUsuario} onChange={(e) => {
                setNovoUsuario(e.target.value)
            }} />
            <button onClick={
                () => {
                    login()
                }
            }>Entrar</button>
        </p>
        

        </>
    )
}

export default Perfil