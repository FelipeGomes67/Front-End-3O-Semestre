import "./CadastroFilme.css"
import Header from "../../components/header/Header"
import Footer from "../../components/footer/Footer"
import Cadastro from "../../components/cadastro/Cadastro"
import Lista from "../../components/lista/Lista"
import { useEffect, useState } from "react"
import api from "../../services/Services"
import { Alerta } from "../../components/alerta/Alerta"

const CadastroFilme = () => {

    const [valor, setValor] = useState("");
    const [idGenero, setIdGenero] = useState("");
    const [listaFilmes, setListaFilmes] = useState([]);
    const [listaGeneros, setListaGeneros] = useState([]);

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

    const cadastrarFilme = async (e) => {
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

        if (!idGenero) {
            Alerta({
                title: 'Cadastro de Filme',
                text: 'Por Favor, selecione um gênero',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return false;
        }

        try {
            const formData = new FormData();
            formData.append("titulo", valor);
            formData.append("idGenero", idGenero);

            const retornoAPI = await api.post("/Filme", formData);

            if (retornoAPI.status === 201 || retornoAPI.status === 200) {
                Alerta({
                    title: 'Cadastro de Filme',
                    text: `${valor} cadastrado com sucesso!`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                setValor("");
                setIdGenero("");
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

    const preEditar = async (item) => {
        const idEditar = item.id || item.idFilme;

        const { value: novoTitulo } = await Alerta({
            title: "Editar Filme",
            input: "text",
            inputLabel: "Título do filme",
            inputValue: item.titulo,
            showCancelButton: true,
            confirmButtonText: "Próximo",
            cancelButtonText: "Cancelar",
            inputValidator: (value) => {
                if (!value || value.trim().length === 0)
                    return "Preencha o campo de título!";
            },
        });

        if (!novoTitulo) return;

        const opcoesGenero = {};
        listaGeneros.forEach((g) => {
            const id = g.idGenero || g.id;
            opcoesGenero[id] = g.nome;
        });

        const idGeneroAtual = item.idGenero || item.genero?.idGenero || "";

        const { value: novoIdGenero } = await Alerta({
            title: "Editar Filme",
            input: "select",
            inputLabel: "Gênero do filme",
            inputValue: idGeneroAtual,
            inputOptions: opcoesGenero,
            showCancelButton: true,
            confirmButtonText: "Salvar",
            cancelButtonText: "Cancelar",
            inputValidator: (value) => {
                if (!value) return "Selecione um gênero!";
            },
        });

        if (!novoIdGenero) return;

        try {
            const formData = new FormData();
            formData.append("titulo", novoTitulo);
            formData.append("idGenero", novoIdGenero);

            const retornoAPI = await api.put(`/Filme/${idEditar}`, formData);

            if (retornoAPI.status === 204 || retornoAPI.status === 200) {
                Alerta({
                    title: 'Edição de Filme',
                    text: 'Filme atualizado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                getFilmes();
            } else {
                Alerta({
                    title: 'Edição de Filme',
                    text: 'Algum problema aconteceu ao editar!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            console.log(error);
            Alerta({
                title: 'Edição de Filme',
                text: 'Erro ao chamar a API na edição',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

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
        } catch (error) {
            console.log(error);
            Alerta({
                title: 'Excluir Filme',
                text: 'Erro ao chamar a API na exclusão',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    useEffect(() => {
        getGeneros();
        getFilmes();
    }, [])

    return (
        <>
            <Header />

            <main>
                <Cadastro
                    tituloCadastro="Cadastro de Filme"
                    placeholder="filme"
                    funcCadastro={cadastrarFilme}
                    valor={valor}
                    setValor={setValor}
                    idGenero={idGenero}
                    setIdGenero={setIdGenero}
                    listaGeneros={listaGeneros}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    lista={listaFilmes}
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                    listaGeneros={listaGeneros}
                />
            </main>

            <Footer />
        </>
    )
}

export default CadastroFilme