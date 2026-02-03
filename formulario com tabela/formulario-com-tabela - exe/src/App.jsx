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
    if(!nome || !senha){
      return alert("preencha o formulario")
    }else{
      setNomeTable(nome);
      setSenhaTable(senha);
      setNome("");
      setSenha("");
    }
  }

  function entrar (){
    if(!nome || !senha)
      return alert("preencha o formulario")

    if(nome === nomeTabela && senha === senhaTabela){
      alert("Valido, você acessou!")
      setNome("");
      setSenha("");
    }else{
      alert("Nome ou senha incorretos, tente novamente")
      setNome("");
      setSenha("");
    }

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