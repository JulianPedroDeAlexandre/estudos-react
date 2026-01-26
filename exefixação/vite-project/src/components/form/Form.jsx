import style from "./Form.module.css"

const Form = (nome, handleName, senha, handleSenha, cadastrar, entrar) => {
  return (
    <div>
        <label htmlFor="nome">Nome: </label>
        <input type="text" value={nome} onChange={handleName}/>
        <label htmlFor="senha">Senha: </label>
        <input type="password" value={senha} onChange={handleSenha}/>
        <div className={style.container}>
          <button onClick={cadastrar}>Cadastrar</button>
          <button onClick={entrar}>Entrar</button>
        </div>
    </div>
  )
}

export default Form