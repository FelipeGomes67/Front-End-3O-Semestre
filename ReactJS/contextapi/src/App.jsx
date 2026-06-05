import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/Home'
import MyPage from './components/mypage/Mypage'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'
import ListarProduto from './components/ListarProduto/ListarProduto'
import PrivateRoutes from './routes/PrivateRoutes'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/mypage" element={<PrivateRoutes><MyPage /></PrivateRoutes>} />
            <Route path="/produto" element={<PrivateRoutes><ListarProduto /></PrivateRoutes>} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  )
}

export default App
