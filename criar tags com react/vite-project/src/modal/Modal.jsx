import style from "./Modal.module.css"
const Modal = ({modal, fechar}) => {
    if(!modal)
        return null

  return (
    <div className={style.sobrepor}>
        <div className={style.modal}>
            <p>{modal}</p>
            <button onClick={fechar}>Fechar</button>
        </div>
    </div>
  )
}

export default Modal