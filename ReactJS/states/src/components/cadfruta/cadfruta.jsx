import { useState } from "react"

export default function CadFruta() {
    const [fruta, setFruta] = useState()

    const [quantidade, setQuantidade] = useState()

    const [arrfrutas, setArrFrutas] = useState([
        {id: 1, nome: "Abacaxi", quantidade: 10},
        {id: 2, nome: "Limão", quantidade: 5}
    ])

    function cadastrar(e){
        e.preventDefault()
        setArrFrutas([...arrfrutas, { id: Date.now(), nome: fruta, quantidade: quantidade }])
    }

    return (
        <section className="sessao-cadastro">
            <h2>Cadastro</h2>

            
            <form action="" onSubmit={cadastrar}>

            <fieldset>
                <label htmlFor="fruta" className="cadastro__rotulo">Digite o nome da fruta</label>
            </fieldset>
                <input type="text" id="fruta" placeholder="ex: limão" className="cadastro__entrada" onChange={(e) => {
                    setFruta(e.target.value)
                }} />
                <input type="number" id="quantidade" placeholder="ex: 5" className="cadastro__entrada" onChange={(e) =>{
                    setQuantidade(e.target.value)
                }}/>

                <button type="submit" className="cadastro__btncadastrar">Cadastrar</button>
                </form>


                {/* <span>{fruta}</span> */}
                
                <div className="resultados">
                    <ul>
                        {
                            arrfrutas.map((f) => {
                                return <li key={f.id}>
                                    Fruta: <strong>{f.nome}</strong>
                                    Quantidade: <strong>{f.quantidade}</strong>
                                    </li>
                            })
                        }
                    </ul>
                </div>
        </section>
    )

}
