import "./App.css";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/homepage/homepage";
import ServicesPage from "./pages/servicesPage/servicesPage";
import AboutPage from "./pages/aboutPage/aboutPage";
import ContactPage from "./pages/contactPage/contactPage";

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

        <p>Hugh's big important website...... tada!</p>
      </div>
    </>
  );
}

export default App;
