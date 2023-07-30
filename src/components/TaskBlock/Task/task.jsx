import styles from "./task.module.sass";

const Task = ({ label, handlerOnDelete, handlerOnChange, id, isDone }) => {

    return (
        <div className={styles.task}>
            <p className={styles.label}>{label}</p>
            <div className={styles.changeActionsBlock}>
                {isDone ?
                    <button onClick={() => handlerOnDelete(id)}>
                        Удалить
                    </button>
                    : ""}
                <input type="checkbox" onChange={() => handlerOnChange(id, !isDone)} checked={isDone} />
            </div>
        </div>
    );
};

export default Task;