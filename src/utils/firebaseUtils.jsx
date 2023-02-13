// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
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
  apiKey: "AIzaSyBz36yaVLawFWoOPB9JZzXxM_4DGR2weUs",
  authDomain: "crwn-clothing-db-d9fb4.firebaseapp.com",
  projectId: "crwn-clothing-db-d9fb4",
  storageBucket: "crwn-clothing-db-d9fb4.appspot.com",
  messagingSenderId: "459494360342",
  appId: "1:459494360342:web:816354f565943751cfbc37",
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

  // create temp doc ref from db using user id
  const userDocRef = doc(db, "users", uid);

  try {
    // check if user exists in collection
    const userSnapshot = await getDoc(userDocRef);

    // add new user to collection
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
// need to import this function into categories context along with data.js, call with useEffect
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
};

// fetch data from db
export const getCategoriesAndDocuments = async () => {
  // get collection reference from db
  const collectionRef = collection(db, "categories");

  // generate new query object
  const createQueryFromCollectionRef = query(collectionRef);

  // fetch documents from db
  const querySnapshot = await getDocs(createQueryFromCollectionRef);

  // map new categories object using data from snapshot
  const categoryMap = querySnapshot.docs.reduce((acc, docSnapshot) => {
    const { title, items } = docSnapshot.data();
    acc[title.toLowerCase()] = items;

    return acc;
  }, {});

  return categoryMap;
};
