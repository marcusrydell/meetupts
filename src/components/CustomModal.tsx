import style from "../styles/CustomModal.module.css";

function CustomModal() {
    return (
        <div className={style.modal}>
            <p className={style.exitBtn}>X</p>
            <h1>Bög</h1>
            <p>Var: nu</p>
            <p>När: där</p>
            <div className={style.commentsContainer}>
                <p className={style.comment}>Comment!</p>
            </div>
        </div>
    );
}

export default CustomModal;
