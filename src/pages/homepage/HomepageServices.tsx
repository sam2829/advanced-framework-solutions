import { Col, Row } from "react-bootstrap";
import styles from "../../styles/HomepageServices.module.css";

import { homepageData } from "./HomepageServicesData";

// component to map over the different services displayed on homepage
const HomepageServices = () => {
  return (
    <Row>
      {homepageData.map((data) => (
        <Col key={data.id} xs={12} lg={4} className="my-4">
          <h3 className={styles.Title}>{data.title}</h3>
          <img src={data.image} alt={data.alt} className={styles.Image} />
          <p className={styles.Description}>{data.description}</p>
        </Col>
      ))}
    </Row>
  );
};

export default HomepageServices;
