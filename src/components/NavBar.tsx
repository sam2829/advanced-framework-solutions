import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

import logo from "../logo/hugh-logo.png";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import useClickOutsideToggle from "../hooks/useClickOutsideToggle.tsx";
import NavBarNavLink from "./NavBarNavLink.tsx";
import { useEffect, useState } from "react";

// component to render Navbar
const NavBar = () => {
  // This is so we can toggle the hamburger menu
  const { expanded, setExpanded, ref } =
    useClickOutsideToggle<HTMLButtonElement>();

  // state for if page is scrolled
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Navbar */}
      <Navbar
        expanded={expanded}
        collapseOnSelect
        expand="lg"
        className={styles.NavBar}
        fixed="top"
        style={{
          backgroundColor: scrolled
            ? "rgba(247, 244, 244, 0.95)"
            : "transparent",
          transition: "background-color 0.3s ease",
        }}
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
          <Navbar.Collapse
            id="responsive-navbar-nav"
            style={{
              backgroundColor: expanded
                ? "rgba(255, 255, 255, 0.75)"
                : "transparent",
              backdropFilter: "blur(2px)",
            }}
          >
            <Nav className={`ms-auto ${styles.NavLinks}`}>
              {/** Import Nav Links in Navbar */}
              <NavBarNavLink title="Home" to="/" contactUsLink={false} />
              <NavBarNavLink title="About" to="/about" contactUsLink={false} />
              <NavBarNavLink
                title="Services"
                to="/services"
                contactUsLink={false}
              />
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
