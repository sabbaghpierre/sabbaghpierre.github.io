import styles from "../home.module.css";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
import { Link } from "react-router-dom";
export default function Card(props) {
  return (
    <div className={styles.containerView}>
      <Link style={{ textDecoration: "none" }} to={"/project/" + props.id}>
        <div>
          <img
            src={props.imageUrl}
            alt="logo"
            className={styles.containerImage}
          />
          {/* <div style={{ height: 1, backgroundColor: "grey" }} /> */}

          <div className={styles.containerBody}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                overflow: "auto",
              }}
            >
              <h1>{props.title}</h1>
              <p style={{ height: 30 }}>{props.description}</p>
            </div>
          </div>
          </div>
  
          </Link>
          <div className={styles.buttonRow}>
            <a
              href={props.playStoreLink}
              target="_blank"
              className={styles.button}
              rel="noreferrer"
            >
              <div className={styles.buttonContent}>
                <p>Play Store</p>
                <FaGooglePlay style={{ alignSelf: "center" }} />
              </div>
            </a>

            <a
              href={props.appStoreLink}
              target="_blank"
              className={styles.button}
              rel="noreferrer"
            >
              <div className={styles.buttonContent}>
                <p>App Store</p>
                <FaAppStore style={{ alignSelf: "center" }} />
              </div>
            </a>
          </div>
        </div>
  )
}
