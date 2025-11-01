import { Form, Row, Col } from "react-bootstrap";
import styles from "../styles/ContactForm.module.css";
import ContactFormInputFields from "./ContactFormInputFields";
import { useState } from "react";
import CustomButton from "./CustomButton";

// interface for emailData
interface emailData {
  name: string;
  companyName: string;
  emailAddress: string;
  telephoneNumber: string;
  subject: string;
  message: string;
}

// component to render contact form
const ContactForm = () => {
  // handle state for emailData
  const [emailData, setEmailData] = useState<emailData>({
    name: "",
    companyName: "",
    emailAddress: "",
    telephoneNumber: "",
    subject: "",
    message: "",
  });

  //   handle input field changes
  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;

    setEmailData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={styles.FormContainer}>
      <h3 className={styles.FormHeader}>Get In Touch</h3>
      {/* create form */}
      <Form>
        <Row>
          <Col xs={12} lg={6}>
            <ContactFormInputFields
              title="Name"
              name="name"
              type="text"
              onChange={handleChange}
              value={emailData.name}
              maxLength={50}
            />
          </Col>
          <Col xs={12} lg={6}>
            <ContactFormInputFields
              title="Company&nbsp;Name"
              name="companyName"
              type="text"
              onChange={handleChange}
              value={emailData.companyName}
              maxLength={100}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <ContactFormInputFields
              title="Email&nbsp;Address"
              name="emailAddress"
              type="email"
              onChange={handleChange}
              value={emailData.emailAddress}
            />
          </Col>
          <Col xs={12} lg={6}>
            <ContactFormInputFields
              title="Telephone&nbsp;Number"
              name="telephoneNumber"
              type="tel"
              onChange={handleChange}
              value={emailData.telephoneNumber}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12} lg={6}>
            <ContactFormInputFields
              title="Subject"
              name="subject"
              type="text"
              onChange={handleChange}
              value={emailData.subject}
              maxLength={100}
            />
          </Col>
        </Row>
        <Row>
          <Col xs={12}>
            <ContactFormInputFields
              title="Message"
              name="message"
              as="textarea"
              rows={5}
              onChange={handleChange}
              value={emailData.message}
              maxLength={1000}
            />
          </Col>
        </Row>
        {/* import custom button for submit */}
        <div className="mt-4">
          <CustomButton title="Send" btnStyle="LBlue" />
          <p className={styles.FormText}>
            Your details will only be used to respond to your enquiry and will
            not be stored or shared.
          </p>
        </div>
      </Form>
    </div>
  );
};

export default ContactForm;
