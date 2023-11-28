import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
  button: "",
};

export const Button = ({ children, buttonType = "button", ...props }) => {
  console.log(buttonType);
  return (
    <button
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      {...props}
    >
      {children}
    </button>
  );
};
