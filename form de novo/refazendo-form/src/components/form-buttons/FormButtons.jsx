import style from "./FormButtons.module.css"

const FormButtons = ({nome, handleName, senha, handleSenha, entrar, cadastrar}) => {
  return (
    <div className={style.form}>
      <label htmlFor="nome">Nome: </label>
      <input type="text" value={nome} onChange={handleName}/>
      <label htmlFor="senha">Senha: </label>
      <input type="password" value={senha} onChange={handleSenha}/>
      <div className={style.containerBtts}>
        <button onClick={cadastrar}>Cadastrar</button>
        <button onClick={entrar}>Entrar</button>
      </div>
    </div>
  )
}

export default FormButtons