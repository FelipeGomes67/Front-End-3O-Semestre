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
    const [idGenero, setIdGenero] = useState("");
    const [editar, setEditar] = useState(false);
    const [listaFilmes, setListaFilmes] = useState([]);
    const [listaGeneros, setListaGeneros] = useState([]);
    const [idEditar, setIdEditar] = useState(0);

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
            // Criando o esqueleto que o [FromForm] exige
            const formData = new FormData();
            formData.append("titulo", valor);
            formData.append("idGenero", idGenero);

            // Se você tiver um state para a imagem (ex: imagemSelecionada)
            // formData.append("imagem", imagemSelecionada);

            // Enviando com o Content-Type correto implicitamente
            const retornoAPI = await api.post("/Filme", formData);

            if (retornoAPI.status === 201 || retornoAPI.status === 200) {
                Alerta({
                    title: 'Cadastro de Filme',
                    text: `${valor} cadastrado com sucesso!`,
                    icon: 'success',
                    confirmButtonText: 'OK'
                });

                // Limpa o input após cadastrar para o usuário poder digitar outro
                setValor("");
                setIdGenero("");

                getFilmes(); // Atualiza a lista na tela
            } else {
                Alerta({
                    title: 'Cadastro de Filme',
                    text: 'Algum problema aconteceu ao cadastrar!',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        } catch (error) {
            if (error.response && error.response.data) {
                // Altere para inspecionar o objeto completo e a mensagem interna do banco
                console.dir(error.response.data);

                // Se a sua API retornar um formato padrão de validação do .NET (ProblemDetails)
                if (error.response.data.errors) {
                    console.table(error.response.data.errors);
                }
            } else {
                console.error("Erro geral:", error);
            }

            Alerta({
                title: 'Cadastro de Filme',
                text: 'Erro ao chamar a API no cadastro',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
    }

    const preEditar = (item) => {
        setValor(item.titulo);
        setIdGenero(item.idGenero || item.genero?.idGenero || "");
        setIdEditar(item.id || item.idFilme);
        setEditar(true);
    }


    //Put
    const editarFilme = async (e) => {
        e.preventDefault();

        if (valor.trim().length === 0 || !idGenero) {
            Alerta({
                title: 'Edição de Filme',
                text: 'Preencha todos os campos obrigatórios!',
                icon: 'warning',
                confirmButtonText: 'OK'
            });
            return false;
        }

        try {
            // Como sua API espera FilmeDTO no Put, usamos FormData por causa da Imagem
            const formData = new FormData();
            formData.append("titulo", valor);
            formData.append("idGenero", idGenero);

            // Envia para a rota URL contendo o ID: /api/Filme/{id}
            const retornoAPI = await api.put(`/Filme/${idEditar}`, formData);

            if (retornoAPI.status === 204 || retornoAPI.status === 200) {
                Alerta({
                    title: 'Edição de Filme',
                    text: 'Filme atualizado com sucesso!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
                limparFormulario();
                getFilmes();
            }
        } catch (error) {
            console.error("Erro na edição:", error.response?.data || error);
            Alerta({
                title: 'Edição de Filme',
                text: 'Erro ao salvar alterações do filme.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
        }
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



    const limparFormulario = () => {
        setValor("");
        setIdGenero("");
        setIdEditar("");
        setEditar(false);
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
                    // visibilidade="none"
                    placeholder="filme"
                    funcCadastro={editar ? editarFilme : cadastrarFilme}
                    valor={valor}
                    setValor={setValor}
                    idGenero={idGenero}
                    setIdGenero={setIdGenero}
                    btnEditar={editar}
                    cancelarEdicao={limparFormulario}
                    listaGeneros={listaGeneros}
                />

                <Lista
                    tituloLista="Lista de Filmes"
                    lista={listaFilmes}
                    tipoLista="filme"
                    funcExcluir={excluirFilme}
                    funcEditar={preEditar}
                />

            </main>

            <Footer />
        </>
    )
}

export default CadastroFilme