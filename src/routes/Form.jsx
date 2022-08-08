import { signInWithGooglePopup, createUserDocument } from "../utils/firebaseUtils";


const Form = () => {
  const googleSignIn = async () => {
    try {
      const response = await signInWithGooglePopup();
      const userDocRef = await createUserDocument(response.user);
  
    } catch(err) {
      console.log('Error with login', err.message);
    };
  };

  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={googleSignIn}>
        Sign in with Google
      </button>
    </div>
  );
};

export default Form;