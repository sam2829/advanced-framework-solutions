import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

import logo from "../logo/logo-1.jpg";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import useClickOutsideToggle from "../hooks/useClickOutsideToggle.tsx";
import NavBarNavLink from "./NavBarNavLink.tsx";

// component to render Navbar
const NavBar = () => {
  // This is so we can toggle the hamburger menu
  const { expanded, setExpanded, ref } =
    useClickOutsideToggle<HTMLButtonElement>();
  return (
    <div>
      {/* Navbar */}
      <Navbar
        expanded={expanded}
        collapseOnSelect
        expand="lg"
        className={styles.NavBar}
        fixed="top"
      >
        <Container fluid>
          <Navbar.Brand className={` ${styles.Logo}`}>
            {/* Navbar Logo */}
            <Link to="/">
              <div className={styles.LogoLink}>
                <img src={logo} alt="Company Logo" className={styles.Logo} />
              </div>
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle
            ref={ref}
            onClick={() => setExpanded(!expanded)}
            aria-controls="responsive-navbar-nav"
            className={styles.MenuIcon}
          ></Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`ms-auto ${styles.NavLinks}`}>
              {/** Import Nav Links in Navbar */}
              <NavBarNavLink title="Home" to="/" contactUsLink={false} />
              <NavBarNavLink
                title="Services"
                to="/services"
                contactUsLink={false}
              />
              <NavBarNavLink title="About" to="/about" contactUsLink={false} />
              <NavBarNavLink
                title="Contact Us"
                to="/contact"
                contactUsLink={true}
              />
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default NavBar;
