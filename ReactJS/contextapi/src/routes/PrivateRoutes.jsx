import { useContext } from "react"
import { UsuarioContext } from "../context/UsuarioContext"
import { Navigate } from "react-router-dom"
import { ProdutoContext } from "../context/ProdutoContext"


const PrivateRoute = ({ children }) => {
    const { usuario } = useContext(UsuarioContext)
    const { listaProdutos } = useContext(ProdutoContext)

    return usuario ? children : <Navigate to={"/"} />
    return listaProdutos ? children : <Navigate to={"/"} />
}

export default PrivateRoute 