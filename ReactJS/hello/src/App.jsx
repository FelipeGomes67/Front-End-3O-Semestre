import "./App.css";
import Title from "./components/title/Title";
import SubTitle from "./components/subtitle/SubTitle";

function App() {

  return (
    <>
    <Title texto="Meu primeiro componente App" />
    <SubTitle texto="Subtitulo do meu App" />
    <SubTitle edu="Bacana" texto="Outro subtitulo" />
    </>
  );
}

export default App
