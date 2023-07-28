import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const FIREBASE_CONFIG = {
  apiKey: "AIzaSyBC1qO24AvyapbQ5djmrRgBdeHakpWB9mM",
  authDomain: "todo-list-7b445.firebaseapp.com",
  projectId: "todo-list-7b445",
  storageBucket: "todo-list-7b445.appspot.com",
  messagingSenderId: "511929775418",
  appId: "1:511929775418:web:7709200318c365b58c8c03",
};

const initFirestore = () => {
  const firebaseApp = initializeApp(FIREBASE_CONFIG);
  const firestoreDB = getFirestore(firebaseApp);
  const firestoreRef = collection(firestoreDB, "todos");

  return {firebaseApp, firestoreDB, firestoreRef}
};

export {
  FIREBASE_CONFIG,
  initFirestore
};
