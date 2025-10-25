import { Link } from "react-router-dom";

import { Col } from "react-bootstrap";
import CustomButton from "../../components/CustomButton";

// props for button layout
interface HomepageButtonLayoutProps {
  link: string;
  btnTitle: string;
  btnStyle: "LBlue" | "DBlue";
}
// component to render the custom button layout on homepage
const HomepageButtonLayout: React.FC<HomepageButtonLayoutProps> = ({
  link,
  btnTitle,
  btnStyle,
}) => {
  return (
    <>
      <Col xs={12} lg={6} className="mb-4">
        <Link to={link}>
          <div>
            {/* import custom button */}
            <CustomButton title={btnTitle} btnStyle={btnStyle} />
          </div>
        </Link>
      </Col>
    </>
  );
};

export default HomepageButtonLayout;
