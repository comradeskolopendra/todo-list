import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handlerOnShapshot } from "./asyncAction/todos";
import { addTodo } from "./helpers/helpers";

import Modal from "./components/Modal/modal";
import TaskBlock from "./components/TaskBlock/taskBlock";
import styles from "./app.module.sass";
import { updateModalOpened } from "./redux/reducer/appReducer";

function App() {
  const dispatch = useDispatch();
  const { isModalOpened } = useSelector((store) => store);

  const handlerOnSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const { input } = form.elements;

    addTodo({ isDone: false, label: input.value });
    dispatch(handlerOnShapshot());

    form.reset();
  };

  const handlerOnOpen = () => {
    dispatch(updateModalOpened(true));
  };

  const handlerOnClose = () => {
    dispatch(updateModalOpened(false));
  };

  useEffect(() => {
    dispatch(handlerOnShapshot());
  }, []);

  return (
    <>
      <div className={styles.blockWrapper}>
        <TaskBlock />
        <button className={styles.button} onClick={handlerOnOpen}>Добавить ещё одну заметку</button>
      </div>

      {isModalOpened ? (
        <Modal
          handlerOnClose={handlerOnClose}
          handlerOnSubmit={handlerOnSubmit}
        />
      ) : (
        ""
      )}
    </>
  );
}

export default App;
