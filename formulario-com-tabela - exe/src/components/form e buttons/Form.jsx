import style from "../form e buttons/Form.module.css"

const Form = ({nome, handleNome, senha, handleSenha, cadastrar, entrar}) => {
    return (
        <div className={style.form}>
            <label htmlFor="nome">Nome: </label>
            <input type="text" value={nome} onChange={handleNome} />
            <label htmlFor="senha">Senha: </label>
            <input type="password" value={senha} onChange={handleSenha} />
            <div className={style.container}>
                <button onClick={cadastrar}>Cadastrar</button>
                <button onClick={entrar}>Entrar</button>
            </div>
        </div>
    )
}

export default Form