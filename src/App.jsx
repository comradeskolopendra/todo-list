import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import { addTodo, deleteTodo, fetchFirestore } from "./asyncAction/todos";

import Modal from "./components/Modal/modal";
import styles from "./app.module.sass";
import { updateModalOpened } from "./redux/reducer/appReducer";

function App() {
  const dispatch = useDispatch();
  const { todos, isModalOpened } = useSelector((store) => store);

  const handlerOnSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const [input] = form.elements;

    await dispatch(addTodo({ isDone: false, label: input.value }));
    await dispatch(fetchFirestore());
    
    form.reset();
  };

  const handlerOnOpen = () => {
    dispatch(updateModalOpened(true));
  };

  const handlerOnClose = () => {
    dispatch(updateModalOpened(false));
  };

  const handlerOnDelete = (id) => {
    dispatch(deleteTodo(id));
  };

  useEffect(() => {
    dispatch(fetchFirestore());
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

      <button onClick={handlerOnOpen}>Добавить ещё одну заметку</button>

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
