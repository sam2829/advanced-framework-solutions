import styles from "../../styles/NotFoundPage.module.css";
import PageTitle from "../../components/PageTitle";
import MainSectionDiv from "../../components/MainSectionDiv";
import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import CustomButton from "../../components/CustomButton";

// component to render error page
const NotFoundPage = () => {
  return (
    <>
      {/* import page title */}
      <PageTitle title="Page Not Found" />
      {/* import main section div */}
      <MainSectionDiv>
        <Container className={styles.Container}>
          <p className={styles.Text}>
            Looks like your lost! Click the button below to take you back to the
            homepage.
          </p>
          <Link to="/">
            <CustomButton title="Homepage" btnStyle="DBlue" />
          </Link>
        </Container>
      </MainSectionDiv>
    </>
  );
};

export default NotFoundPage;
