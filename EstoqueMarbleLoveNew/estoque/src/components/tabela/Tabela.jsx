
import React from 'react'
import style from "./Tabela.module.css"
// import imagemteste from "../../assets/41bNCkmY8-L.jpg"

const Tabela = ({ produtos, defaultImage, valorEntrada, handleValorEntrada, addValorEntrada, removeValorEntrada, removeItemEstoque, editarItemEstoque }) => {
    return (
        <div>
            <table id="tableAdd">
                <thead>
                    <tr>
                        <th>imagem</th>
                        <th>cor</th>
                        <th>nome</th>
                        <th>SKU</th>
                        <th>estoque total</th>
                        <th>+/-</th>
                        <th>valor compra</th>
                        <th>valor de venda</th>
                        <th>valor total</th>
                        <th>Edit</th>
                    </tr>
                </thead>
                <tbody>
                    {produtos.map((p, index) => (
                        <tr key={index}>
                            <td>
                                <img src={p.file ? URL.createObjectURL(p.file) : defaultImage} alt="" />
                            </td>
                            <td>{p.cor}</td>
                            <td>{p.nome}</td>
                            <td>{p.codigo}</td>
                            <td>{p.estoque}</td>
                            <td>
                                <input className={style.invalue} 
                                value={p.valorEntrada} 
                                onChange={(e) => handleValorEntrada(index, e.target.value)} 
                                type="number" 
                                placeholder='1' 
                                />
                                <button onClick={() => addValorEntrada(index)}>+</button> 
                                <button onClick={() => removeValorEntrada(index)}>-</button>
                            </td>
                            <td>R$ {p.compra}</td>
                            <td>R$ {p.venda}</td>
                            <td>R$ {p.estoque * p.venda}</td>
                            <td>
                                <button onClick={() => editarItemEstoque(index)}>Editar</button>
                                <button onClick={() => removeItemEstoque(index)}>Excluir</button>
                            </td>
                        </tr>
                    ))}

                </tbody>
            </table>

        </div>
    )
}

export default Tabela

