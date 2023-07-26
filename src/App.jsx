import { useSelector, useDispatch } from "react-redux";

import { fetchFirebase } from "./asyncAction/todos";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  const { todos } = useSelector((store) => store.appReducer);

  useEffect(() => {
    dispatch(fetchFirebase());
  }, [])

  return (
    <>
      {todos.length !== 0 ? todos.map(element => (<div key={element.label}>{element.label}</div>)) : <div>Нет данных</div>}
    </>
  );
}

export default App;
