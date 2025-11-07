import { Container, Row } from "react-bootstrap";
import styles from "../../styles/AboutPage.module.css";
import HomepageButtonLayout from "../homepage/HomepageButtonLayout";
import MainSectionDiv from "../../components/MainSectionDiv";
import SubHeading from "../../components/SubHeading";
import PageTitle from "../../components/PageTitle";

// component to render about page
const AboutPage = () => {
  return (
    <>
      {/* import page title */}
      <PageTitle title="About Us" />
      {/* import main section div */}
      <MainSectionDiv>
        <Container className="pt-5">
          <p className={styles.Text}>
            Advanced Formwork Solutions (AFS) is a specialist engineering
            consultancy providing expert design services in formwork and
            temporary works. With deep-rooted experience across all building
            sectors, we deliver technically precise solutions grounded in
            real-world site conditions and commercial realities.
          </p>
          <p className={styles.Text}>
            We partner with contractors to offer fast, dependable, and buildable
            designs — from early-stage concepts to fully detailed temporary
            works packages. Our approach is always tailored to our clients’
            needs, ensuring practical outcomes that support project success.
          </p>
          <p className={styles.Text}>
            Whether responding to urgent design requirements or contributing as
            a collaborative project partner, AFS brings the expertise,
            professionalism, and customer focus needed to meet the demands of
            modern construction.
          </p>
          {/* import sub heading */}
          <SubHeading title="Why Choose Us" />
          {/* reasons for choosing us */}
          <p className={styles.Text}>
            At Advanced Formwork Solutions, we understand the pressures of
            delivering safe, buildable designs on time. Here’s why contractors,
            designers, and developers trust us:
          </p>
          <h5 className={`${styles.SmallHeading} ${styles.Text}`}>
            Specialist Expertise
          </h5>
          <p className={styles.Text}>
            Deep knowledge of formwork and temporary works across all building
            sectors — with solutions tailored to real-world site conditions.
          </p>
          <h5 className={`${styles.SmallHeading} ${styles.Text}`}>
            Responsive & Reliable
          </h5>
          <p className={styles.Text}>
            Fast turnaround on urgent design needs, backed by clear
            communication and dependable service.
          </p>
          <h5 className={`${styles.SmallHeading} ${styles.Text}`}>
            Buildable, Practical Designs
          </h5>
          <p className={styles.Text}>
            We focus on constructability, safety, and efficiency — helping teams
            deliver with confidence.
          </p>
          <h5 className={`${styles.SmallHeading} ${styles.Text}`}>
            Professional Documentation
          </h5>
          <p className={styles.Text}>
            Clear, polished drawings and calculations that meet industry
            standards and make approvals smoother.
          </p>
          <h5 className={`${styles.SmallHeading} ${styles.Text}`}>
            Client-Focused Approach
          </h5>
          <p className={styles.Text}>
            We listen, adapt, and collaborate — building long-term relationships
            through trust and consistency.
          </p>
          {/* import customer buttons */}
          <Row className={`my-4 ${styles.ButtonContainer}`}>
            <HomepageButtonLayout
              link="/contact"
              btnTitle="Get In Touch"
              btnStyle="DBlue"
            />
            <HomepageButtonLayout
              link="/services"
              btnTitle="View Services"
              btnStyle="LBlue"
            />
          </Row>
        </Container>
      </MainSectionDiv>
    </>
  );
};

export default AboutPage;
