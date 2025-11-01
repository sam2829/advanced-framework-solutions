import { Container } from "react-bootstrap";
import styles from "../../styles/ContactPage.module.css";
import ContactForm from "../../components/ContactForm";

const ContactPage = () => {
  return (
    <main className={styles.MainContainer}>
      <Container>
        <h1 className={styles.Header}>Contact Us</h1>
        <p className={styles.Text}>
          At AFS, we take pride in delivering customer satisfaction on every
          project. No job is too big or too small, and we value the opportunity
          to support each client's needs. Please feel free to reach out with any
          enquiry, concerns, or upcoming projects - we'd be happy to help.
        </p>
        {/*import contact form  */}
        <ContactForm />
      </Container>
    </main>
  );
};

export default ContactPage;
