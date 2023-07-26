import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from "firebase/firestore";

import { FIREBASE_CONFIG } from "../helpers/constants";
import { setDataAction } from "../redux/reducer/appReducer";

const fetchFirebase = () => async (dispatch) => {
    const firebaseApp = initializeApp(FIREBASE_CONFIG);
    const firestoreDB = getFirestore(firebaseApp);

    const firestoreRef = collection(firestoreDB, "todos");
    const firestoreSnap = await getDocs(firestoreRef);

    const data = [...firestoreSnap.docs.map(element => element.data())];

    dispatch(setDataAction(data))
}

export {
    fetchFirebase
}