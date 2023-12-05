import {
  BaseButton,
  GoogleSignInButton,
  InvertedButton,
} from "./button.styles.jsx";

export const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  base: "base",
};

const getButton = (buttonType = BUTTON_TYPES_CLASSES.base) =>
  ({
    [BUTTON_TYPES_CLASSES.base]: BaseButton,
    [BUTTON_TYPES_CLASSES.inverted]: InvertedButton,
    [BUTTON_TYPES_CLASSES.google]: GoogleSignInButton,
  }[buttonType]);

export const Button = ({ children, buttonType , ...props }) => {
  const CustomButton = getButton(buttonType);
  return <CustomButton {...props}>{children}</CustomButton>;
};
