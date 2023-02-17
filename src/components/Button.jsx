import { DefaultButton, GoogleButton, InvertedButton } from "./ButtonStyles";

export const BUTTON_CLASSES = {
  default: "default",
  google: "google",
  inverted: "inverted",
};

const buttonMap = {
  [BUTTON_CLASSES.default]: DefaultButton,
  [BUTTON_CLASSES.google]: GoogleButton,
  [BUTTON_CLASSES.inverted]: InvertedButton,
};

const getButton = (buttonType = BUTTON_CLASSES.default) =>
  buttonMap[buttonType];

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...otherProps}>{children}</CustomButton>;
};

export default Button;
