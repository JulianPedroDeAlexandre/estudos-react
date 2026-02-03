import style from "./Table.module.css"

const Table = ({nomeTabela, senhaTabela}) => {
  return (
    <div className={style.tabela}>
        <table>
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Senha:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>{nomeTabela}</td>
                    <td>{senhaTabela}</td>
                </tr>
            </tbody>
        </table>

    </div>
  )
}

export default Table