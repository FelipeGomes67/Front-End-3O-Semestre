import './App.css'
import CadastroFrutaPage from './pages/cadastrofruta/cadastrofrutapage'
import CadastroProdutoPage from './pages/cadastroproduto/cadastroprodutopage'
import Homepage from './pages/home/homepage'
import QuemSomosPage from './pages/quemsomos/quemsomospage'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Header from './components/header/header'

export default function App() {
  return(
    <>

    <BrowserRouter>
    <Header />
      <Routes>
        <Route element={<Homepage />} path="/" />
        <Route element={<QuemSomosPage />} path="/quemsomos" />
        <Route element={<CadastroFrutaPage />} path="/frutas" />
        <Route element={<CadastroProdutoPage />} path="/produtos" />
      </Routes>
    </BrowserRouter>


    </>
  )
}