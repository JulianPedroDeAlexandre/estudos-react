import styles from "../tabela/tabela.module.css"

const Tabela = ({nomeTable, senhaTable}) => {
  return (
    <div className={styles.tabela}>
        <table>
            <thead>
                <tr>
                    <th>Nome:</th>
                    <th>Senha:</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {nomeTable}
                    </td>
                    <td>
                        {senhaTable}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default Tabela