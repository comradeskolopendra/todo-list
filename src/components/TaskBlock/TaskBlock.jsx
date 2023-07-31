import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { handlerOnShapshot } from "../../asyncAction/todos";
import { deleteTodo, updateTodo } from "../../helpers/helpers";

import Task from "./Task/task";
import styles from "./taskBlock.module.sass";

const TaskBlock = () => {
    const dispatch = useDispatch();
    const { todos } = useSelector(store => store)

    const handlerOnDelete = (id) => {
        deleteTodo(id);
        dispatch(handlerOnShapshot());
    };

    const handlerOnChange = async (label, isDone, id) => {
        updateTodo(label, isDone, id)
        dispatch(handlerOnShapshot());
    };

    return (
        <div className={styles.wrapper}>
            {todos.length !== 0 ? (
                todos.map((element) => (
                    <Task
                        handlerOnChange={handlerOnChange}
                        handlerOnDelete={handlerOnDelete}
                        id={element.id}
                        key={element.id}
                        label={element.data().label}
                        isDone={element.data().isDone}
                    />
                ))
            ) : (
                <div className={styles.nullData}>Нет данных</div>
            )}
        </div>
    );
};

export default TaskBlock;