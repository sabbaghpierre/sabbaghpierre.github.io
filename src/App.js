import { Route, Routes } from "react-router-dom";
import styles from "../src/home.module.css";
import "./App.css";
import Footer from "./components/footer";
import NavBar from "./components/navbar";
import AboutView from "./views/about_view";
import HomeView from "./views/home_view";
import ProjectDetailsView from "./views/project_details_view";
function App() {
  return (
    <div className={styles.App}>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/about" element={<AboutView />} />
        <Route path="/project/:id" element={<ProjectDetailsView />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
