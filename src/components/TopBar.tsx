import TopItem from "./sidebar_item/TopItem";
/* icon import */
import ReactIcon from "./icons/ReactIcon";
import WindowCloseIcon from "./icons/WindowCloseIcon";
import CssIcon from "./icons/CssIcon";
import VScodeIcon from "./icons/VScodeIcon";
/* CSS import */
import style from "../styles/TopBar.module.css";

function TopBar() {
  return (
    <>
      <div className={style.items_wrap}>
        <TopItem
          Icon={VScodeIcon}
          title="Get Started"
          path="/"
          CloseIcon={WindowCloseIcon}
        />
        <TopItem
          Icon={ReactIcon}
          title="About.tsx"
          path="/about"
          CloseIcon={WindowCloseIcon}
        />
        <TopItem
          Icon={ReactIcon}
          title="Projects.tsx"
          path="/projects"
          CloseIcon={WindowCloseIcon}
        />
        <TopItem
          Icon={CssIcon}
          title="Contact.css"
          path="/contact"
          CloseIcon={WindowCloseIcon}
        />
      </div>
    </>
  );
}

export default TopBar;
