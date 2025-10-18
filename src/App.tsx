import "./App.css";
import styles from "./App.module.css";
import logo from "./logo/logo-1.jpg";

import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import useClickOutsideToggle from "./hooks/useClickOutsideToggle.tsx";

function App() {
  // This is so we can toggle the hamburger menu
  const { expanded, setExpanded, ref } =
    useClickOutsideToggle<HTMLButtonElement>();

  return (
    <>
      <div className={styles.App}>
        {/* Navbar */}
        <Navbar
          expanded={expanded}
          collapseOnSelect
          expand="lg"
          className={styles.NavBar}
          fixed="top"
        >
          <Container fluid>
            <Navbar.Brand className={`px-4 ${styles.Logo}`}>
              {/* Navbar Logo */}
              <Nav.Link>
                <div className={styles.LogoLink}>
                  <img src={logo} alt="Company Logo" className={styles.Logo} />
                </div>
              </Nav.Link>
            </Navbar.Brand>
            <Navbar.Toggle
              ref={ref}
              onClick={() => setExpanded(!expanded)}
              aria-controls="responsive-navbar-nav"
              className={styles.MenuIcon}
            ></Navbar.Toggle>
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className={`ms-auto ${styles.NavLinks}`}>
                {/** Nav Links in Navbar */}
                <Nav.Link>Services</Nav.Link>
                <Nav.Link>About</Nav.Link>
                <Nav.Link>Contact Us</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>

        <p>Hugh's big important website...... tada!</p>
      </div>
    </>
  );
}

export default App;
