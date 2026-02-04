
import React from 'react'
import style from "./Tabela.module.css"
import imagemteste from "../../assets/41bNCkmY8-L.jpg"

const Tabela = () => {
  return (
    <div>
        <table id="tableAdd">
        <tr>
            <th>imagem</th>
            <th>cor</th>
            <th>nome</th>
            <th>codigo</th>
            <th>estoque total</th>
            <th>+/-</th>
            <th>valor compra</th>
            <th>valor de venda</th>
            <th>valor total</th>
            <th>Edit</th>
        </tr>
        <tr>
            <td>
                <img src={imagemteste} alt=""/>
            </td>
            <td>
                prata
            </td>
            <td>
                torneira inox
            </td>
            <td>
                12265
            </td>
            <td>
                25
            </td>
            <td>
                <button>-1</button>
                <button>+1</button>
                <input className={style.invalue} type="number"></input>
                <button>add</button>

            </td>
            <td>
                R$ 98,68
            </td>
            <td>
                R$ 120,00
            </td>
            <td>
                R$ 2450,00
            </td>
            <td>
                <button>Editar</button>
                <button>Excluir</button>
            </td>
        </tr>
    </table>

    </div>
  )
}

export default Tabela

