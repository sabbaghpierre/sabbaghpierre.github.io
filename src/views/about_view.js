import { BiLogoFlutter, BiLogoReact, BiDownload } from "react-icons/bi";
import Simi from "../assets/images/simi.jpg";
import Resume from "../assets/PierreSabbaghResume.docx";
import styles from "../home.module.css";
export default function AboutView() {
  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          width: "50%",
          alignSelf: "center",
        }}
      >
        <img
          style={{
            aspectRatio: 1,
            width: 100,
            borderRadius: 360,
            objectFit: "cover",
          }}
          alt="Simi"
          src={Simi}
        />
        <div
          style={{
            marginLeft: 10,
            color: "white",

            textAlign: "start",
            alignSelf: "center",
          }}
        >
          <h1>Pierre Sabbagh</h1>
          <h3>
            Software Developer{" "}
            <a
              style={{ color: "white" }}
              href="https://softimpact.net"
              target="_blank"
              rel="noreferrer"
            >
              {" "}
              @Softimpact
            </a>
          </h3>
        </div>
      </div>
      <div
        style={{
          width: "50%",
          cursor: "grab",
          alignSelf: "center",
        }}
      >    <a
            href={Resume}
            style={{ fontSize: 20, color: "white",textDecoration:'none' }}
            download="PierreSabbaghResume"
          >
        <div
          className={styles.resume}
        >
          <BiDownload style={{ color: "white", height: 30, width: 30 }} />
      
            Resume
   
        </div>
        </a>
      </div>
      <p
        style={{
          fontSize: 25,
          color: "white",
          width: "50%",
          textAlign: "start",
          alignSelf: "center",
        }}
      >
        Yo! I'm Pierre, a software developer based in Lebanon. I enjoy building
        performant, usable, and beautiful experiences for mobile and sometimes
        for web & desktop.{<br />}
        {<br />}I mainly work with cross platform technologies, such as{" "}
        {<BiLogoFlutter />} and {<BiLogoReact />}.{<br />}
        {<br />}
        In my off time, I play PC games with friends, make random mobile and web
        apps, bounce around Reddit, Lemmy, and Twitch for new ideas and watch TV
        Shows for entertainment.
      </p>
    </>
  );
}
