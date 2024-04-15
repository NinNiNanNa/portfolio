import HomeItem from "../components/content_item/HomeItem";
/* img import */
import hello from "../assets/images/wave-hello.gif";
/* icon import */
import DocumentsIcon from "../components/icons/DocumentsIcon";
import ReactIcon from "../components/icons/ReactIcon";
import SolidColorVScodeIcon from "../components/icons/SolidColorVScodeIcon";
import InfoIcon from "../components/icons/InfoIcon";
import ExtensionsIcon from "../components/icons/ExtensionsIcon";
import ContactIcon from "../components/icons/ContactIcon";
import SourceControlIcon from "../components/icons/SourceControlIcon";
/* CSS import */
import style from "../styles/Home.module.css";

function Home() {
  return (
    <>
      <div className={style.wrap}>
        <SolidColorVScodeIcon className={style.icon_big} />
        <div className={style.title_wrap}>
          <h1 className={style.title}>Hello SoJin's World!</h1>
          <img className={style.image} src={hello} alt="hello" />
        </div>
        <div className={style.list_item_wrap}>
          <HomeItem
            MenuIcon={DocumentsIcon}
            title="인트로 페이지"
            ThemeIcon={ReactIcon}
            fileName="Home.tsx"
          />
          <HomeItem
            MenuIcon={InfoIcon}
            title="자기소개 페이지"
            ThemeIcon={ReactIcon}
            fileName="About.tsx"
          />
          <HomeItem
            MenuIcon={ExtensionsIcon}
            title="프로젝트 페이지"
            ThemeIcon={ReactIcon}
            fileName="Projects.tsx"
          />
          <HomeItem
            MenuIcon={ContactIcon}
            title="연락처 페이지"
            ThemeIcon={ReactIcon}
            fileName="Contact.tsx"
          />
          <HomeItem MenuIcon={SourceControlIcon} title="깃허브 페이지" />
        </div>
      </div>
    </>
  );
}

export default Home;
