import styles from "../formulario-botoes/formularioBotoes.module.css"

const FormularioBotoes = ({nome, handleNome, senha, handlePass, cadastrar, entrar}) => {
  return (
    <div className={styles.form}>
        <label htmlFor="nome">Nome: </label>
        <input type="text" value={nome} onChange={handleNome}/>
        <label htmlFor="senha">Passworld: </label>
        <input type="password" value={senha} onChange={handlePass} />
        <div className={styles.containerbutton}>
        <button onClick={cadastrar}>Cadastrar</button>
        <button onClick={entrar}>Entrar</button>
        </div>
    </div>
  )
}

export default FormularioBotoes