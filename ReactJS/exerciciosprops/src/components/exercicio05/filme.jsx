import "./filme.css"

function Filme( { titulo, ano, genero, nota }) {
  return (
    <p>
        Título: {titulo} | Ano: {ano} | Gênero: {genero} | Nota: {nota}
    </p>
  )
}

export default Filme