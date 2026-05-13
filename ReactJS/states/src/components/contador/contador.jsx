import { useState } from "react"

function Contador(){

const [contador, setContador] = useState(0)

function incrementar() {
    if (contador < 10) {
        setContador(contador + 1)
    }else {
        setContador(0)
    }
}


function decrementar() {
    if(contador > 0) {
        setContador(contador - 1)
    }else {
        setContador(10)
    }
}








    return(
        <div className="contador">
            <h1 className="contado_title">Contador {contador}</h1>

            <button onClick={incrementar}>Contar ++</button>
            <button onClick={decrementar}>Contar --</button>
        </div>
    )
}


export default Contador