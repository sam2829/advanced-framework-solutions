import { Container, Row } from "react-bootstrap";
import styles from "../../styles/AboutPage.module.css";
import AboutPageCompanies from "./AboutPageCompanies";
import AboutPageTeam from "./AboutPageTeam";
import HomepageButtonLayout from "../homepage/HomepageButtonLayout";

const AboutPage = () => {
  return (
    <main className={styles.MainContainer}>
      <Container>
        <h1 className={styles.Header}>About Us</h1>
        <p className={styles.Text}>
          With over 10 years of experience in formwork and temporary works, we
          have developed a comprehensive understanding of the industry, covering
          everything from structural design and planning to on site execution
          and quality assurance. Our projects have supported some of the most
          prominant names in construction, spanning complex builds across the UK
          and Europe. By combining technical precisionwith practical expertise,
          we deliver innovative, safe, and relative solutions tailored to the
          demands of each project.
        </p>
        {/* import Companies worked for section */}
        <AboutPageCompanies />
        {/* import meet the team section */}
        <AboutPageTeam />
        {/* additional text underneath team section */}
        <p className={styles.Text}>
          With specialist expertise built over more than a decade in the
          industry, our focus is always on delivering practical, innovative, and
          reliable solutions that help projects succeed. We'd be delighted to
          bring this approach to your next development - please explore our full
          range of services or get in touch to discuss how we can support you.
        </p>
        <p className={styles.Text}>
          Your project, our expertise - lets make it a success.
        </p>
        {/* import custom buttons and layout */}
        <Row className={`my-4 ${styles.ButtonContainer}`}>
          <HomepageButtonLayout
            link="/contact"
            btnTitle="Get In Touch"
            btnStyle="DBlue"
          />
          <HomepageButtonLayout
            link="/services"
            btnTitle="View Services"
            btnStyle="LBlue"
          />
        </Row>
      </Container>
    </main>
  );
};

export default AboutPage;
