import { Container } from "react-bootstrap";
import styles from "../../styles/Homepage.module.css";
import HomepageHeroImage from "./HomepageHeroImage";

// component to render homepage
const Homepage = () => {
  return (
    <>
      {/* import hero image section */}
      <HomepageHeroImage />
      {/* main section */}
      <main>
        <Container>
          <h2 className={styles.SubHeading}>Services</h2>
          <p className={styles.Text}>
            With years of experience in concrete and structural framework, we
            provide safe, efficient, and cost-effective solutions for buildings,
            bridges, and large-scale infastructure projects. We work closely
            with architects, contractors, and clients to ensure each design is
            delivered with precision and reliability.
          </p>
          <p className={styles.Text}>
            My Services include full structural formwork design, load and stress
            calculations, and project consulting tailored to your specific
            needs.
          </p>
        </Container>
      </main>
    </>
  );
};

export default Homepage;
