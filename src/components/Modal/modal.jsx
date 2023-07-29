/* eslint-disable react/prop-types */
import styles from "./modal.module.sass";
import close from "../../assets/close.svg";

const Modal = ({ handlerOnSubmit, handlerOnClose }) => {

  return (
    <div className={styles.modalWrapper}>
      <form action="" onSubmit={handlerOnSubmit} className={styles.form}>
        <button type='button' onClick={handlerOnClose}>
          <img src={close} alt="" />
        </button>
        <input type="text" name="input" id="input" placeholder="label" />
        <button type="submit">add todo</button>
      </form>
    </div>
  );
}

export default Modal;