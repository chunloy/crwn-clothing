import { useState, useContext } from "react";
import FormInput from "./FormInput";
import Button from "./Button";
import { UserContext } from "../contexts/User";
import { createAuthUserWithEmailAndPassword, createUserDocumentFromAuth } from "../utils/firebaseUtils";
import "./SignUpForm.scss";

const SignUpForm = () => {
  const initializeFields = {
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const { setCurrentUser } = useContext(UserContext);

  const [formFields, setFormFields] = useState(initializeFields);
  const { displayName, email, password, confirmPassword } = formFields;

  const resetForm = () => {
    setFormFields(initializeFields);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;

    setFormFields({...formFields, [name]: value});
  };

  // authenticate new user with credentials
  const onSubmitHandler = async (e) => {
    e.preventDefault();

    // check for password match 
    if(password !== confirmPassword) return alert(`Passwords don't match!`);

    try {
      const { user } = await createAuthUserWithEmailAndPassword(email, password);
      
      setCurrentUser(user);
      await createUserDocumentFromAuth(user, { displayName });
      resetForm();
      
    } catch(err) {
      switch(err.code) {
        case 'auth/email-already-in-use':
          alert("There's already an account associated with this email address. Sign in instead.")
          break;

        default: 
          console.log('Encountered an error creating user', err.message);
          break;
      };
    };
  };

  const inputAttributes = [
    {
      required: true,
      label: "Display Name",
      type: "text",
      name: "displayName",
      value: displayName,
      onChange: onChangeHandler,
    },
    {
      required: true,
      label: "Email",
      type: "email",
      name: "email",
      value: email,
      onChange: onChangeHandler,
    },
    {
      required: true,
      label: "Password",
      type: "password",
      name: "password",
      value: password,
      onChange: onChangeHandler,
    },
    {
      required: true,
      label: "Confirm Password",
      type: "password",
      name: "confirmPassword",
      value: confirmPassword,
      onChange: onChangeHandler,
    },
  ];

  const inputForms = inputAttributes.map((a, index) => <FormInput key={index} {...a}/>);

  return (
    <div className="sign-up-container">
      <h2>Don't have an account?</h2>
      <span>Sign up with your email and password</span>
      <form onSubmit={onSubmitHandler}>
        {inputForms}

        <Button type="submit">Sign Up</Button>
      </form>
    </div>
  );
};

export default SignUpForm;