import Form from "./components/form e buttons/Form"
import Table from "./components/table/Table"
import "./globals/style.css"
import { useState } from "react"

function App() {

  const[nome, setNome] = useState("");
  const[senha, setSenha] = useState("");
  const[nomeTabela, setNomeTable] = useState("");
  const[senhaTabela, setSenhaTable] = useState("");

  const handleNome = (e) => {
    setNome(e.target.value);
  }

  const handleSenha = (e) => {
    setSenha(e.target.value);
  }

  function cadastrar(){

  }

  function entrar (){
    
  }

  return (
    <>
      <Form
      nome={nome}
      senha={senha}
      handleNome={handleNome}
      handleSenha={handleSenha}
      entrar={entrar}
      cadastrar={cadastrar}
      />
      <Table
      nomeTabela={nomeTabela}
      senhaTabela={senhaTabela}
      />
    </>
  )
}

export default App