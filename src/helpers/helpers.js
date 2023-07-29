import { doc, addDoc, deleteDoc } from "firebase/firestore";
import { initFirestore } from "./constants";

const { firestoreDB, firestoreRef } = initFirestore();

const deleteTodo = (id) => {
    deleteDoc(doc(firestoreDB, "todos", id))
};

const addTodo = ({ isDone, label }) => {
    addDoc(firestoreRef, {
        isDone,
        label,
    });
};

export { addTodo, deleteTodo }