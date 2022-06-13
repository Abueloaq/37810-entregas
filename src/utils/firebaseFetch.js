import { query, orderBy, where, collection, getDocs } from "firebase/firestore";
import { doc, getDoc } from "firebase/firestore";
import db from "./firebaseConfig";

export const firestoreFetch = async (categoryId) => {
    let q;
    if (categoryId) {
        q = query(collection(db, "products"), where('category', '==', categoryId));
    } else {
        q = query(collection(db, "products"), orderBy('name'));
    }
    const querySnapshot = await getDocs(q);
    const dataFromFirestore = querySnapshot.docs.map(document => ({
        id: document.id,
        ...document.data()
    }));
    return dataFromFirestore;
}

export const firestoreFetchSingle = async (itemId) => {
    const docRef = doc(db, "products", itemId);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return {
            id: itemId,
            ...docSnap.data()
        }
    } else {
        console.log("El producto no existe")
    }
}