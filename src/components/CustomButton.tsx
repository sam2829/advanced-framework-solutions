import { Button } from "react-bootstrap";
import styles from "../styles/CustomButton.module.css";

// Custom button component props
interface CustomButtonProps {
  title: string;
  btnStyle: "LBlue" | "DBlue";
}

// component to render custom button
const CustomButton: React.FC<CustomButtonProps> = ({ title, btnStyle }) => {
  return (
    <Button className={`${styles.Button} ${styles[btnStyle]}`}>{title}</Button>
  );
};

export default CustomButton;
