import "./App.css";
import styles from "./App.module.css";
import "bootstrap/dist/css/bootstrap.min.css";

import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <div className={styles.App}>
        {/* Import NavBar */}
        <NavBar />

        <p>Hugh's big important website...... tada!</p>
      </div>
    </>
  );
}

export default App;
