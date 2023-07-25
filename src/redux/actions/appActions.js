import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import { setData } from "../reducer/appReducer";
import { FIREBASE_CONFIG } from "../../constants/constants";


const initFirebase = () => async (dispatch) => {
    const firebaseApp = initializeApp(FIREBASE_CONFIG);
    const firestoreDB = getFirestore(firebaseApp);
    const firestoreRef = collection(firestoreDB, "todos");
    const firestoreSnap = await getDocs(firestoreRef);
    const data = [...firestoreSnap.docs.map(element => element.data())];

    dispatch(setData(data))
};

export {
    initFirebase
}