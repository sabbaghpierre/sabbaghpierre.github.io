import styles from "../home.module.css";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <nav className={styles.navbar}>
      <NavLink
        to="/"
        className={({ isActive }) =>
          isActive ? styles.navbarTitleActive : styles.navbarTitle
        }
      >
        Home
      </NavLink>
      <NavLink
        to="/about"
        className={({ isActive }) =>
          isActive ? styles.navbarTitleActive : styles.navbarTitle
        }
      >
        About
      </NavLink>
    </nav>
  );
}
