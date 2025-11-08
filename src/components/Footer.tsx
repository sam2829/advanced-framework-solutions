import { Col, Container, Row } from "react-bootstrap";
import styles from "../styles/Footer.module.css";
import { Link } from "react-router-dom";

import logo from "../logo/hugh-logo.png";

// component to render footer
const Footer = () => {
  return (
    <footer className={styles.Footer}>
      <Container>
        <Row>
          {/* contact details */}
          <Col xs={12} lg={5}>
            <h5 className={styles.Heading}>Contact Details</h5>
            <Row>
              <Col xs={12}>
                <p className={styles.Text}>Telephone Number: 07809265874</p>
                <p className={styles.Text}>
                  Emal: Info@advancedformworksolutions.com
                </p>
              </Col>
            </Row>
          </Col>
          {/* company logo */}
          <Col xs={12} lg={2}>
            <img src={logo} alt="company logo" className={styles.Logo} />
          </Col>
          {/* Site links */}
          <Col lg={5}>
            <h5 className={styles.Heading}>More Info</h5>
            <div className={styles.FooterLinkContainer}>
              <Link to="/" className={styles.FooterLink}>
                Home
              </Link>
              <Link to="/about" className={styles.FooterLink}>
                About
              </Link>
              <Link to="/services" className={styles.FooterLink}>
                Services
              </Link>
              <Link to="/contact" className={styles.FooterLink}>
                Contact Us
              </Link>
            </div>
          </Col>
          {/* social icons */}
          <Col>
            <Row className={`${styles.IconContainer} justify-content-center`}>
              <Col xs={2} className={styles.Icon}>
                <a
                  href="mailto: Info@advancedformworksolutions.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-solid fa-envelope"></i>
                </a>
              </Col>
              <Col xs={2} className={styles.Icon}>
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-facebook-f"></i>
                </a>
              </Col>
              <Col xs={2} className={styles.Icon}>
                <a
                  href="https://www.linkedin.com "
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
