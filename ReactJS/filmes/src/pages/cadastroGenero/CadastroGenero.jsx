import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/Services";
import { Alerta } from "../../components/alerta/Alerta";

const CadastroGenero = () => {
  const [valor, setValor] = useState("");
  const [listaGeneros, setListaGeneros] = useState([]);

  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/Genero");
      const dados = retornoAPI.data;
      setListaGeneros(dados);
    } catch (error) {
      Alerta({
        title: 'Cadastro de Gênero',
        text: 'Problema ao carregar dados da api',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  };

  const cadastrarGenero = async (e) => {
    e.preventDefault();

    if (valor.trim().length === 0) {
      Alerta({
        title: 'Cadastro de Gênero',
        text: 'Preencha o campo de gênero!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    const objCadastro = {
      idGenero: "",
      nome: valor,
    };

    try {
      const retornoAPI = await api.post("/Genero", objCadastro);

      if (retornoAPI.status === 201 || retornoAPI.status === 200) {
        Alerta({
          title: 'Cadastro de Gênero',
          text: `${valor} cadastrado com sucesso!`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        setValor("");
        getGeneros();
      } else {
        Alerta({
          title: 'Cadastro de Gênero',
          text: 'Algum problema aconteceu ao cadastrar!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.log(error);
      Alerta({
        title: 'Cadastro de Gênero',
        text: 'Erro ao chamar a API no cadastro',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const preEditar = async (item) => {
    const idEditar = item.id || item.idGenero;

    const resultado = await Alerta({
      title: "Editar Gênero",
      input: "text",
      inputLabel: "Nome do gênero",
      inputValue: item.nome,
      showCancelButton: true,
      confirmButtonText: "Salvar",
      cancelButtonText: "Cancelar",
      inputValidator: (value) => {
        if (!value || value.trim().length === 0)
          return "Preencha o campo de gênero!";
      },
    });

    const { value: novoNome } = resultado;

    if (!novoNome) return;

    const objEditar = {
      idGenero: idEditar,
      nome: novoNome,
    };

    try {
      const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar);
      if (retornoAPI.status === 204 || retornoAPI.status === 200) {
        Alerta({
          title: 'Edição de Gênero',
          text: 'Gênero editado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        getGeneros();
      } else {
        Alerta({
          title: 'Edição de Gênero',
          text: 'Algum problema aconteceu ao editar!',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      console.log(error);
      Alerta({
        title: 'Edição de Gênero',
        text: 'Erro ao chamar a API na edição',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const excluirGenero = async (item) => {
    const idExcluir = item.id || item.idGenero;

    const result = await Alerta({
      title: "Você tem certeza?",
      text: "Quer apagar o gênero " + item.nome + "?",
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
      const retornoAPI = await api.delete(`/Genero/${idExcluir}`);

      if (retornoAPI.status === 204 || retornoAPI.status === 200) {
        Alerta({
          title: 'Exclusão de Gênero',
          text: 'Gênero excluído com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        getGeneros();
      } else {
        Alerta({
          title: 'Exclusão de Gênero',
          text: 'Não foi possível excluir o gênero.',
          icon: 'error',
          confirmButtonText: 'OK'
        });
      }
    } catch (error) {
      Alerta({
        title: 'Exclusão de Gênero',
        text: 'Ocorreu um erro ao excluir o gênero.',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      console.log(error);
    }
  };

  useEffect(() => {
    getGeneros();
  }, []);

  return (
    <>
      <Header />
      <main>
        <Cadastro
          tituloCadastro="Cadastro de Gêneros"
          visibilidade="none"
          placeholder="gênero"
          funcCadastro={cadastrarGenero}
          valor={valor}
          setValor={setValor}
        />

        <Lista
          tituloLista="Lista de Gêneros"
          visibilidade="none"
          lista={listaGeneros}
          tipoLista="genero"
          funcExcluir={excluirGenero}
          funcEditar={preEditar}
        />
      </main>
      <Footer />
    </>
  );
};

export default CadastroGenero;