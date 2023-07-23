import styles from "../home.module.css";
import {
  FaLinkedin,
  FaInstagram,
  FaGithub,
  FaWhatsapp,
  FaEnvelope,
} from "react-icons/fa";
const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className={styles.footer}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <p>{`Copyright © Pierre Sabbagh ${year}`}</p>
        <ul>
          <a
            href="https://www.linkedin.com/in/sabbaghpierre/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin className={styles.footerLogo} />
          </a>
          <a
            href="mailto:pierresabbagh47@gmail.com"
            target="_blank"
            rel="noreferrer"
          >
            <FaEnvelope className={styles.footerLogo} />
          </a>

          <a
            href="https://github.com/sabbaghpierre"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub className={styles.footerLogo} />
          </a>
          <a
            href="https://www.instagram.com/sabbaghpierre/"
            target="_blank"
            rel="noreferrer"
          >
            <FaInstagram className={styles.footerLogo} />
          </a>
          <a href="https://wa.me/96176630992" target="_blank" rel="noreferrer">
            <FaWhatsapp className={styles.footerLogo} />
          </a>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
