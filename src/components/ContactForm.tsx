import { Form, Row, Col, Spinner } from "react-bootstrap";
import styles from "../styles/ContactForm.module.css";
import ContactFormInputFields from "./ContactFormInputFields";
import { useState } from "react";
import CustomButton from "./CustomButton";
import { sendEmail, type EmailParams } from "../emailService/EmailJSService";
import { useAlert } from "./AlertMessage";
import AlertMessage from "./AlertMessage";

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

  // handle state for sending form
  const [isSending, setIsSending] = useState(false);

  // to show alert message
  const { alert, showAlert, hideAlert } = useAlert();

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

  // handle form submission
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // contact form validation
    // trimmed all values for white space
    const trimmedData = Object.fromEntries(
      Object.entries(emailData).map(([Key, value]) => [Key, value.trim()])
    ) as emailData;

    if (Object.values(trimmedData).some((val) => val === "")) {
      showAlert(
        "warning",
        "Please fill out all fields before submitting your enquiry."
      );
      return;
    }

    // Telephone validation
    const phoneRegex = /^[+]?\d{7,15}$/; // allows +44, etc., 7–15 digits
    if (!phoneRegex.test(trimmedData.telephoneNumber)) {
      showAlert(
        "warning",
        "Please enter a valid telephone number using digits only."
      );
      return;
    }

    setIsSending(true);

    // put email data into email js format
    const emailJSFormat: EmailParams = {
      from_name: emailData.name,
      company_name: emailData.companyName,
      from_email: emailData.emailAddress,
      telephone_number: emailData.telephoneNumber,
      subject: emailData.subject,
      message: emailData.message,
    };

    try {
      await sendEmail(emailJSFormat);
      showAlert(
        "success",
        "Thank you — your enquiry has been sent. We’ll be in touch as soon as possible."
      );
      setEmailData({
        name: "",
        companyName: "",
        emailAddress: "",
        telephoneNumber: "",
        subject: "",
        message: "",
      });
    } catch {
      showAlert(
        "danger",
        "There was an error sending your enquiry. Please try again."
      );
    } finally {
      setIsSending(false);
    }
  };

  return (
    <>
      {/** Display the show alert message */}
      {alert && (
        <AlertMessage
          variant={alert.variant}
          message={alert.message}
          onClose={hideAlert}
        />
      )}
      <div className={styles.FormContainer}>
        <h3 className={styles.FormHeader}>Get In Touch</h3>
        {/* create form */}
        <Form onSubmit={handleSubmit}>
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
          <div className="mt-4 py-3">
            {/* button for submitting form */}
            {!isSending && (
              <>
                <CustomButton title="Send" btnStyle="LBlue" type="submit" />
              </>
            )}
            {/* spinner for when form is trying to send */}
            {isSending && (
              <Spinner className={styles.Spinner} animation="grow" />
            )}

            <p className={styles.FormText}>
              Your details will only be used to respond to your enquiry and will
              not be stored or shared.
            </p>
          </div>
        </Form>
      </div>
    </>
  );
};

export default ContactForm;
