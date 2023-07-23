import styles from "../home.module.css";
import { FaGooglePlay, FaAppStore } from "react-icons/fa";
export default function Card(props) {
  return (
    <div className={styles.containerView}>
      <img src={props.imageUrl} alt="logo" className={styles.containerImage} />
      {/* <div style={{ height: 1, backgroundColor: "grey" }} /> */}
      <div className={styles.containerBody}>
        <h1>{props.title}</h1>
        <p>{props.description}</p>

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
    </div>
  );
}
