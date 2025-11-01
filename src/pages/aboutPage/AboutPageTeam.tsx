import styles from "../../styles/AboutPageTeam.module.css";
import image from "../../images/hughImage.jpg";

// component to render meet the team section
const AboutPageTeam = () => {
  return (
    <div className={styles.TeamContainer}>
      <h3 className={styles.SubHeading}>Meet The Team</h3>
      <h5 className={styles.ImageText}>CEO & Managing Director</h5>
      <img
        className={styles.Image}
        src={image}
        alt="Hugh Llewellyn CEO & Managing Director"
      />
    </div>
  );
};

export default AboutPageTeam;
