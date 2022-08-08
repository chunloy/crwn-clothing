// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider
} from "firebase/auth";
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXFZLmJ47WuLBv_nQZBS8QpCoANpyHKMs",
  authDomain: "e-commerce-db-83785.firebaseapp.com",
  projectId: "e-commerce-db-83785",
  storageBucket: "e-commerce-db-83785.appspot.com",
  messagingSenderId: "742507019573",
  appId: "1:742507019573:web:9951dd902c510fd8c6a07c"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

// Initialize up provider instance
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account"
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Instantiate database
export const db = getFirestore();

// Create new document in db
export const createUserDocument = async (userAuth) => {
  const {uid, displayName, email} = userAuth;

  // get doc ref from db using user id
  const userDocRef = doc(db, 'users', uid);

  console.log(userDocRef);
  try {
    const userSnapshot = await getDoc(userDocRef);

    // add new user to db
    if(!userSnapshot.exists()) createUser(userDocRef, displayName, email);
    
    return userDocRef;

  } catch(err) {
    console.log('Error creating user document reference', err);
  };
};

// Create new user in db
const createUser = async (userDocRef, displayName, email) => {
  const createdAt = new Date();
  try {
    await setDoc(userDocRef, {
      displayName,
      email,
      createdAt,
    })
  } catch(err) {
    console.log('Error creating user', err.message);
  };
};