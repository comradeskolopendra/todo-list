import { useState } from "react";
import styles from "./task.module.sass";

const Task = ({ label, handlerOnDelete, handlerOnChange, id, isDone }) => {
    const [edit, setEdit] = useState(false)
    const [newLabel, changeLabel] = useState(label);

    const handlerOnChangeLabel = (e) => changeLabel(e.currentTarget.value);


    const handlerOnEdit = () => {
        if (edit && (newLabel != label)) {
            handlerOnChange(newLabel, isDone, id);
            setEdit(false);
        } else {
            setEdit(true)
        }
    };

    return (
        <div className={styles.task}>
            {edit ? <input className={styles.label} onChange={handlerOnChangeLabel} defaultValue={newLabel} type="text" /> : <p className={styles.label}>{label}</p>}
            <div className={styles.changeActionsBlock}>
                <button onClick={handlerOnEdit}>Ред.</button>
                {isDone ?
                    <button onClick={() => handlerOnDelete(id)}>
                        Удалить
                    </button>
                    : ""}
                <input type="checkbox" onChange={() => handlerOnChange(label, id, !isDone)} checked={isDone} />
            </div>
        </div>
    );
};

export default Task;