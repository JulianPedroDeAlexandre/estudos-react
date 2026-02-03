import React from "react";

import style from "./Table.module.css"

const Table = ({ adiciona }) => {
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
                    {adiciona.map((pessoa, index) => (
                        <tr key={index}>
                            <td>{pessoa.nome}</td>
                            <td>{pessoa.senha}</td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Table