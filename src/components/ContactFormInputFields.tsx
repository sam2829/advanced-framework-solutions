import styles from "../styles/ContactFormInputFields.module.css";
import { Form } from "react-bootstrap";

// interface for props
interface ContactFormInputFieldsProps {
  title: string;
  name: string;
  type?: "text" | "email" | "tel";
  as?: "input" | "textarea";
  value?: string | number;
  onChange?: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  rows?: number;
  min?: number;
  maxLength?: number;
}

// component to render contact form input fields
const ContactFormInputFields: React.FC<ContactFormInputFieldsProps> = ({
  title,
  name,
  type = "text",
  as = "input",
  value,
  onChange,
  rows,
  min,
  maxLength,
}) => {
  return (
    <>
      <Form.Label className={styles.FormLabel}>{title}</Form.Label>
      <Form.Control
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        as={as}
        min={min}
        maxLength={maxLength}
        required
        className={styles.FormInput}
        {...(as === "textarea" ? { rows } : {})}
      />
    </>
  );
};

export default ContactFormInputFields;
