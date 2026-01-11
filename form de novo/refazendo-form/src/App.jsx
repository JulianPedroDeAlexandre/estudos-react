import FormButtons from "./components/form-buttons/FormButtons"
import Table from "./components/table/Table"
import "./globals/style.css"
import { useState } from "react"

function App() {

const [nome, setNome] = useState("");
const [senha, setSenha] = useState("");
const [nomeTabela, setNomeTabela] = useState("");
const [senhaTabela, setSenhaTabela] = useState("");

const handleNome = (e) =>{
  setNome(e.target.value);
}

const handleSenha = (e) =>{
  setSenha(e.target.value)
}

  return (
    <>
    <FormButtons
    nome={nome}
    senha={senha}
    handleName={handleNome}
    handleSenha={handleSenha}

    />
    <Table/>
    </>
  )
}

export default App
