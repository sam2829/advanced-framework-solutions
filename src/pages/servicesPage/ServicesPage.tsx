import { Container } from "react-bootstrap";
import styles from "../../styles/ServicesPage.module.css";
import Services from "./Services";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";
import MainSectionDiv from "../../components/MainSectionDiv";

const ServicesPage = () => {
  return (
    <MainSectionDiv>
      <Container>
        <h1 className={styles.Header}>Our Services</h1>
        <p className={styles.Text}>
          At Advanced Formwork Solutions, we provide specialist engineering
          support across all stages of formwork and temporary works design. Our
          services include:
        </p>
        {/* import list of services */}
        <Services />
        <p className={styles.Text}>
          For any other temporary works requirements, we’re happy to discuss
          bespoke solutions tailored to your project. Please don’t hesitate to
          get in touch.
        </p>
        {/* import custom button */}
        <Link to="/contact">
          <div className="mb-5">
            <CustomButton title="Get In Touch" btnStyle="DBlue" />
          </div>
        </Link>
      </Container>
    </MainSectionDiv>
  );
};

export default ServicesPage;
