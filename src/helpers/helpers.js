import { doc, addDoc, deleteDoc, updateDoc } from "firebase/firestore";
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

const updateTodo = async (label, isDone, id) => {
    const documentRef = doc(firestoreDB, "todos", id);
    await updateDoc(documentRef, { label, isDone }).then(() => console.log("updated"));
}

export { addTodo, deleteTodo, updateTodo }