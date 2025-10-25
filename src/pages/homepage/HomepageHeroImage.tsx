import styles from "../../styles/HomepageHeroImage.module.css";
import image from "../../images/image-3.jpg";
import { Row } from "react-bootstrap";
import HomepageButtonLayout from "./HomepageButtonLayout";

// component to render homepage hero image section
const HomepageHeroImage = () => {
  return (
    <div className={styles.ImageContainer}>
      <img
        src={image}
        alt="Hughs big valleys bridge"
        className={styles.Image}
      />
      <div className={styles.Overlay}></div>
      <div className={styles.OverlayText}>
        <h1 className={styles.Header}>Advanced Formwork Solutions</h1>
        <p className={styles.ImageText}>
          Providing safe, efficient, reliable formworks and temporary solutions.
        </p>
        {/* import of custom buttons and layout for links */}
        <Row>
          <HomepageButtonLayout
            link="/services"
            btnTitle="View Services"
            btnStyle="LBlue"
          />
          <HomepageButtonLayout
            link="/contact"
            btnTitle="Get In Touch"
            btnStyle="DBlue"
          />
        </Row>
      </div>
    </div>
  );
};

export default HomepageHeroImage;
