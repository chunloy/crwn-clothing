import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import "./Authenticate.scss"

const Authenticate = () => {
  return (
    <div className="authenticate-container">
      <SignInForm />
      <SignUpForm />
    </div>
  );
};

export default Authenticate;