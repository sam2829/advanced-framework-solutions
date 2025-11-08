import { useState, useEffect } from "react";
import Alert from "react-bootstrap/Alert";
import styles from "../styles/AlertMessage.module.css";

// props for alert message
interface AlertMessageProps {
  variant: "success" | "warning" | "danger";
  message: string;
  onClose?: () => void;
}

// functional component for displaying alert messages
const AlertMessage: React.FC<AlertMessageProps> = ({
  variant,
  message,
  onClose,
}) => {
  const [show, setShow] = useState(true);

  const handleClose = () => {
    setShow(false);
    if (onClose) onClose();
  };

  useEffect(() => {
    if (message) {
      setShow(true);
      const timer = setTimeout(() => {
        setShow(false);
        if (onClose) onClose();
      }, 5000);

      return () => clearTimeout(timer);
    }
  }, [message, onClose]);

  return (
    <>
      {show && (
        <Alert
          className={`${styles.Alert} ${
            variant === "success" ? styles.SuccessAlert : ""
          }`}
          variant={variant}
          onClose={handleClose}
          dismissible
        >
          {message}
        </Alert>
      )}
    </>
  );
};

// type for alert state
interface AlertState {
  variant: "success" | "warning" | "danger";
  message: string;
}

// custom hook for managing alert state and action
export const useAlert = () => {
  const [alert, setAlert] = useState<AlertState | null>(null);

  const showAlert = (variant: AlertState["variant"], message: string) => {
    setAlert({ variant, message });
  };

  const hideAlert = () => {
    setAlert(null);
  };

  return { alert, showAlert, hideAlert };
};

export default AlertMessage;
