import styles from "../../styles/ServicesText.module.css";
import { Col } from "react-bootstrap";

interface ServiceTextProps {
  title: string;
  bulletPoints: Array<string>;
}

// component to render the text on services page
const ServicesText: React.FC<ServiceTextProps> = ({ title, bulletPoints }) => {
  return (
    <Col xs={12} lg={6}>
      <h3 className={styles.Title}>{title}</h3>
      <ul className={styles.List}>
        {bulletPoints.map((bullet, index) => (
          <li key={index} className={styles.BulletPoint}>
            {bullet}
          </li>
        ))}
      </ul>
    </Col>
  );
};

export default ServicesText;
