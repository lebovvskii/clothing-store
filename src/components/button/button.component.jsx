import "./button.styles.scss";

const BUTTON_TYPES_CLASSES = {
  google: "google-sign-in",
  inverted: "inverted",
};

export const Button = ({ children, buttonType, ...props }) => {
  return (
    <button
      type={props.type}
      className={`button-container ${BUTTON_TYPES_CLASSES[buttonType]}`}
      onClick={props.onClick}
    >
      {children}
    </button>
  );
};
