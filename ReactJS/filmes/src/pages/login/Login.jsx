import "./login.css";
import Botao from "../../components/botao/Botao";
import Logo from "../../assets/img/logo.svg";
import { useContext, useState } from "react";
import { UsuarioContext } from "../../context/UsuarioContext";
import { useNavigate } from "react-router-dom";
import { Alerta } from "../../components/alerta/Alerta";

const Login = () => {
  const { setUsuario } = useContext(UsuarioContext);
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const logar = (e) => {
    e.preventDefault();

    if (!email.trim()) {
      Alerta({
        title: 'Login',
        text: 'Digite um e-mail válido',
        icon: 'warning',
        confirmButtonText: 'OK'
      });
      return;
    }

    setUsuario(email);
    localStorage.setItem("usuario", JSON.stringify(email));
    setEmail("");


    navigate("/filmes");

  };

  return (
    <>
      <main className="main_login">
        <div className="banner"></div>
        <section className="section_login">
          <img src={Logo} alt="Logo do Filmoteca" />

          <form onSubmit={logar} className="form_login">
            <h1>Login</h1>
            <div className="campos_login">
              <div className="campo_input">
                <label htmlFor="email">Email:</label>
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Digite seu e-mail"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="campo_input">
                <label htmlFor="senha">Senha:</label>
                <input type="password" name="senha" placeholder="Digite sua senha" />
              </div>
            </div>

            <Botao nomeDoBotao="Entrar" type="submit" />

          </form>
        </section>
      </main>
    </>
  );
};

export default Login;