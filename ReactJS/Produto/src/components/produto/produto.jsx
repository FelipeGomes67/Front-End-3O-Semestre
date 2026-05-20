import "./produto.css"
import { useEffect, useState } from "react"
import img from '../../assets/image.jpg'
import api from "../../services/services"

export default function Produto() {

    const [nome, setNome] = useState("")
    const [preco, setPreco] = useState(0)
    const [descricao, setDescricao] = useState("")
    const [quantidade, setQuantidade] = useState(0)
    const [imagem, setImagem] = useState(img)
    const [editar, setEditar] = useState(false)
    const [id, setid] = useState(null)

    const [arrProdutos, setArrProdutos] = useState([
    ])

    async function cadastrarProduto(e) {
        e.preventDefault()// não deixa o formulário ser postado

        // alert("Função cadastrar chamada")
        // return false;

        // validar o formulário
        if (nome.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || preco <= 0 || isNaN(quantidade) || quantidade <= 0) {
            alert("Preencha todos os campos corretamente!")
            return false;
        }

        //gerar o obejto que vai para api
        const objCadastro = {
            nome,
            preco,
            descricao,
            quantidade,
            imagem: "image.jpg"
        }

        //cadastrar na api
        try {
            const retornoAPI = await api.post('/produtos', objCadastro)

            console.log(retornoAPI);
            if (retornoAPI.status == 201) {
                const dadosCadastrados = await retornoAPI.data
                console.log(dadosCadastrados)
                setArrProdutos([...arrProdutos, dadosCadastrados])

                limparFormulario()
            } else {
                alert("Problema inesperado")
            }

        }
        catch (error) {
            console.log("Não foi possível salvar os dados")
            console.log(error)
        }

    }

    function limparFormulario() {
        setid(0)
        setNome("")
        setDescricao("")
        setQuantidade(0)
        setPreco(0)
    }



    useEffect(() => {
        getProdutos()
    }, [])

    async function getProdutos() {
        try {
            const retornoAPI = await api.get('/produtos');
            setArrProdutos(retornoAPI.data)
        } catch (error) {
            console.log("Erro ao buscar os produtos")
            console.log(error)
        }

    }

    async function deletar(id) {

        if(!confirm("Deseja realmente deletar o produto?")) {
            return false;
        }

        try {
            const retornoAPI = await api.delete(`/produtos/${id}`);

            if (retornoAPI.status == 200 && retornoAPI.statusText == "OK") {
                alert("Produto deletado com sucesso!")
                const novaLista = arrProdutos.filter((prod) => {
                    return prod.id != id

                });

                setArrProdutos(novaLista)
            } else {
                alert("Não foi possível deletar o produto")
            }


        } catch (error) {
            alert("Não foi possível deletar o produto")
            console.log(error)
        }
    }

    async function editarProduto(e) {
        e.preventDefault()

        // validar o formulário
        if (nome.trim().length == 0 || descricao.trim().length == 0 || isNaN(preco) || preco <= 0 || isNaN(quantidade) || quantidade <= 0) {
            alert("Preencha todos os campos corretamente!")
            return false;
        }

        //gerar o obejto que vai para api
        const objCadastro = {
            nome,
            preco,
            descricao,
            quantidade,
            imagem: "image.jpg"
        }

        console.log(objCadastro)

        try {
            const retornoAPI = await api.put(`/produtos/${id}`, objCadastro);

            if (retornoAPI.status == 200) {
                alert("Produto editado com sucesso!")
                getProdutos()
                limparFormulario()
                setEditar(false)
            } else {
                alert("Não foi possível editar o produto")
            }


        }
        catch (error) {
            alert("Não foi possível editar o produto")
            console.log(error)
        }
    }

    return (
        <>
            <header className="cabecalho">
                <h1 className="titulo--cinza" >SENAI</h1>
                <h1 className="titulo--vermelho">LOJA</h1>
            </header>

            <form className="formzin" action="" onSubmit={editar ? editarProduto : cadastrarProduto}>
                {/* <div className="input--image">
                    <input className="input--metade" type="text" id="imagem" placeholder="Image" onChange={(e) => setProduto({ ...produto, imagem: e.target.value })} />
                </div> */}
                <div className="input--dados">

                    <input className="input--metade" type="text" id="nome" placeholder="Nome" value={nome} onChange={(e) => setNome(e.target.value)} />
                    <input className="input--metade" type="number" id="preco" placeholder="Preço" value={preco} onChange={(e) => setPreco(parseFloat(e.target.value))} />
                    <input className="input--metade" type="number" id="quantidade" placeholder="Quantidade" value={quantidade} onChange={(e) => setQuantidade(parseInt(e.target.value))} />
                    <input className="input--metade" type="text" id="descricao" placeholder="Descrição" value={descricao} onChange={(e) => setDescricao(e.target.value)} />
                </div>

                <div className="divbotao">

                    {editar && <button
                        type="button"
                        className="btn--cadastro__cancel"
                        onClick={(e) => {
                            setEditar(false)
                            limparFormulario()
                        }}
                    >Cancelar
                    </button>}
                    <button type="submit" className="btn--cadastro">{editar ? "Editar Produto" : "Adicionar Produto"}</button>
                </div>
            </form>


            <section className="produtos">
                {arrProdutos.map((prod) => (
                    <div key={prod.id} className="produto">
                        <h2>{prod.nome}</h2>
                        <p>Preço: R$ {prod.preco.toFixed(2)}</p>
                        <p>Quantidade: {prod.quantidade}</p>
                        <p>Descrição: {prod.descricao}</p>
                        <img src={img} alt={prod.nome} />
                        <div className="botoes">

                            <a href="#" className="comprar">Comprar</a>

                            <a className="edit" href="#" onClick={(e) => {
                                e.preventDefault()


                                setEditar(true)

                                setid(prod.id)
                                setNome(prod.nome)
                                setPreco(prod.preco)
                                setDescricao(prod.descricao)
                                setQuantidade(prod.quantidade)


                            }}>Editar</a>

                            <a className="delet" href="#" onClick={(e) => {
                                e.preventDefault()
                                deletar(prod.id)
                            }}>Apagar</a>
                        </div>
                    </div>
                ))}
            </section>
        </>
    )
}