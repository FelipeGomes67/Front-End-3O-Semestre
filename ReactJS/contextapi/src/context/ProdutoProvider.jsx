import { useState } from "react"
import { ProdutoContext } from "./ProdutoContext"

const ProdutoProvider = ({children}) => {
    const [produto, setProduto] = useState([])
    const [listaProdutos, setListaProdutos] = useState([])

        return(
            <ProdutoContext.Provider
                value={{
                    listaProdutos, setListaProdutos
                }}
            >
                {children}
            </ProdutoContext.Provider>
        )
}

export default ProdutoProvider