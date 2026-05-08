import "./jogo.css"


function Jogo({ nome, plataforma, preco, imagem }) {


    return (
        <>
            <div className="ex09">
                <h1> {nome}</h1>
                <p>
                    Plataforma: {plataforma}
                    <br />
                    R$ {preco}
                </p>
                <img src={imagem} alt="" />
            </div>
        </>
    )
}

export default Jogo