import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from "../utils/firebaseUtils";

const SignInForm = () => {
  const initializeFields = {
    email: '',
    password: '',
  };
  
  const [formFields, setFormFields] = useState(initializeFields);
  const { email, password } = formFields;

  const resetForm = () => {
    setFormFields(initializeFields);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({...formFields, [name]: value});
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    try {
      await signInAuthUserWithEmailAndPassword(email, password);
      resetForm();
      
    } catch(err) {
      switch(err.code) {
        case 'auth/wrong-password':
          alert("Incorrect password for this account. Try again.");
          break;
        
        case 'auth/user-not-found':
          alert("No user associated with this email. Sign up instead.");
          break;
    
        default:
          console.log('Encountered an error with user sign in', err.message);
          break;
      };
    };
  };

  const signIn = async () => {
    try {
      const {user} = await signInWithGooglePopup();
      await createUserDocumentFromAuth(user);
  
    } catch(err) {
      console.log("Encountered an error with Google sign in", err.message);
    };
  };
  return (
    <div className="sign-up-container">
      <h2>Already have an account?</h2>
      <span>Sign in with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput 
          required 
          label="Email" 
          type="email" 
          name="email" 
          value={email} 
          onChange={onChangeHandler}
        />
        
        <FormInput 
          required 
          label="Password" 
          type="password" 
          name="password" 
          value={password} 
          onChange={onChangeHandler}
        />
        <div className="buttons-container">
          <Button type="submit">Sign In</Button>
          <Button type="button" onClick={signIn} buttonType="google">
            Google Sign In
          </Button>
        </div>
      </form>
    </div>

  );
};

export default SignInForm;