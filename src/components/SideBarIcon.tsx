import { useRecoilState, useRecoilValue } from "recoil";
import { menuState, themeState } from "../atoms";
import { useEffect, useRef } from "react";
import IconItem from "./sidebar_item/IconItem";
import SettingItem from "./sidebar_item/SettingItem";
/* icon import */
import AccountIcon from "./icons/AccountIcon";
import ContactIcon from "./icons/ContactIcon";
import DocumentsIcon from "./icons/DocumentsIcon";
import ExtensionsIcon from "./icons/ExtensionsIcon";
import SettingIcon from "./icons/SettingIcon";
import SourceControlIcon from "./icons/SourceControlIcon";
import InfoIcon from "./icons/InfoIcon";
/* CSS import */
import style from "../styles/SideBarIcon.module.css";

function SideBarIcon() {
  const [open, setOpen] = useRecoilState(menuState);
  const theme = useRecoilValue(themeState);
  const themeRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setOpen((isOpen) => !isOpen);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    function handleOutside(e: MouseEvent) {
      if (themeRef.current && !themeRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleOutside);
    return () => {
      document.removeEventListener("mousedown", handleOutside);
    };
  }, [theme, themeRef]);
  return (
    <>
      <aside>
        <div>
          <IconItem Icon={DocumentsIcon} path="/" title="Home" />
          <IconItem Icon={InfoIcon} path="/about" title="About" />
          <IconItem Icon={ExtensionsIcon} path="/projects" title="Projects" />
          <IconItem Icon={ContactIcon} path="/contact" title="Contact" />
          <IconItem
            Icon={SourceControlIcon}
            path="https://github.com/NinNiNanNa"
            target="_blank"
            title="GitHub"
          />
        </div>
        <div>
          <div className={style.icon_wrap}>
            <AccountIcon className={style.icon} />
          </div>
          <div className={style.icon_wrap} ref={themeRef}>
            <SettingIcon className={style.icon} onClick={toggleMenu} />
            {open && <SettingItem />}
          </div>
        </div>
      </aside>
    </>
  );
}

export default SideBarIcon;
