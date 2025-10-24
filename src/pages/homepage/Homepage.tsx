import styles from "../../styles/Homepage.module.css";

import image from "../../images/image-3.jpg";

const Homepage = () => {
  return (
    <div className={styles.ImageContainer}>
      <img
        src={image}
        alt="Hughs big valleys bridge"
        className={styles.Image}
      />
      <div className={styles.Overlay}></div>
      <div className={styles.OverlayText}>
        <h1>Hugh's Big Super Special Job & Website</h1>
      </div>
    </div>
  );
};

export default Homepage;
