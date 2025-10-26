import { Container } from "react-bootstrap";
import styles from "../../styles/ServicesPage.module.css";
import Services from "./Services";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

const ServicesPage = () => {
  return (
    <main className={styles.MainContainer}>
      <Container>
        <h1 className={styles.Header}>Our Services</h1>
        <p className={styles.Text}>
          With over 10 years of experience in formwork and temporary works
          engineering. We have delivered major projects across the UK and
          Europe. Our focus is on precision, safety, and efficient solutions for
          complex structures.
        </p>
        {/* import list of services */}
        <Services />
        <p className={`${styles.Text} ${styles.TextBold}`}>
          Looking for reliable formwork solutions or expert temporary
          worksadvice? Contact us todayto discuss your project.
        </p>
        {/* import custom button */}
        <Link to="/contact">
          <div className="mb-5">
            <CustomButton title="Get In Touch" btnStyle="DBlue" />
          </div>
        </Link>
      </Container>
    </main>
  );
};

export default ServicesPage;
