import "./produto.css"

function Produto({ nome, preco, descricao }) {
  return (
    <>
    <h1>{nome}</h1>
    <p>Preço: R${preco}</p>
    <p>{descricao}</p>
    </>
  )
}

export default Produto