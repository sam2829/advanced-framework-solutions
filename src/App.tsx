import "./App.css";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage.tsx";
import ServicesPage from "./pages/servicesPage/servicesPage.tsx";
import AboutPage from "./pages/aboutPage/aboutPage.tsx";
import ContactPage from "./pages/contactPage/contactPage.tsx";
import Footer from "./components/Footer.tsx";

function App() {
  return (
    <>
      <div className={styles.App}>
        {/* Import NavBar */}
        <NavBar />
        {/* routes */}
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        {/* import footer */}
        <Footer />
      </div>
    </>
  );
}

export default App;
