import "./aluno.css"


function Aluno( { nome, curso, img }) {
  return (
    <>
    <div className="imagem">

        <img src={img} alt="" />
        <h1 className="aluno">{nome} {curso}</h1>
    </div>
    </>
  )
}

export default Aluno