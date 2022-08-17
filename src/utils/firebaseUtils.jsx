// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
} from "firebase/firestore";

import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBXFZLmJ47WuLBv_nQZBS8QpCoANpyHKMs",
  authDomain: "e-commerce-db-83785.firebaseapp.com",
  projectId: "e-commerce-db-83785",
  storageBucket: "e-commerce-db-83785.appspot.com",
  messagingSenderId: "742507019573",
  appId: "1:742507019573:web:9951dd902c510fd8c6a07c",
};

// Initialize Firebase
initializeApp(firebaseConfig);

// Initialize up provider instance
const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

// Instantiate database
export const db = getFirestore();

// --------------------- Helpers ---------------------
// Create new document in db
export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInfo = {}
) => {
  // check for valid auth token from sign in
  if (!userAuth) return;

  const { uid, displayName, email } = userAuth;

  // get doc ref from db using user id
  const userDocRef = doc(db, "users", uid);

  try {
    // check if user exists in db
    const userSnapshot = await getDoc(userDocRef);

    // add new user to db
    if (!userSnapshot.exists())
      createUser(userDocRef, displayName, email, additionalInfo);

    return userDocRef;
  } catch (err) {
    console.log("Error creating the user", err.message);
  }
};

// Create new user in db
const createUser = async (userDocRef, displayName, email, additionalInfo) => {
  const createdAt = new Date();

  await setDoc(userDocRef, {
    displayName,
    email,
    createdAt,
    ...additionalInfo,
  });
};

// authenticate new user with credentials
export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

// authenticate existing user with credentials
export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

// sign out current user
export const signOutUser = async () => await signOut(auth);

// auth token listener
export const onAuthStateChangedListener = (cb) => onAuthStateChanged(auth, cb);

// create new collection in db (categories)
// add documents to db (products)
export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  // create new collection ref
  const collectionRef = collection(db, collectionKey);

  // create batch instance
  const batch = writeBatch(db);

  // create documents using product titles from shop data
  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());

    batch.set(docRef, object);
  });

  // attempt to write data to db
  await batch.commit();
  console.log("done");
};
