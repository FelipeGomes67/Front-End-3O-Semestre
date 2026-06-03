import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './components/home/ome'
import MyPage from './components/mypage/Mypage'
import Perfil from './components/perfil/Perfil'
import Header from './components/header/Header'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/perfil" element={<Perfil />} />
            <Route path="/mypage" element={<MyPage />} />
          </Routes>
        </Header>
      </BrowserRouter>
    </>
  )
}

export default App
