import { useParams } from "react-router-dom";
import { BiLogoFlutter, BiLogoReact } from "react-icons/bi";
import { SiDotnet, SiLaravel, SiWoocommerce } from "react-icons/si";
import styles from '../home.module.css';
export default function ProjectDetailsView(props) {
  let { id } = useParams();

  const data = [
    {
      id: 0,
      title: "Urban Beirut",
      technologies: ["flutter", "woocommerce"],
      features: [
        "WooCommerce backend integration.",
        "Full checkout process using CoCart Rest APIs.",
      ],
      screenshots: [
        "https://play-lh.googleusercontent.com/q05B6w2FXzW-9s0iuZDQL0imFvsY4ogEsLBHkRk0tGZuV6scq184-PfQHCFvGalCJQ=w526-h296",
        "https://play-lh.googleusercontent.com/7UnUjb8uPlyTDkoL-AgRNVw6Jmxdh3GToO7dLe-ciQiQgNqNpiL0Q7O-1GQChlzkZA=w526-h296",
        "https://play-lh.googleusercontent.com/okrYFtrumYkSHAn4pmNbaBXZnj8a0x64xAUWpTAYHseZla1yy8T6XeVG3Iv58j0RiCrD=w526-h296",
        "https://play-lh.googleusercontent.com/l88bl9o9ZktwDaV6WstxvX5Hz9usCpJ8EETtworj1afkhq__YbontpLM2kLYfVudBQ=w526-h296",
        "https://play-lh.googleusercontent.com/JGjfpPDQQphlC8zHeTJHxunecMmoEtEHeWi8i4otFJ27IXf0wcgQdQl-E4aTgc67m0c=w526-h296",
        "https://play-lh.googleusercontent.com/ZLOzme3mYV_u8KXBBO40fJT4-VSpU3n8jxY9AArjEh1PipHp634UX2urETyBn62KtA=w526-h296",
        "https://play-lh.googleusercontent.com/I3nSSozeUnOgNbXtyjsVP-eO7LfIgwHyzz7idsJA3cAAFT1DfbsZekQf0jwTxcoLavw=w526-h296",
        "https://play-lh.googleusercontent.com/6vC9bx1vQMMXEdT48QN3bmXAPFu8ptCq1BwqTjiClAhpuQKURuiYaE_rUARrubmf3ak=w526-h296",
      ],
      imageUrl:
        "https://urbanbeirut.com/wp-content/uploads/2021/12/cropped-ur79.png",
      shortDescription:
        "Furniture Store App built using Flutter with a WooCommerce backend.",
      longDescription:
        "Technology, creativity and inspiration are three core values we embed in every product. We make it simple to express your personal style at home with unique, stylish products.",

      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.fodigi.urbanbeirut",
      appStoreLink: "https://apps.apple.com/lb/app/urban-beirut/id1622005589",
    },
    {
      id: 1,
      title: "Al Jadeed",
      technologies: ["flutter", "dotnet","react"],
      features: [
        "Push Notifications with proper redirection.",
        "Video Player with Google Cast, Apple Airplay, Picture-In-Picture(Android), FullScreen, Seek To, Draggable progress bar, etc..",
        "Ads Integration",
        "tvOS App built using react-native-tv-os",
        "Youtube player integration",
        "Live broadcast",
      ],
      screenshots: [
        "https://play-lh.googleusercontent.com/WTwOvOhSUWTWqGqmdBZFf1fTmldq4V9Or7qjWVG7qZvCeVo1yWUHpJk95MIstZ6IiKE=w526-h296",
        "https://play-lh.googleusercontent.com/6KUmGeyfnL_xtkqNDi6H9nD3NqfL806QkibFR-WDWPQEXIABx89_GJuPyd_zaIdgjg=w526-h296",
        "https://play-lh.googleusercontent.com/Y_uqViyAghCZp4HgpwEAxywb2jYrYBGUOXBiBuv4F71hxo7rBSfVl3RcZp4RqZVMohQ=w526-h296",
        "https://play-lh.googleusercontent.com/5jDcUMzGurYfwGRv3YNRh_NclJN9jXAjRqYZw3u2-a70xGz_nu4lPGLjvB2jcpC8Djs=w526-h296",
        "https://play-lh.googleusercontent.com/UdMoYZ5-CjQpWN5j5WsLV3ZBWTkSv9lHWdx7wJFlJ44c2yPiJ4nGX-qo114FUHYN-_c=w526-h296",
      ],
      imageUrl:
        "https://play-lh.googleusercontent.com/mKzURt-baKDGTfdMA4UCR5A96AafGzT--a2jhffY4jvoP1xDogdfExkDCf3hLQHzUmQ=w416-h235",
      shortDescription: "Al Jadeed is a renown TV Station in Lebanon.",
      longDescription:
        "Keep yourself up-to-date on the latest news and events from Lebanon, the region, and the world with the Al Jadeed App. With exclusive news, videos, entertainment, and sports news right at your fingertips, Al Jadeed TV offers a great user experience through its high-quality live streaming and catch-up of all programs, videos, and episodes. Al Jadeed is a prominent Lebanese media group known for delivering comprehensive and reliable news coverage on a wide range of topics, including politics, economics, sports, and entertainment. Its commitment to accuracy and impartiality has earned it a strong reputation as a leading news provider in the Arab region.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=mobi.foo.aljadeed&hl=en&gl=US",
      appStoreLink: "https://apps.apple.com/us/app/al-jadeed/id548634879",
    },
    {
      id: 2,
      title: "Target Food",
      technologies: ["flutter", "laravel"],
      features: [
        "Full E-Commerce experience, from browsing products, adding to your cart, to checking out.",
      ],
      screenshots: [
        "https://play-lh.googleusercontent.com/jzhgc9R06eSoQ1zTzKKwokRH5fUAFXIhKoT063ursMAjaIbXg3Y3K8l1ddJkrbPZSa4=w526-h296",
        "https://play-lh.googleusercontent.com/YHVzbQiLMOXs6JdoWDoxesS6TM9Eu9zoP6Ra2qrdZtfHGvH23jqquMIMYZqlY4rR=w526-h296",
        "https://play-lh.googleusercontent.com/jjavHngWcgH52fiOIxBrihOHm-HsRrIpM9O2PIraTeh8D3ktOfpF4ItSev6n-qZNB6R9=w526-h296",
        "https://play-lh.googleusercontent.com/38QMwoZaEsSnk4944W9D8r6VSXsGohS885xm5PCnfmyHZIcLFNgyGNBQm5t3-XAv8IA=w526-h296",
        "https://play-lh.googleusercontent.com/906A7iuOzeUHV4XV_NuIFBCJdockvTk9__0yHOdjDUxx4Gew6c746ehmnpaCr0Ewwuk=w526-h296",
        "",
      ],
      imageUrl: "https://targetfoodco.com//images/target-food-logo.png",
      shortDescription: "Grocery Store App built using Flutter.",
      longDescription:
        "Currently, with economic crisis and life struggles, shopping-from-home or from office setups became a must and more convenient especially that, going out to physically shop in stores is quite challenging and time consuming, so TARGET FOOD providing wide range of quality and value-for-money food to non-food products, from around the world just to your door, becomes ideal. Especially with very special well studied prices respecting daily updates and avoiding instability in rates, economizing unneeded margin struggles.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.thewebaddicts.targetfood",
      appStoreLink: "https://apps.apple.com/lb/app/target-food/id1629391815",
    },
    {
      id: 3,
      title: "Ian Assist",
      technologies: ["flutter", "dotnet"],
      features: [
        "Chat communication, featuring the possibilities to upload documents, images, record and send voice messages.",
        "Push notifications integration.",
        "QR Scan Login.",
        "Analytics & Crashlytics implemented.",
      ],
      screenshots: [
        "https://play-lh.googleusercontent.com/5hYeoyZuwW0wj0o0o2OgefSNWU4DfINnj1VdHRJeOJDt96QyCDXq-kxKLj02WwvmvgI=w526-h296",
        "https://play-lh.googleusercontent.com/zZhtpT9Ec6piaa-mLl2cXL8unVCsnej2fJaEVBru7ZiSDJ9PSWO7761iz4XcF-GuZQM=w526-h296",
        "https://play-lh.googleusercontent.com/nkZ1001sPNXNCJCOxvqS-WxIl0o5dPtfpB_UI_qAWGbnU40Y1J8XyrSOoyBUswQcFQ4=w526-h296",
        "https://play-lh.googleusercontent.com/vvBobX8G5Edm8UsFEdXuVozmaZOuNTowqLKnV4ujXmIhMVdMygxclOGMGotolqOufRc=w526-h296",
        "https://play-lh.googleusercontent.com/-oiZ_C3Lu9YYoIB6IfZmDDy8KUT6YcDZ10rROoWVLCoUPvllKkGCfcYXcEdkt7sq_-I=w526-h296",
        "https://play-lh.googleusercontent.com/6ZLdwMBGcxdLIzNpdhLUkZEQAvAEv33VRnlH_AWmxzyezUyLrNVW06lXP-mq3UMzQNZV=w526-h296",
      ],
      imageUrl:
        "https://play-lh.googleusercontent.com/LuJ9qzLjXVneCb6Wwl-tU90pb706gwGBH6DM2WE_uVZ8_iqBuor_7pjsf0LK0PxfF-c=w416-h235",
      shortDescription:
        "Digital assistance app for the company Mideast Assistance & Ian Assist, built using Flutter.",
      longDescription:
        "Experience seamless communication and convenient access to essential services with the IAN App. Packed with features designed to enhance your travel experience, our app ensures you have a direct line of communication with our support team, hassle-free claim submissions, and easy access to your chat history and claim status.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.ianassist.ianapp&hl=en&gl=US",
      appStoreLink: "https://apps.apple.com/in/app/ian-assist/id1667218731",
    },
    {
      id: 4,
      title: "Artists And More",
      technologies: ["flutter", "laravel"],
      features: ["Mostly built around QR Scanning functionality."],
      screenshots: [
        "https://play-lh.googleusercontent.com/1C8YvVheZspFZb-ZHMz5yadMG3F1BSH_PPDVc7h8y9sxv8kYrXjpqSbWRus0BmHuD0M=w526-h296",
        "https://play-lh.googleusercontent.com/y-4CebGDGWIfDj6fo_ncFolGYGTc-TSqXMSHG7oo-GAyemQeo5IZjo7LjQAEMkE3cOXP=w526-h296",
        "https://play-lh.googleusercontent.com/9XEFO82Ec75pmiqf26-dH3R75MXWSwm6iQvTqoOcXYuHiuUX5VxrJfWsJT2Rhw6kfw=w526-h296",
      ],
      imageUrl:
        "https://play-lh.googleusercontent.com/kRSSiyI7_JPi355Gfs7lSJavPlkFmD0wm3V5Xk4ymvK7rZnYMJAqAFNTW-RAKUVTFQ0=w416-h235",
      shortDescription:
        "Artists & More is the biggest entertainment and show production company in the Middle East providing clients across the globe with astonishing acts serving Weddings, Corporate Events, Malls, Nightclubs, Resorts, Family Events, Festivals, Concerts, Brands & More.",
      longDescription:
        "Artists & More is the biggest entertainment and show production company in the Middle East providing clients across the globe with astonishing acts serving Weddings, Corporate Events, Malls, Nightclubs, Resorts, Family Events, Festivals, Concerts, Brands & More.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.thewebaddicts.artists_and_more_door_control",
      appStoreLink:
        "https://apps.apple.com/lb/app/artists-and-more/id1632908576",
    },
    {
      id: 5,
      title: "USA CAB ADS",
      technologies: ["flutter", "laravel"],
      features: ["Mostly built around Google Maps functionality."],
      screenshots: [
        "https://play-lh.googleusercontent.com/3ycxUakArKfEQtkvm3LVNFjcDQSXEoML1uPIRrvLu3pZXwrffv80sdbo68Hgs7QjmXTx=w526-h296",
        "https://play-lh.googleusercontent.com/nMy2OPpHkz9JZcqmXVZ7eHCFsnyv4miag32GPlKaI0344Jhj6g3LRfjTwtDb-LMJ_Hg=w526-h296",
        "https://play-lh.googleusercontent.com/igxyNMlKkDzDyHp50G9vz1cZjPqoPEgOeUC70eFoHBEFVEeMGj8R0VDOh0q4gwYmYg=w526-h296",
      ],
      imageUrl:
        "https://play-lh.googleusercontent.com/9oLCV9aGGVUhy26LMokSjnoIoujfM2I9r7AG8WOin6os7N1hV0nFyBxNNreyoJZLhzE=w416-h235",
      shortDescription:
        "USA Cab Ads is a specific tool for our client to monitor and track their current live ads.",
      longDescription:
        "USA Cab Ads is a specific tool for our client to monitor and track their current live ads. We provide a modern and effective outdoor advertising media channel, to our valued clients and agency partners, reflecting a traditional in-motion Out of Home advertising. The App is designed to deliver the most visible taxi Rooftop ad display In NYC data with exceptional service and to generate the most comprehensive campaigns’ reports for our clients.",
      playStoreLink:
        "https://play.google.com/store/apps/details?id=com.thewebaddicts.usa_cab_ads_app&hl=en_US&gl=US",
      appStoreLink:
        "https://apps.apple.com/gb/app/usa-cab-ads/id6445888428?platform=iphone",
    },
  ];

  function retrieveTechIcon(technology) {
    switch (technology) {
      case "flutter":
        return (
          <BiLogoFlutter className={styles.technologyIcon}/>
        );

      case "react":
        return <BiLogoReact className={styles.technologyIcon}/>;

      case "laravel":
        return <SiLaravel className={styles.technologyIcon}/>;

      case "dotnet":
        return <SiDotnet className={styles.technologyIcon}/>;

      case "woocommerce":
        return <SiWoocommerce className={styles.technologyIcon}/>;

      default:
        
        break;
    }
  }

  // eslint-disable-next-line eqeqeq
  const project = data.filter((e) => e.id == id);

  return (
    <>
      <div>
        <h1 style={{ fontSize: 50, color: "white" }}>{project[0].title}</h1>
        {project[0].technologies.map((e)=>retrieveTechIcon(e))}
      </div>
      <div style={{ display: "inline-block" }}>
        {project[0].screenshots.map((e) => (
          <img
          alt="Screenshot"
            src={e}
            style={{ aspectRatio: 9 / 16, width: 200, margin: 10 }}
          />
        ))}
      </div>
      <div style={{ padding: 10 }}>
        <h1 style={{ textAlign: "start", fontsize: 20, color: "white" }}>
          {project[0].longDescription}
        </h1>
        <ol>
          {project[0].features.map((e) => (
            <li
              style={{
                textAlign: "start",
                fontSize: 25,
                color: "white",
                margin: 5,
              }}
            >
              {e}
            </li>
          ))}
        </ol>
        {/* <div style={{ textAlign: "start", fontsize: 20, color: "white",alignItems:'center',display:'flex', }}>Technologies:  {project[0].technologies.map((e)=>retrieveTechIcon(e))}</div> */}
      </div>
    </>
  );
}
