import { useState } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebaseUtils";
import "./SignUpForm.scss";

const SignUpForm = () => {
  const initializeFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const [formFields, setFormFields] = useState(initializeFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(initializeFields);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({...formFields, [name]: value});
  };

  const onSubmitHandler = async (e) => {
    e.preventDefault();

    if(password !== confirmPassword) return alert(`Passwords don't match!`);

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
      
    } catch(err) {
      switch(err.code) {
        case 'auth/email-already-in-use':
          alert("There's already an account associated with this email addrress. Sign in instead.")
          break;

        default: 
          console.log('Encountered an error creating user', err.message);
          break;
      };
    };
  };

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        <FormInput 
          required 
          label="Display Name" 
          type="text" 
          name="displayName" 
          value={displayName} 
          onChange={onChangeHandler}
        />
        
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
        
        <FormInput 
          required 
          label="Confirm Password" 
          type="password" 
          name="confirmPassword" 
          value={confirmPassword} 
          onChange={onChangeHandler}
        />

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;