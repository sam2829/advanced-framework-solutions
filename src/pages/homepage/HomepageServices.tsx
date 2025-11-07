import { Col, Row } from "react-bootstrap";
import styles from "../../styles/HomepageServices.module.css";

import { homepageData } from "./HomepageServicesData";

// component to map over the different services displayed on homepage
const HomepageServices = () => {
  return (
    <Row>
      {homepageData.map((data) => (
        <Col key={data.id} xs={12} className="my-4">
          <h3 className={styles.Title}>{data.title}</h3>
        </Col>
      ))}
    </Row>
  );
};

export default HomepageServices;
