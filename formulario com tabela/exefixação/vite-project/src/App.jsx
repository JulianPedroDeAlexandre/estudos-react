import Form from "./components/form/Form"
import "../src/globals/globals.css"
import Table from "./components/Table/Table"
import { useState } from "react"
import Modal from "./components/modal/Modal";

function App() {

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [nomeTabela, setNomeTabela] = useState("");
  const [senhaTabela, setSenhaTabela] = useState("");
  const [mensagem, setMensagem] = useState("");

  const handleName = (e) => {
    setNome(e.target.value)
  }

  const handleSenha = (e) => {
    setSenha(e.target.value)
  }

  onkeydown = (e) => {
    if (e.key === "Enter" && !nomeTabela && !senhaTabela) {
      cadastrar();
    }
    if (e.key === "Enter" && nomeTabela && senhaTabela) {
      entrar();
    }
    if (e.key === "Enter" && mensagem){
      fechar();
    }
  }

  function entrar() {
    if (!nome || !senha) {
      return setMensagem("Preencha o formulario")
    } else {
      if (nome === nomeTabela && senha === senhaTabela) {
        setMensagem("Login efetuado com sucesso")
        setNome("");
        setSenha("");
      } else {
        setMensagem("Erro, preencha o formulario novamente")
        setNome("");
        setSenha("");
      }
    }

  }

  function cadastrar() {
    if (!nome || !senha) {
      return setMensagem("Preencha o formulario")
    } 
      setNomeTabela(nome)
      console.log(nome)
      setSenhaTabela(senha)
      console.log(senha)
      setNome("");
      setSenha("");
    
  }

  function fechar(){
     setMensagem("")
  }

  return (
    <>
      <Form
        nome={nome}
        senha={senha}
        handleName={handleName}
        handleSenha={handleSenha}
        entrar={entrar}
        cadastrar={cadastrar}
      />
      <Table
        nomeTabela={nomeTabela}
        senhaTabela={senhaTabela}
      />
      <Modal 
      mensagem={mensagem} 
      fechar={fechar} 
      />
    </>
  );
}

export default App
