import "./Lista.css";

// Importação de imagens:
import Editar from "../../assets/img/pen-to-square-solid.svg";
import Excluir from "../../assets/img/trash-can-regular.svg";

const Lista = (props) => {
    return (
        <section className="layout_grid">
            <div className="listagem">

                <h1>{props.tituloLista}</h1>
                <hr />
                <div className="tabela">
                    <table>
                        {/* cabeçalho da tabela: */}
                        <thead>
                            {/* tr => table row */}
                            <tr className="table_cabecalho">
                                {/* th => table head */}
                                <th>Nome</th>
                                <th style={{ display: props.visibilidade }}>Gênero</th>
                                <th>Editar</th>
                                <th>Excluir</th>
                            </tr>
                        </thead>
                        {/* tbody => corpo da tabela */}
                        <tbody>
                            {props.lista && props.lista.length > 0 ? (
                                props.lista.map((item, index) => (
                                    <tr className="item_lista" key={item.id || item.idFilme || item.idGenero || index}>

                                        <td data-cell="Nome">
                                            {props.tipoLista === "genero" ? item.nome : item.titulo}
                                        </td>

                                        <td data-cell="Gênero" style={{ display: props.visibilidade }}>
                                            
                                            {props.tipoLista === "filme" ? (
                                                props.listaGeneros?.find(g => g.idGenero === item.idGenero)?.nome || 'Sem Gênero'
                                            ) : '-'}
                                        </td>

                                        <td data-cell="Editar">
                                            <button className="icon" onClick={() => (props.funcEditar(item))}>
                                                <img src={Editar} alt="Caneta" />
                                            </button>
                                        </td>

                                        <td data-cell="Excluir">
                                            <button className="icon" onClick={() => props.funcExcluir(item)}>
                                                <img src={Excluir} alt="Lixeira" />
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="4" style={{ textAlign: "center", padding: "20px" }}>
                                        Nenhum registro encontrado.
                                    </td>
                                </tr>
                            )
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </section>
    )
}

export default Lista;