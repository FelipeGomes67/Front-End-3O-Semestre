import { BrowserRouter, Link, Route, Routes } from "react-router-dom"
import Login from "../pages/login/Login"
import CadastroFilme from "../pages/cadastroFilme/CadastroFilme"
import CadastroGenero from "../pages/cadastroGenero/CadastroGenero"


const Rotas = () => {
    
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Login />} path="/" />
                <Route element={<CadastroFilme />} path="/filmes" />
                <Route element={<CadastroGenero />} path="/generos" />
            </Routes>
        </BrowserRouter>
    )
}

export default Rotas