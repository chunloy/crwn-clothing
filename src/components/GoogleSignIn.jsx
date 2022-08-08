import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebaseUtils";

const GoogleSignIn = () => {
  const signIn = async () => {
    try {
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
  
    } catch(err) {
      console.log('Error with login', err.message);
    };
  };
  return (
    <div>
      <h1>Sign In Page</h1>
      <button onClick={signIn}>
        Sign in with Google
      </button>
    </div>
  );
};

export default GoogleSignIn;