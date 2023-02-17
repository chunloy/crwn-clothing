import SignInForm from "../components/SignInForm";
import SignUpForm from "../components/SignUpForm";
import { AuthenticateContainer } from "./AuthenticateStyles";

const Authenticate = () => {
  return (
    <AuthenticateContainer>
      <SignInForm />
      <SignUpForm />
    </AuthenticateContainer>
  );
};

export default Authenticate;
