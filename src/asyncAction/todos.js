import { setDataAction, setTodosIDs } from "../redux/reducer/appReducer";
import { initFirestore } from "../helpers/constants";
import { addDoc, getDocs, doc, deleteDoc } from "firebase/firestore";

const { firestoreRef, firestoreDB } = await initFirestore();

const fetchFirestore = () => {
  return async (dispatch) => {
    const firestoreSnap = await getDocs(firestoreRef);

    dispatch(setDataAction([...firestoreSnap.docs.map((element) => element)]));

    dispatch(setTodosIDs([...firestoreSnap.docs.map((element) => element.id)]));
  };
};

const addTodo = ({ isDone, label }) => {
  return async (dispatch) => {
    const firestoreSnap = await getDocs(firestoreRef);

    addDoc(firestoreRef, {
      isDone,
      label,
    }).then((docRef) => console.log(docRef.id));

    dispatch(setDataAction([...firestoreSnap.docs.map((element) => element)]));
  };
};

const deleteTodo = (id) => {
  return async (dispatch) => {
    const firestoreSnap = await getDocs(firestoreRef);

    deleteDoc(doc(firestoreDB, "todos", id)).then(() =>
      console.log("deleted doc")
    );

    dispatch(setDataAction([...firestoreSnap.docs.map((element) => element)]));
  };
};

export { fetchFirestore, addTodo, deleteTodo };
