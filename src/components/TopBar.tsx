import TopItem from "./sidebar_item/TopItem";
/* CSS import */
import style from "../styles/TopBar.module.css";
import ReactIcon from "./icons/ReactIcon";
import WindowCloseIcon from "./icons/WindowCloseIcon";

function TopBar() {
  return (
    <>
      <div className={style.items_wrap}>
        <TopItem
          Icon={ReactIcon}
          title="Home.tsx"
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
          Icon={ReactIcon}
          title="Contact.tsx"
          path="/contact"
          CloseIcon={WindowCloseIcon}
        />
      </div>
    </>
  );
}

export default TopBar;
