import React from "react";
import { useSelector } from "react-redux";
import { handlerOnShapshot } from "../../asyncAction/todos";
import { deleteTodo } from "../../helpers/helpers";

import Task from "./Task/task";
import styles from "./taskBlock.module.sass";

const TaskBlock = () => {

    const { todos } = useSelector(store => store)

    const handlerOnDelete = (id) => {
        setTimeout(() => {
            deleteTodo(id);
            dispatch(handlerOnShapshot());
        }, 3000)
    };

    return (
        <div className={styles.wrapper}>
            {todos.length !== 0 ? (
                todos.map((element) => (
                    <Task onClick={() => handlerOnDelete(element.id)} label={element.data().label} isDone={element.data().isDone} />
                ))
            ) : (
                <div>Нет данных</div>
            )}
        </div>
    );
};

export default TaskBlock;