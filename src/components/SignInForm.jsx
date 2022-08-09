import Button from "./Button";
import { signInWithGooglePopup, createUserDocumentFromAuth } from "../utils/firebaseUtils";

const SignInForm = () => {
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
      <Button onClick={signIn} buttonType="google">
        Sign in with Google
      </Button>
    </div>
  );
};

export default SignInForm;