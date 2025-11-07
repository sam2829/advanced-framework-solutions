import { Button } from "react-bootstrap";
import styles from "../styles/CustomButton.module.css";

// Custom button component props
interface CustomButtonProps {
  title: string;
  btnStyle: "LBlue" | "DBlue";
  type?: "submit";
  size?: "large";
}

// component to render custom button
const CustomButton: React.FC<CustomButtonProps> = ({
  title,
  btnStyle,
  type,
  size,
}) => {
  return (
    <Button
      type={type}
      className={`${styles.Button} ${
        size === "large"
          ? `${styles[btnStyle]} ${styles.btnLG}`
          : styles[btnStyle]
      }`}
    >
      {title}
    </Button>
  );
};

export default CustomButton;
