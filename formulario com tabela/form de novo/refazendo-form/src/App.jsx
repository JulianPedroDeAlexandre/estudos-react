import FormButtons from "./components/form-buttons/FormButtons"
import Table from "./components/table/Table"
import "./globals/style.css"
import { useState } from "react"

function App() {

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeTabela, setNomeTabela] = useState("");
  const [senhaTabela, setSenhaTabela] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  }

  const handleSenha = (e) => {
    setSenha(e.target.value);
  }

  function cadastrar() {
    if (!nome || !senha) {
    alert("Formulario incompleto, preencha o formulario");
  } else {
      setNomeTabela(nome);
      setSenhaTabela(senha);
      setNome("");
      setSenha("");
    }
  }

  function entrar() {
    if (!nome || !senha) 
      return alert("Formulario incompleto, preencha o formulario");

    if(nome === nomeTabela && senha === senhaTabela){
      alert("Dados batem com a tabela, entrou");
      setNome("");
      setSenha("");
    }else{
      alert("Dados não batem com a tabela, tente de novo");
      setNome("");
      setSenha("");
    }
  }

  return (
    <>
      <FormButtons
        nome={nome}
        senha={senha}
        handleName={handleNome}
        handleSenha={handleSenha}
        cadastrar={cadastrar}
        entrar={entrar}
      />
      <Table
        nomeTabela={nomeTabela}
        senhaTabela={senhaTabela}
      />
    </>
  )
}

export default App
