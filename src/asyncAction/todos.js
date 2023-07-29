import { setDataAction, setTodosIDs, addTodoID, deleteTodoID } from "../redux/reducer/appReducer";
import { initFirestore } from "../helpers/constants";
import { onSnapshot } from "firebase/firestore";

const { firestoreRef } = initFirestore();

const handlerOnShapshot = () => {
  return (dispatch) => {
    onSnapshot(firestoreRef, (currentSnapshot) => {
      dispatch(setDataAction([...currentSnapshot.docs.map(element => element)]));
      dispatch(setTodosIDs([...currentSnapshot.docs.map(element => element.id)]))
    })
  }
};


export { handlerOnShapshot };
