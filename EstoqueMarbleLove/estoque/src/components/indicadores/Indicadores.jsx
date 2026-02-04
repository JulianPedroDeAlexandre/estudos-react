import React from 'react'
import style from "./Indicadores.module.css"

const Indicadores = () => {
  return (
    <div className={style.indicadores}>

        <div className={style.celtop}>
            <h4>Total de produtos</h4>
            <div className={style.infobotton}>
                <h3 id="somatoriaEstoque"></h3>
                <div className={style.icon}>
                    <i class='bx  bx-garage'></i>
                </div>
            </div>
        </div>
        <div className={style.celtop}>
            <h4>Valor total</h4>
            <div className={style.infobotton}>
                <h3>R$ 12240</h3>
                <div className={style.icon}>
                    <i class='bx  bx-print-dollar'></i>
                </div>
            </div>
        </div>
        <div className={style.celtop}>
            <h4>outra coisa</h4>
            <div className={style.infobotton}>
                <h3>1240</h3>
                <div className={style.icon}>
                    <i class='bx  bx-search'></i>
                </div>
            </div>
        </div>

    </div>
  )
}

export default Indicadores