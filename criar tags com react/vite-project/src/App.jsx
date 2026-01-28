import "../src/globals/style.css"
import Form from "./form/Form"
import Modal from "./modal/Modal";
import Table from "./table/Table"
import { useState } from "react"

function App() {

  const [nome, setNome] = useState("");
  const [senha, setSenha] = useState("");
  const [adiciona, setAdiciona] = useState([]);
  const [modal, setModal] = useState("");

  const handleName = (e) => {
    setNome(e.target.value);
  }
  const handleSenha = (e) => {
    setSenha(e.target.value);
  }

  const onKeyDown = (e) => {

    if (e.key === "Enter") {
      cadastrar();
    }
    if (modal) {
      fechar();
    }
  };


  function cadastrar() {
    if (!nome || !senha) {
      setModal("Preencha o formulário");
      return;
    }

    setAdiciona([...adiciona, { nome, senha }]);
    setNome("");
    setSenha("");
  }


  function fechar() {
    setModal("");
  }


  function entrar() {

    if (!nome || !senha) {
      setModal("Preencha o formulário");
      return;
    }

    if (adiciona.length === 0) {
      setModal("Nenhum usuário cadastrado. Preencha a tabela primeiro.");
      return;
    }

    const pessoaEncontrada = adiciona.find(
      (pessoa) => pessoa.nome === nome && pessoa.senha === senha
    );

    if (pessoaEncontrada) {
      setModal("Login efetuado com sucesso");
      setNome("");
      setSenha("");
    } else {
      setModal("Usuário ou senha incorretos");
    }
  }


  function remover() {

    const novaLista = adiciona.filter(
      (pessoa) => !(pessoa.nome === nome && pessoa.senha === senha)
    );

    if (novaLista.length === adiciona.length) {
      setModal("Nada encontrado")
    } else {
      if (confirm("Deseja realmente remover este usuário?")) { 
        
      setModal("Removido")
      }
      setNome("");
      setSenha("");
    }

    setAdiciona(novaLista);
  }


  return (
    <>
      <Form
        nome={nome}
        senha={senha}
        handleName={handleName}
        handleSenha={handleSenha}
        cadastrar={cadastrar}
        entrar={entrar}
        remover={remover}
        onKeyDown={onKeyDown}
      />

      <Table adiciona={adiciona} />

      <Modal
        modal={modal}
        fechar={fechar}
      />
    </>
  )
}

export default App
