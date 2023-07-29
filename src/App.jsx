import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { handlerOnShapshot } from "./asyncAction/todos";
import { addTodo, deleteTodo } from "./helpers/helpers";

import Modal from "./components/Modal/modal";
import styles from "./app.module.sass";
import { updateModalOpened } from "./redux/reducer/appReducer";

function App() {
  const dispatch = useDispatch();
  const { todos, isModalOpened } = useSelector((store) => store);

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

  const handlerOnDelete = (id) => {
    deleteTodo(id);
    dispatch(handlerOnShapshot());
  };

  useEffect(() => {
    dispatch(handlerOnShapshot());
  }, []);

  return (
    <>
      {todos.length !== 0 ? (
        todos.map((element) => (
          <div onClick={() => handlerOnDelete(element.id)} key={element.id}>
            {element.data().label}
          </div>
        ))
      ) : (
        <div>Нет данных</div>
      )}

      <button className={styles.button} onClick={handlerOnOpen}>Добавить ещё одну заметку</button>

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
