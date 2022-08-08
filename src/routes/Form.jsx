import { useEffect } from "react";
import { getRedirectResult } from "firebase/auth";
import { auth, signInWithGooglePopup, signInWithGoogleRedirect, createUserDocument } from "../utils/firebaseUtils";


const Form = () => {
  const googleSignInPopup = async () => {
    try {
      const response = await signInWithGooglePopup();
      const userDocRef = await createUserDocument(response.user);
  
    } catch(err) {
      console.log('Error with sign in', err.message);
    };
  };
  
  const googleSignInRedirect = async () => {
    try {
      const response = await getRedirectResult(auth);
      console.log(response);
      
      const userDocRef = await createUserDocument(response.user);
    } catch(err) {
      console.log("Error with sign in", err.message);
    }
  }

  useEffect(() => {
    googleSignInRedirect();
  }, []);

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={googleSignInPopup}>
        Sign in with Google Popup
      </button>
      <button onClick={signInWithGoogleRedirect}>
        Sign in with Google Redirect
      </button>
    </div>
  );
};

export default Form;