import { Container, Row } from "react-bootstrap";
import styles from "../../styles/Homepage.module.css";

import HomepageServices from "./HomepageServices";
import MainSectionDiv from "../../components/MainSectionDiv";
import SubHeading from "../../components/SubHeading";
import CustomButton from "../../components/CustomButton";
import { Link } from "react-router-dom";

// component to render homepage
const Homepage = () => {
  return (
    <>
      {/* Import main section */}
      <MainSectionDiv>
        <Container>
          {/* import sub heading */}
          {/* about us section on homepage */}
          <SubHeading title="About Us" />
          <p className={styles.Text}>
            Advanced Formwork Solutions is a specialist engineering consultancy
            providing expert design services in formwork and temporary works.
            With deep-rooted experience across all building sectors, we deliver
            technically precise solutions grounded in real-world site conditions
            and commercial realities.
          </p>
          <p className={styles.Text}>
            We partner with contractors to offer fast, dependable, and buildable
            designs — from early-stage concepts to fully detailed temporary
            works packages. Our approach is always tailored to our clients’
            needs, ensuring practical outcomes that support project success.
          </p>
          {/* import custom button */}
          <Row className="mt-4">
            <Link to="/about">
              <CustomButton
                title="More About Us"
                btnStyle="LBlue"
                size="large"
              />
            </Link>
          </Row>
          {/* services example section */}
          <SubHeading title="Services" />
          <p className={styles.Text}>
            At Advanced Formwork Solutions, we provide specialist engineering
            support across all stages of formwork and temporary works design.
            Our services include:
          </p>
          <HomepageServices />
          <p className={`${styles.Text} ${styles.TextBold}`}>
            Discover our full range of services or get in touch.
          </p>
          {/* import custom button */}
          <Row className={`my-4 ${styles.ButtonContainer}`}>
            <Link to="/services">
              <CustomButton
                title="More About Our Services"
                btnStyle="DBlue"
                size="large"
              />
            </Link>
          </Row>
        </Container>
      </MainSectionDiv>
    </>
  );
};

export default Homepage;
