import React from 'react'
import style from "./Indicadores.module.css"

const Indicadores = ({ titulo, valor, icon }) => {
    return (
        <div className={style.celtop}>
            <h4>{titulo}</h4>
            <div className={style.infobotton}>
                <h3>{valor}</h3>
                <div className={style.icon}>
                    <i className={icon}></i>
                </div>
            </div>
        </div>
    )
}

export default Indicadores