
import FormularioBotoes from "./components/formulario-botoes/FormularioBotoes"
import Tabela from "./components/tabela/Tabela"
import "./globals/blobal.css"
import { useState } from "react"
function App() {

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeTable, setNomeTable] = useState("");
  const [senhaTable, setSenhaTable] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  }

  const handlePass = (e) => {
    setSenha(e.target.value);
  }

  function cadastrar() {
    if (!nome || !senha)
      return alert("preencha o formulario");

    setNomeTable(nome);
    setSenhaTable(senha);
    setNome("");
    setSenha("");
  }

  function entrar() {
    if (!nome || !senha)
      return alert("preencha o formulario")

    if (nome === nomeTable && senha === senhaTable) {
      alert("entrou");
      setNome("");
      setSenha("");
      
    } else {
      alert("Nome ou Senha incorretos");
      setNome("");
      setSenha("");
    }
  }

  return (
    <>
      <FormularioBotoes
        nome={nome}
        handleNome={handleNome}
        senha={senha}
        handlePass={handlePass}
        cadastrar={cadastrar}
        entrar={entrar}
      />
      <Tabela
        nomeTable={nomeTable}
        senhaTable={senhaTable}
      />
    </>
  )
}

export default App
