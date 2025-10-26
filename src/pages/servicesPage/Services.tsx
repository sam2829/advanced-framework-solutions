import styles from "../../styles/Services.module.css";
import { Row, Col } from "react-bootstrap";
import { ServicesData } from "./ServicesPageData";
import ServicesText from "./ServicesText";
import ServicesImage from "./ServicesImage";

// component to render the different services offered
const Services = () => {
  return (
    <>
      {ServicesData.map((data) => (
        <div key={data.id}>
          <Row
            className={`${styles.ServicesContainer} ${
              data.id % 2 !== 0 && styles.Border
            }`}
          >
            {/* work out if data id is odd or even so data is switched */}
            {data.id % 2 !== 0 ? (
              // image is on right hand side
              <>
                {/* text column */}
                <ServicesText
                  title={data.title}
                  bulletPoints={data.bulletPoints}
                />
                {/* image column */}
                <Col>
                  <ServicesImage image={data.image} alt={data.alt} />
                </Col>
              </>
            ) : (
              // image is on left hand side
              <>
                {/* image column */}
                {/* image only displayed in large screens */}
                <Col xs={12} lg={6} className="d-none d-lg-block">
                  <ServicesImage image={data.image} alt={data.alt} />
                </Col>

                {/* text column */}
                <ServicesText
                  title={data.title}
                  bulletPoints={data.bulletPoints}
                />
                {/* image only displayed in small screens */}
                <Col xs={12} lg={6} className="d-block d-lg-none">
                  <ServicesImage image={data.image} alt={data.alt} />
                </Col>
              </>
            )}
          </Row>
        </div>
      ))}
    </>
  );
};

export default Services;
