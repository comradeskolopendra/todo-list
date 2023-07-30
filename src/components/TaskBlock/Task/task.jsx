import styles from "./task.module.sass";

const Task = ({ label, onClick, isDone }) => {

    return (
        <div className={styles.task} onClick={onClick}>
            <p className={styles.label}>{label}</p>
            <input type="checkbox" checked={isDone} />
        </div>
    );
};

export default Task;