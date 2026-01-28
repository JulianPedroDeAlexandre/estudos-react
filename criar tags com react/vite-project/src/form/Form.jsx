import style from "./Form.module.css"

const Form = ({nome, handleName, senha, handleSenha, cadastrar, entrar, remover, onKeyDown}) => {
  return (
    <form className={style.form} onKeyDown={onKeyDown}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" value={nome} onChange={handleName}/>
        <label htmlFor="senha">Senha: </label>
        <input type="password" value={senha} onChange={handleSenha}/>
        <div className={style.container}>
          <button type="button" onClick={cadastrar}>Cadastrar</button>
          <button type="button" onClick={entrar}>Entrar</button>
          <button type="button" onClick={remover}>Remover</button>
        </div>
    </form>
  )
}

export default Form