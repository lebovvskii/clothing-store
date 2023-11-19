import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCOZZNQOBFCRN5YxR3bPHeR5bjldjiR0_w",
  authDomain: "clothing-store-db-7bca4.firebaseapp.com",
  projectId: "clothing-store-db-7bca4",
  storageBucket: "clothing-store-db-7bca4.appspot.com",
  messagingSenderId: "133234032977",
  appId: "1:133234032977:web:aabc03aba896db25855370",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

//Initialize Provider
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const db = getFirestore();

export const createUserDocumentFromAuth = async (userAuth) => {
  const userDocRef = doc(db, "user", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { dispayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        dispayName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("error creating the user", error.message);
    }
  }

  return userDocRef;    
};
