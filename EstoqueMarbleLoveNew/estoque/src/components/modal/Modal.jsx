import React from 'react'
import style from "./Modal.module.css"

const Modal = ({envia, fecha, handleFile, cor, handleCor, nome, handleNome, codigo, handleCodigo, estoque, handleEstoque, compra, handleCompra, venda, handleVenda}) => {
  return (
     
        <div className={style.container}>
            <div className={style.esq}>
                <label htmlFor="image">Imagem</label>
                <label htmlFor="color">Cor</label>
                <label htmlFor="name">Nome</label>
                <label htmlFor="cod">Código</label>
                <label htmlFor="storage">Estoque</label>
                <label htmlFor="price">Preço compra</label>
                <label htmlFor="price-sell">Preço venda</label>
                <button onClick={fecha} className={style.fechar}>Fechar</button>
            </div>
            <div className={style.dir}>
                <input type="file" onChange={handleFile}></input>
                <input type="text" value={cor} onChange={handleCor}></input>
                <input type="text" value={nome} onChange={handleNome}></input>
                <input type="text" value={codigo} onChange={handleCodigo}></input>
                <input type="number" value={estoque} onChange={handleEstoque}></input>
                <input type="number" value={compra} onChange={handleCompra}></input>
                <input type="number" value={venda} onChange={handleVenda}></input>
                <button onClick={envia} className={style.enviar}>Enviar</button>

            </div>

        </div>
  )
}

export default Modal