import "./Cadastro.css";
import Botao from "../botao/Botao";

const Cadastro = (props) => {
    return (
        <section className="section_cadastro">
            <form onSubmit={props.funcCadastro} className="layout_grid form_cadastro">
                <h1>{props.tituloCadastro}</h1>
                <hr />
                <div className="campos_cadastro">
                    <div className="campo_cad_nome">
                        <label htmlFor="nome">Nome</label>
                        <input 
                            type="text" 
                            name="nome" 
                            placeholder={`Digite o nome do ${props.placeholder}`}
                            value={props.valor}
                            onChange={(e) => props.setValor(e.target.value)}
                        />
                    </div>
                    
                    <div className="campo_cad_genero" style={{ display: props.visibilidade }}>
                        <label htmlFor="genero">Gênero</label>
                        <select 
                            name="genero" 
                            id="genero"
                            value={props.idGenero} 
                            onChange={(e) => props.setIdGenero(e.target.value)}
                        >
                            <option value="">Selecione</option>
                            {
                                props.listaGeneros && props.listaGeneros.length > 0 && props.listaGeneros.map((item) => (
                                    <option key={item.idGenero || item.id} value={item.idGenero || item.id}>
                                        {item.nome}
                                    </option>
                                ))
                            }
                        </select>
                    </div>

                    {props.btnEditar &&
                        <Botao
                            nomeDoBotao="Cancelar"
                            btnEditar={props.btnEditar}
                            cancelarEdicao={props.cancelarEdicao}
                        />}
                    <Botao nomeDoBotao="Cadastrar" />
                </div>
            </form>
        </section>
    )
}

export default Cadastro;