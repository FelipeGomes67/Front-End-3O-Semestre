import './App.css'
import Title from './components/title/title'
import Mychildren from './components/mychildren/mychildren'
import Saudacao from './components/exercicio01/saudacao'
import Produtos from './components/produtos/produto'
import Perfil from './components/exercicio03/perfil'
import Botao from './components/exercicio04/botao'
import Filme from './components/exercicio05/filme'
import Aluno from './components/exercicio06/aluno'
import Card from './components/exercicio07/card'
import Contato from './components/exercicio08/contato'
import Jogo from './components/exercicio09/jogo'
import ItemLoja from './components/exercicio10/itemloja'

import ImagemPerigosa from './assets/hero.png'



function App() {

  return (
    <>
      {/* <Title texto="Felipe" sobrenome="Gomes" idade="17" />
      <br />
      <Mychildren>
        <h1>My Children teste</h1>
      </Mychildren>
      <br />
      <Saudacao nome="Felipe" />
      <br />
      <Produto nome="Notebook Intermediario" preco="3500" descricao="Notebook Gamer" />
      <Produto nome="Notebook Iniciante" preco="2000" descricao="Notebook Normal" />
      <Produto nome="Notebook Avançado" preco="4000" descricao="Notebook do SENAI" />
      <br />
      <Perfil nome="Felipe" idade="17" profissao="Estudante" />
      <br />
      <Botao texto="Clique aqui" cor="red" />
      <br />
      <Filme titulo="Clube da Luta" ano="1987" genero="Suspense" nota="10" />
      <Filme titulo="Clube do Ano" ano="2026" genero="Ação" nota="0" />
      <Filme titulo="Meu Cunhado Favorito" ano="1998" genero="Terror" nota="6" />
      <br />
      <Aluno nome="Felipe" curso="DEV" img={ImagemPerigosa} />
      <br />
      <Card>
        <Filme titulo="Clube da Luta" ano="1987" genero="Suspense" nota="10" />
        <Filme titulo="Clube do Ano" ano="2026" genero="Ação" nota="0" />
        <Filme titulo="Meu Cunhado Favorito" ano="1998" genero="Terror" nota="6" />
      </Card>
      <br />
      
      <br />
      <Jogo nome="Schedule 1" plataforma="Steam" preco={50} imagem={ImagemPerigosa}  />
       */}

       <Produtos />
    </>
  )
}

export default App
