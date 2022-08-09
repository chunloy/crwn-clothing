import { useState } from "react";
import FormInput from "./FormInput";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebaseUtils";

const EmailSignIn = () => {
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
      console.log('Encountered an error creating user', err.message);
    };
  };

  return (
    <div>
      <h1>Sign up with your email and password</h1>
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

        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default EmailSignIn;