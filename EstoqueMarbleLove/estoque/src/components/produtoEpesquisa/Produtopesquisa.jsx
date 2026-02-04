import React from 'react'
import style from "./Produtopesquisa.module.css"

const Produtopesquisa = () => {
    return (
        <div className={style.pesquisaadd}>
            <div className={style.esquerda}>
                <input type="text" placeholder="Pesquise" className={style.pesqinpu}></input>
                    <button className={style.pesq}>Pesquisar</button>
            </div>
            <div className={style.direita}>
                <button className={style.addproduto} id="btAdd">Adicionar novo produto</button>
            </div>

        </div>
    )
}

export default Produtopesquisa
