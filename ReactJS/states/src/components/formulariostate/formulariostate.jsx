import { useState } from "react"

function FormularioState() {
    const [Nome, setNome] = useState("sem texto")
    const [sobrenome, setSobrenome] = useState("sem texto")


    return (
        <div>
            <h2>Formulário com State</h2>
            <label htmlFor="nome">Nome</label>
            <input
                type="text"
                placeholder="Digite seu nome"
                onChange={(evento) => {
                    // evento - evento capturado/disparado no caso o change
                    // target - elemento que disparou o evento, no caso o input
                    // value - oras, o value do input, no caso o valor digitado
                    setNome(evento.target.value)
                }} />
            <input
                type="text"
                placeholder="Digite seu sobrenome"
                onChange={(evento) => {
                    setSobrenome(evento.target.value)
                }} />
            <br />
            <label htmlFor="">Texto Digitado <strong>{Nome} {sobrenome}</strong></label>
        </div>
    )
}

export default FormularioState