import "./CadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../services/Services"
import { Alerta } from "../../components/alerta/Alerta"

const CadastroFilme = () => {


    // States e variáveis
    const [valor, setValor] = useState("");
    const [valorGenero, setValorGenero] = useState("");
    const [editar, setEditar] = useState(false);
    const [listaGeneros, setListaGeneros] = useState([]);
    const [listaFilmes, setListaFilmes] = useState([]);
    // const [idEditar, setIdEditar] = useState(0);

    //Get
    const getGeneros = async () => {
        try {
            const retornoAPI = await api.get("/Genero");
            const dados = retornoAPI.data;
            setListaGeneros(dados);
        } catch (error) {
            Alerta({
                title: 'Cadastro de Filme',
                text: 'Problema ao carregar dados da api',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }

    const getFilmes = async () => {
        try {
            const retornoAPI = await api.get("/Filme");
            const dados = retornoAPI.data;
            setListaFilmes(dados);
        } catch (error) {
            Alerta({
                title: 'Cadastro de Filme',
                text: 'Problema ao carregar dados da api',
                icon: 'error',
                confirmButtonText: 'OK'
            })
        }
    }
    //Post
    const cadastrarFilme = (e) => {
        e.preventDefault();

        if (valor.trim().length === 0) {
            Alerta({
                title: 'Cadastro de Filme',
                text: 'Preencha o campo de título!',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return false;
        }
        const objCadastro = {
            idFilme: "",
            titulo: valor,
            idGenero: valorGenero
        };

        try {
            const retornoAPI = api.post("/Filme", objCadastro);
            if (retornoAPI.status === 201 || retornoAPI.status === 200) {
                Alerta({
                    title: 'Cadastro de Filme',
                    text: `${valor} cadastrado com sucesso!`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                limparFormulario();
                getFilmes();
            } else {
                Alerta({
                    title: 'Cadastro de Filme',
                    text: 'Algum problema aconteceu ao cadastrar!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.log(error);
            Alerta({
                title: 'Cadastro de Filme',
                text: 'Erro ao chamar a API no cadastro',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }
    //Put
    const editarFilme = (e) => {
        e.preventDefault();
        Alerta({
            title: 'Cadastro de Filme',
            text: 'Editar filme em desenvolvimento',
            icon: 'success',
            confirmButtonText: 'OK'
        })
    }
    //Delete
    const excluirFilme = async (item) => {
        const idExcluir = item.id || item.idFilme;

        const result = await Alerta({
            title: "Você tem certeza?",
            text: "Quer apagar o filme " + item.titulo + "?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Apagar",
            cancelButtonText: "Cancelar",
        });

        if (!result.isConfirmed) {
            return;
        }

        try {
            const retornoAPI = await api.delete(`/Filme/${idExcluir}`);

            if (retornoAPI.status === 204 || retornoAPI.status === 200) {
                Alerta({
                    title: 'Excluir Filme',
                    text: 'Filme excluído com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                getFilmes();
            } else {
                Alerta({
                    title: 'Excluir Filme',
                    text: 'Algum problema aconteceu ao excluir!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
            }catch (error) {
                console.log(error);
                Alerta({
                    title: 'Excluir Filme',
                    text: 'Erro ao chamar a API na exclusão',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        }



    const limparFormulario = () => {
        Alerta({
            title: 'Cadastro de Filme',
            text: 'Limpar formulário em desenvolvimento',
            icon: 'info',
            confirmButtonText: 'OK'
        })
    }

    // Funções

    // Ciclo de vida
    useEffect(() => {
        getGeneros();
        getFilmes();
    }, [])

    return (
        <>
            <Header />

            <main>
                {/* Formulário de cadastrar / editar */}
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    //   visibilidade="none"
                    placeholder="filme"
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    valor={valor}
                    setValor={setValor}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                    listaGeneros={listaGeneros}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    // visibilidade="none"
                    lista={listaFilmes}
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                // funcEditar={preEditar}
                />

            </main>

            <Footer />
        </>
    )
}

export default CadastroFilme