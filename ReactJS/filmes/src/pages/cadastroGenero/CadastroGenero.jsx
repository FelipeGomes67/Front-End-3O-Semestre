import "./CadastroGenero.css";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import Cadastro from "../../components/cadastro/Cadastro";
import Lista from "../../components/lista/Lista";
import { useEffect, useState } from "react";
import api from "../../services/services";
import { Alerta } from "../../components/alerta/Alerta";


import Swal from "sweetalert2";

const CadastroGenero = () => {
  // states e variáveis
  const [valor, setValor] = useState("");
  const [listaGeneros, setListaGeneros] = useState([]);
  const [editar, setEditar] = useState(false);
  const [idEditar, setIdEditar] = useState(0);

  // ciclo de vida e funções

  // GET - Listar gêneros
  const getGeneros = async () => {
    try {
      const retornoAPI = await api.get("/Genero"); //chama a api
      const dados = retornoAPI.data; //extrai os dados retornados
      setListaGeneros(dados); //guarda os dados no state
    } catch (error) {
      console.error(error);
      Alerta({
        title: 'Cadastro de Gênero',
        text: 'Problema ao carregar dados da api',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }
  };

  // POST - Cadastrar gênero
  const cadastrarGenero = async (e) => {
    e.preventDefault();

    // validação dos dados preenchidos
    if (valor.trim().length === 0) {
      // alert("Preencha o campo de gênero!");
      Alerta({
        title: 'Cadastro de Gênero',
        text: 'Preencha o campo de gênero!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    const objCadastro = {
      nome: valor,
    };

    try {
      const retornoAPI = await api.post("/Genero", objCadastro);

      if (retornoAPI.status === 201 || retornoAPI.status === 200) {
        // alert("Gênero cadastrado com sucesso!");
        Alerta({
          title: 'Cadastro de Gênero',
          text: `${valor} cadastrado com sucesso!`,
          icon: 'success',
          confirmButtonText: 'OK'
        });
        limparFormulario();
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
      console.error(error);
      Alerta({
        title: 'Cadastro de Gênero',
        text: 'Erro ao chamar a API no cadastro',
        icon: 'error',
        confirmButtonText: 'OK'
      });
    }
  };

  const limparFormulario = () => {
    setValor("");
    setEditar(false);
    setIdEditar(0);
  }

  const preEditar = (item) => {
    setValor(item.nome);
    setIdEditar(item.id);
    setEditar(true);
  }

  const editarGenero = async (e) => {
    e.preventDefault();

    if (valor.trim().length == 0) {
      Alerta({
        title: 'Edição de Gênero',
        text: 'Preencha o campo de gênero!',
        icon: 'error',
        confirmButtonText: 'OK'
      });
      return false;
    }

    const objEditar = {
      id: idEditar,
      nome: valor
    };

    try {
      const retornoAPI = await api.put(`/Genero/${idEditar}`, objEditar);
      if (retornoAPI.status == 204 || retornoAPI.status == 200) {
        Alerta({
          title: 'Edição de Gênero',
          text: 'Gênero editado com sucesso!',
          icon: 'success',
          confirmButtonText: 'OK'
        });
        limparFormulario();
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

  // DELETE - Excluir gênero
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

    // Se clicou em cancelar
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
      console.error(error);
    }
  };

  // Ciclo de vida - Executa ao carregar o componente
  useEffect(() => {
    getGeneros();
  }, []);

  // Retorno do JSX (Renderização)
  return (
    <>
      <Header />
      <main>
        {/* Formulário de cadastrar / editar */}
        <Cadastro
          tituloCadastro="Cadastro de Gêneros"
          visibilidade="none"
          placeholder="gênero"
          funcCadastro={editar ? editarGenero : cadastrarGenero}
          valor={valor}
          setValor={setValor}
          btnEditar={editar}
          cancelarEdicao={limparFormulario}
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