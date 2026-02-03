import style from "./Modal.module.css"

const Modal = ({ mensagem, fechar}) => {
    if (!mensagem)
        return null;

    return (
        <div className={style.sobrepor}>
            <div className={style.modal}>
                <p>{mensagem}</p>
                <button onClick={fechar}>Fechar</button>
            </div>
        </div>
    );
};

export default Modal