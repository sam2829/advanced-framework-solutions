import { Row, Col } from "react-bootstrap";
import { ServicesData } from "./ServicesPageData";
import ServicesText from "./ServicesText";

// component to map over services
const Services = () => {
  return (
    <Row>
      {ServicesData.map((data) => (
        <Col key={data.id} xs={12} lg={6} className="mb-4">
          <ServicesText title={data.title} description={data.description} />
        </Col>
      ))}
    </Row>
  );
};

export default Services;
