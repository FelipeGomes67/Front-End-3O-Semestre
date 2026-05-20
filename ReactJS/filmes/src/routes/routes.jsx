import { BrowserRouter, Route, Routes }  from "react-router-dom";
import CadastroFilmes from "../pages/cadastroFilme/CadastroFilme.jsx";
import CadastroGeneros from "../pages/cadastroGenero/CadastroGenero.jsx";
import Login from "../pages/login/Login.jsx";

const Rotas = () => {
    return(
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/filmes" element={<CadastroFilmes />} />
            <Route path="/generos" element={<CadastroGeneros />} />
        </Routes>
        </BrowserRouter>
    )
}

export default Rotas;