import "./perfil.css"

function Perfil( { nome, idade, profissao }) {
  return (
    <div className="divcartao">
    <h1 className="cartao">{nome} {idade}, {profissao}</h1>
    </div>
    
  )
}

export default Perfil