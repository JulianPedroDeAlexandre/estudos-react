import React from 'react'
import style from "./Produtopesquisa.module.css"

const Produtopesquisa = ({ abremodal, pesquisa, setPesquisa }) => {
    return (
        <div className={style.pesquisaadd}>
            <div className={style.esquerda}>
                <input
                    type="text"
                    placeholder="Pesquise"
                    className={style.pesqinpu}
                    value={pesquisa}
                    onChange={(e) => setPesquisa(e.target.value)}
                />
                <button className={style.pesq}>Pesquisar</button>
            </div>
            <div className={style.direita}>
                <button className={style.addproduto} onClick={abremodal}>Adicionar novo produto</button>
            </div>

        </div>
    )
}

export default Produtopesquisa
