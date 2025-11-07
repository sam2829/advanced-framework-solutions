import { Col, Container, Row } from "react-bootstrap";
import styles from "../../styles/ContactPage.module.css";
import ContactForm from "../../components/ContactForm";
import MainSectionDiv from "../../components/MainSectionDiv";

// component to render contact page
const ContactPage = () => {
  return (
    // import Main div
    <MainSectionDiv>
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
        {/* additional text underneath form */}
        <p className={styles.Text}>
          You can also get in touch with us directly using the details below.
        </p>
        {/* icons for phone number and email */}
        <Row>
          <Col xs={12} lg={6}>
            <p className={styles.ContactInfo}>
              <i className="fa-solid fa-phone"></i> Telephone Number:
              07809265874
            </p>
          </Col>
          <Col xs={12} lg={6}>
            <p className={styles.ContactInfo}>
              <i className="fa-solid fa-envelope"></i> Email:
              Info@advancedformworksolutions.com
            </p>
          </Col>
        </Row>
        <p className={styles.Text}>We will respond as quickly as possible.</p>
      </Container>
    </MainSectionDiv>
  );
};

export default ContactPage;
