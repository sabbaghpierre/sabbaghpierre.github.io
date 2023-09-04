import Card from "../components/card";
import styles from "../home.module.css";
const data = [
  {
    id: 0,
    title: "Urban Beirut",
    imageUrl:
      "https://play-lh.googleusercontent.com/6eH-mAvDy5_W1gbfvLVdLfhjNlSJvja27q_HQZLBqz4tppmkhe6I_tmyaJxZnHeUz7HD=w416-h235",
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
    id: 6,
    title: "Lebanon 24",
    imageUrl:
      "https://play-lh.googleusercontent.com/kxkL07Am-HG_eSzFg2Tp5Xyp3vVmRiBNup2OdLXa5eCqQxdLnHhVWV-QbyH9muL3QQ=w416-h235",
    description: "Lebanon 24: Objective news around the clock",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=mobi.foo.lebanon24iPad&hl=en&gl=US",
    appStoreLink: "https://apps.apple.com/us/app/al-jadeed/id548634879",
  },
  {
    id: 2,
    title: "Target Food",
    imageUrl:
      "https://play-lh.googleusercontent.com/-mXbGUg6rqv7svB6OlkEUXg0fpwhp4P1QDMF1O-pnsNWdJMH_kX24PXXb2xfB0JKNso=w416-h235",
    description: "Grocery Store App built using Flutter.",
    playStoreLink:
      "https://play.google.com/store/apps/details?id=com.thewebaddicts.targetfood",
    appStoreLink: "https://apps.apple.com/us/app/lebanon-24-%D9%84%D8%A8%D9%86%D8%A7%D9%86-24/id595926843",
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
      "Artists & More is one of the biggest entertainment and show production company in the Middle East.",
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
    <Card
      id={e.id}
      title={e.title}
      imageUrl={e.imageUrl}
      description={e.description}
      playStoreLink={e.playStoreLink}
      appStoreLink={e.appStoreLink}
    ></Card>
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
