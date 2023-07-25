import styles from "../home.module.css";
import Card from "../components/card";
import { Link } from "react-router-dom";
const data = [
  {
    id: 0,
    title: "Urban Beirut",
    imageUrl:
      "https://urbanbeirut.com/wp-content/uploads/2021/12/cropped-ur79.png",
    description:
      "Furniture Store App built using Flutter with a WooCommerce backend.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.fodigi.urbanbeirut",
    appStoreLink: "https://apps.apple.com/lb/app/urban-beirut/id1622005589",
  },
  {
    id: 1,
    title: "Al Jadeed",
    imageUrl:
      "https://play-lh.googleusercontent.com/mKzURt-baKDGTfdMA4UCR5A96AafGzT--a2jhffY4jvoP1xDogdfExkDCf3hLQHzUmQ=w416-h235",
    description: "Al Jadeed is a renown TV Station in Lebanon.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=mobi.foo.aljadeed&hl=en&gl=US",
    appStoreLink: "https://apps.apple.com/us/app/al-jadeed/id548634879",
  },
  {
    id: 2,
    title: "Target Food",
    imageUrl: "https://targetfoodco.com//images/target-food-logo.png",
    description: "Grocery Store App built using Flutter.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.thewebaddicts.targetfood",
    appStoreLink: "https://apps.apple.com/lb/app/target-food/id1629391815",
  },
  {
    id: 3,
    title: "Ian Assist",
    imageUrl:
      "https://play-lh.googleusercontent.com/LuJ9qzLjXVneCb6Wwl-tU90pb706gwGBH6DM2WE_uVZ8_iqBuor_7pjsf0LK0PxfF-c=w416-h235",
    description:
      "Digital assistance app for the company Mideast Assistance & Ian Assist, built using Flutter.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.ianassist.ianapp&hl=en&gl=US",
    appStoreLink: "https://apps.apple.com/in/app/ian-assist/id1667218731",
  },
  {
    id: 4,
    title: "Artists And More",
    imageUrl:
      "https://play-lh.googleusercontent.com/kRSSiyI7_JPi355Gfs7lSJavPlkFmD0wm3V5Xk4ymvK7rZnYMJAqAFNTW-RAKUVTFQ0=w416-h235",
    description:
      "Artists & More is the biggest entertainment and show production company in the Middle East providing clients across the globe with astonishing acts serving Weddings, Corporate Events, Malls, Nightclubs, Resorts, Family Events, Festivals, Concerts, Brands & More.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.thewebaddicts.artists_and_more_door_control",
    appStoreLink: "https://apps.apple.com/lb/app/artists-and-more/id1632908576",
  },
  {
    id: 5,
    title: "USA CAB ADS",
    imageUrl:
      "https://play-lh.googleusercontent.com/9oLCV9aGGVUhy26LMokSjnoIoujfM2I9r7AG8WOin6os7N1hV0nFyBxNNreyoJZLhzE=w416-h235",
    description:
      "USA Cab Ads is a specific tool for our client to monitor and track their current live ads.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.thewebaddicts.usa_cab_ads_app&hl=en_US&gl=US",
    appStoreLink:
      "https://apps.apple.com/gb/app/usa-cab-ads/id6445888428?platform=iphone",
  },
];

export default function HomeView() {
  const cardsList = data.map((e) => (
    <Link style={{ textDecoration: "none" }} to={"/project/" + e.id}>
      <Card
        title={e.title}
        imageUrl={e.imageUrl}
        description={e.description}
        playStoreLink={e.playStoreLink}
        appStoreLink={e.appStoreLink}
      ></Card>
    </Link>
  ));

  return (
    <>
      <p className={styles.header}>
        This is a simple website to showcase some of my projects.
      </p>
      <p style={{ fontSize: 10 }}>Work in Progress!</p>
      <ul className={styles.gridContainer}>{cardsList}</ul>
    </>
  );
}
