import { useState } from 'react'
import './App.css'
import Contador from './components/contador/contador'
import FormularioState from './components/formulariostate/formulariostate'
import CadFruta from './components/cadfruta/cadfruta'
import Produto from './components/produto/produto'

function App() {
  // Variavel privada so pode ser mudada pela funcao setTitulo
  const [Titulo, setTitulo] = useState("Google")
  
  function mudarTexto(){
      setTitulo("Microsoft")
  }
  function mudarTexto2(){
      setTitulo("Apple")
  }
  return (
    // <>
    // <h1>Minha Página de {Titulo}</h1>
    // <button onClick={mudarTexto}>Mudar Texto</button>
    // <br />
    // <button onClick={mudarTexto2}>Apple</button>

    // <Contador />
    // <br />
    // <FormularioState />
    // </>
    <CadFruta />
  )
}

export default App
